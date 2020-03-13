import React from 'react';
import './modal.scss';

const Modal = props => <div className="modal-container" role="dialog" aria-live="assertive"><div className="modal-content">{props.children}</div></div>

export default Modal;