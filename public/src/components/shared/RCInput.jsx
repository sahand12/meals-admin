import React, {Component} from 'react';
import './RCInput.css';

class RCInput extends Component {

  render() {
    const {
      dir,
      phdir,
      classes = '',
      ...rest
    } = this.props;

    const inputClass = 'rc-input';
    const inputDirectionClass = dir === 'ltr' ? 'rc-ltr' : (dir === 'rtl') ? 'rc-rtl' : '';
    const inputPlaceholderClass = phdir === 'right' ? 'rc-ph--right' : (phdir === 'left') ? 'rc-ph--left' : '';
    const classNames = `${inputClass} ${inputDirectionClass} ${inputPlaceholderClass} ${classes}`.trim();
    return (
      <input
        className={`${classNames}`}
        {...rest}
      />
    );
  }
}

export default RCInput;