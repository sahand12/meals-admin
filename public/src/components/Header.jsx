import React, {Component} from 'react';
import './Header.css';

const translations = {
  title: 'ماشین‌حساب دستور‌غذا',
}

class Header extends Component {
  
  render() {
    return (
      <div className="rc-Header">
        <h3>{`${translations.title}`}</h3>
      </div>
    );
  }
}

export default Header;