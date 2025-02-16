import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { MdCloudUpload, MdClose } from 'react-icons/md';
import Modal from './Modal';

export default function UploadCandidatesModal({ isOpen, onClose, jobId }) {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    setFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv'],
      'application/vnd.ms-excel': ['.xls', '.xlsx']
    }
  });

  const handleUpload = () => {
    // Handle file upload
    console.log('Uploading files:', files);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Upload Candidates">
      <div className="space-y-4">
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
                     transition-all duration-300 ${
                       isDragActive 
                         ? 'border-primary-500 bg-primary-50' 
                         : 'border-gray-300 hover:border-primary-500'
                     }`}
        >
          <input {...getInputProps()} />
          <MdCloudUpload className="w-12 h-12 mx-auto text-primary-500 mb-4" />
          <p className="text-gray-600">
            Drag & drop your CSV file here, or click to select
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Supported formats: .csv, .xls, .xlsx
          </p>
        </div>

        {files.length > 0 && (
          <div className="space-y-2">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <span className="text-gray-600">{file.name}</span>
                <button
                  onClick={() => setFiles(files.filter((_, i) => i !== index))}
                  className="text-gray-500 hover:text-red-500"
                >
                  <MdClose />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleUpload}
            disabled={files.length === 0}
            className="px-4 py-2 bg-primary-600 text-white rounded-lg 
                     hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Upload
          </button>
        </div>
      </div>
    </Modal>
  );
} 