import React, {Component} from 'react';
import RCInput from './shared/RCInput';
import './CreatePanel.css';

const t = {
  fname: 'نام',
  fnameExample: '',
  lname: 'نام خانوادگی',
  lnameExample: '',
  email: 'ایمیل',
  emailExample: 'ali@exmaple.com',
  mobile: 'موبایل',
  mobileExample: '',
  password: 'رمزعبور',
  confirmPassword: 'تکرار رمزعبور',
  isAdmin: 'ادمین',
  createNewUser: 'ایجاد کاربر جدید',
};

export default class CreatePanel extends Component {
  render() {
    return (
      <div className='rc-CreatePanel'>
        <section className='rc-CreatePanel__formContainer'>
          <form action='' className='rc-CreatePanel__form rc-inputGroup'>
            <div className="rc-formControl">
              <label className='rc-inputLabel' htmlFor='fname'>{`${t.fname}`}</label>
              <RCInput type='text' name='fname' placeholder={`${t.fnameExample}`}/>
            </div>
            <div className="rc-formControl">
              <label className='rc-inputLabel' htmlFor='lname'>{`${t.lname}`}</label>
              <RCInput type='text' name='lname' placeholder={`${t.lnameExample}`}/>
            </div>
            <div className="rc-formControl">
              <label className='rc-inputLabel' htmlFor='email'>{`${t.email}`}</label>
              <RCInput type='email' name='email' phdir='left' dir='ltr' placeholder={`${t.emailExample}`}/>
            </div>
            <div className="rc-formControl">
              <label className='rc-inputLabel' htmlFor='mobile'>{`${t.mobile}`}</label>
              <RCInput type='text' phdir='left' name='mobile' placeholder={`${t.mobileExample}`}/>
            </div>
            <div className="rc-formControl">
              <label className='rc-inputLabel' htmlFor='password'>{`${t.password}`}</label>
              <RCInput type='password' name='password'/>
            </div>
            <div className="rc-formControl">
              <label className='rc-inputLabel' htmlFor='confirmPassword'>{`${t.confirmPassword}`}</label>
              <RCInput type='password' name='confirmPassword'/>
            </div>
            <div className="rc-formControl">
              <label className='rc-inputLabel'>{`${t.isAdmin}`}</label>
              <input type='checkbox' className='rc-input' name='isAdmin'/>
            </div>

            <div className='rc-CreatePanel__form__btnContainer rc-children--right'>
              <button className='rc-btn rc-green' type='submit'>{`${t.createNewUser}`}</button>
            </div>
          </form>
        </section>
      </div>
    );
  }
}