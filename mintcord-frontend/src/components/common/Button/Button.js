import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Button.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Div = ({children, ...rest}) => <div {...rest}>{children}</div>

const Button = ({
  children, to, onClick, disabled, theme = 'default', fullWidth
}) => {

  const Element = (to && !disabled) ? Link : Div;

  return (
    <Element 
      to={to} 
      className={cx('button', theme, { fullWidth}, { disabled })} 
      onClick={disabled ? () => null : onClick}>
      {children}
    </Element>
  )
}
  
export default Button;