// Modal.tsx
import React from 'react';
import './Modal.css';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => (
  <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-button" onClick={onClose}>Fechar</button>
      {children}
    </div>
  </div>
);

export default Modal;

// Adicione esta linha para resolver o erro:
export {};