import React from 'react';
import './toolbar.scss';

const Toolbar = props => <ul className={props.className}>{props.children}</ul>

export default Toolbar;
