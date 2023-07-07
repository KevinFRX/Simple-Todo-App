import { useEffect, useRef } from "react";
import './ModalDialog.css'

const isClickInsideRectangle = (e, element) => {
  const r = element.getBoundingClientRect();

  return (
    e.clientX > r.left &&
    e.clientX < r.right &&
    e.clientY > r.top &&
    e.clientY < r.bottom
  );
};

function ModalDialog({
  title,
  isOpened,
  onProceed,
  onClose,
  children,
  acceptLabel,
  cancelLabel,
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (isOpened) {
      ref.current?.showModal();
      // document.body.classList.add("modal-open"); // prevent bg scroll
    } else {
      ref.current?.close();
      // document.body.classList.remove("modal-open");
    }
  }, [isOpened]);

  const proceedAndClose = () => {
    onProceed();
    onClose();
  };

  return (
    <dialog
      className="dialog-container"
      ref={ref}
      onCancel={onClose}
      onClick={(e) =>
        ref.current && !isClickInsideRectangle(e, ref.current) && onClose()
      }
    >
      <h3>{title}</h3>

      <div className="children-container">
        {children}
      </div>

      <div className="dialog-buttons">
        <button className="accept-button" onClick={proceedAndClose}>{acceptLabel}</button>
        <button className="cancel-button" onClick={onClose}>{cancelLabel}</button>
      </div>
    </dialog>
  );
};

export default ModalDialog;