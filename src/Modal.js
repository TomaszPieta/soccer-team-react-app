import React from "react";

const Modal = ({ handleClose, showModal, url}) => {
  const showHide = showModal ? 'modal block' : 'modal none';
  
  return (
    <div className={showHide}>
      <header onClick={handleClose}>Video</header>
      <section>
        <video width="100%" height="100%" controls>
        <source src={url} type="video/mp4" />
        </video>
      </section>
      <footer onClick={handleClose}>Close</footer>
    </div>
  );
};
export default Modal;