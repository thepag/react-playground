import React, { useState } from 'react';
import { createFFmpeg } from '@ffmpeg/ffmpeg';

import FileDropzone from './FileDropzone';

function FfmpegWasm() {
  const [originalVideoSrc, setOriginalVideoSrc] = useState('');
  const [strippedAudioSrc, setStrippedAudioSrc] = useState('');
  const [transcodedAudioSrc, setTranscodedAudioSrc] = useState('');
  const [transcodedVideoSrc, setTranscodedVideoSrc] = useState('');
  const [message, setMessage] = useState('Drop a file above to begin transcoding');

  const ffmpeg = createFFmpeg({
    log: true,
  });

  async function onFile(input: ArrayBuffer) {
    setOriginalVideoSrc(URL.createObjectURL(new Blob([input], { type: 'video/mp4' })));
    if (!ffmpeg.isLoaded()) await ffmpeg.load();

    setMessage('Stripping audio...');
    ffmpeg.FS('writeFile', 'input.avi', new Uint8Array(input));
    await ffmpeg.run('-i', 'input.avi', '-vn', '-acodec', 'copy', 'stripped-audio.aac');
    const strippedAudio = ffmpeg.FS('readFile', 'stripped-audio.aac');
    setStrippedAudioSrc(URL.createObjectURL(new Blob([strippedAudio.buffer], { type: 'video/mp4' })));

    setMessage('Transcoding audio...');
    ffmpeg.FS('writeFile', 'input.avi', new Uint8Array(input));
    await ffmpeg.run('-i', 'input.avi', '-vn', 'output-audio.aac');
    const transcodedAudio = ffmpeg.FS('readFile', 'output-audio.aac');
    setTranscodedAudioSrc(URL.createObjectURL(new Blob([transcodedAudio.buffer], { type: 'video/mp4' })));

    setMessage('Transcoding media...');
    ffmpeg.FS('writeFile', 'input.avi', new Uint8Array(input));
    await ffmpeg.run('-i', 'input.avi', 'output.mp4');
    const data = ffmpeg.FS('readFile', 'output.mp4');
    setTranscodedVideoSrc(URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' })));

    setMessage('Completed');
  }

  return (
    <div className="ffmpegwasm">
      <p/>
      <FileDropzone onFile={onFile} />
      <p>{message}</p>
      <h2>Original Media</h2>
      <video src={originalVideoSrc} controls></video><br/>
      <h2>Stripped Audio</h2>
      <audio src={strippedAudioSrc} controls></audio><br/>
      <h2>Transcoded Audio</h2>
      <audio src={transcodedAudioSrc} controls></audio><br/>
      <h2>Transcoded Media</h2>
      <video src={transcodedVideoSrc} controls></video><br/>
    </div>
  );
}

export default FfmpegWasm;
