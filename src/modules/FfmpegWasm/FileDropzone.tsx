import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import './FileDropzone.css';

interface Props {
  onFile: (data: ArrayBuffer) => void;
}

export default function FileDropzone(props: Props) {
  const { onFile } = props;

  const [isMultipleFiles, setMultipleFiles] = useState<boolean>(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length !== 1) {
      setMultipleFiles(true);
      return;
    } else {
      setMultipleFiles(false);
    }

    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        const { result } = reader;
        console.log({ result });
        result && onFile(result as ArrayBuffer);
      }
      reader.readAsArrayBuffer(file);
    })
    
  }, [onFile]);
  
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()} className="file-dropzone">
      <input {...getInputProps()} />
      <div className="file-dropzone__message">
        {isDragActive
          ? <p>Drop the file here ...</p>
          : <p>Drag 'n' drop a file here, or click to select a file</p>
        }
        {isMultipleFiles && <p>A SINGLE FILE</p>}
      </div>
    </div>
  )
}
