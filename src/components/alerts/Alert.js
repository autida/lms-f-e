import "../modals/Modal.css";

const Alert = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="alert-success">
      <div onClick={onClose} className="overlay"></div>
      <div className="modal-pos">
        <div className="modal-header">
          <h2 className="modal-title">SUCCESS</h2>
        </div>
        <div className="modal-body"></div>
        <div className="modal-footer">
          <button className="btn modal-btn" onClick={onClose}>
            OK
          </button>
        </div>
      </div>
    </div>

    // <div className="alert alert-success" role="alert">
    //   test
    //   <h4 className="alert-heading">Success</h4>
    //   <p className="mb-0">Access Granted!</p>
    //   <button className="btn modal-btn" onClick={onClose}>
    //     OK
    //   </button>
    // </div>
  );
};

export default Alert;

{
  /* <div className="alert alert-success">
    <div onClick={onClose} className="overlay"></div>
    <div className="modal-content">
      <div className="modal-header">
        <h2 className="modal-title">SUCCESS</h2>
      </div>
      <div className="modal-body">
        
      </div>
      <div className="modal-footer">
        <button className="btn modal-btn" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  </div> */
}
