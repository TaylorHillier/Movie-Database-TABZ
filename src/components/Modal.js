import React from 'react';

const Modal = ({ isOpen, onClose, videoUrl }) => {
  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <button className="close-button" onClick={onClose}>
            Close
          </button>
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            title="Video Trailer"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    )
  );
};

export default Modal;