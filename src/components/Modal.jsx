// Modal component
export default function Modal({ onCloseModal, isModalOpen, onClearList }) {
  const showHideClassName = isModalOpen
    ? "modal display-block"
    : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modal-text">
          <span>Are you sure you wanna delete al items?</span>
          <br />
          <span>⚠️ This is an irreversible action. ⚠️</span>
        </div>

        <div className="modal-buttons">
          <button type="button" onClick={onClearList}>
            Confirm
          </button>

          <button type="button" className="close_button" onClick={onCloseModal}>
            Close
          </button>
        </div>
      </section>
    </div>
  );
}
