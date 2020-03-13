import React from 'react';
import PropTypes from 'prop-types';
import './modal.scss';

const Modal = props => <div className="modal-container" role="dialog" aria-live="assertive"><div className="modal-content">{props.children}</div></div>

Modal.propTypes = {
	children: PropTypes.any
}
export default Modal;