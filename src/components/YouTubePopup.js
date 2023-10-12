function YouTubePopup({ videoId, isOpen, closePopup }) {
    if (!isOpen) {
      return null;
    }
  
    return (
      <div className="popup-overlay">
        <div className="popup-content">
          <span className="close-button" onClick={closePopup}>
            &times;
          </span>
          <iframe
            title="YouTube Video"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }
  