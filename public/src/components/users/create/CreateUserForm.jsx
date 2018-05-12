import React, {Component} from 'react';
import isEmail from 'validator/lib/isEmail';
import matches from 'validator/lib/matches';
import isLength from 'validator/lib/isLength';
import isMobilePhone from 'validator/lib/isMobilePhone';
import * as R from 'ramda';
import './CreateUserForm.css';

const t = {
  fname: 'نام',
  fnameExample: '',
  lname: 'نام خانوادگی',
  lnameExample: '',
  email: 'ایمیل',
  emailExample: 'ali@exmaple.com',
  mobile: 'موبایل',
  mobileExample: '',
  pass: 'رمزعبور',
  confirmPass: 'تکرار رمزعبور',
  isAdmin: 'ادمین',
  createNewUser: 'ایجاد کاربر جدید',
  cancel: 'لغو',
  or: 'یا',
};

const patternMatches = (pattern, modifiers) => str => matches(str, pattern, modifiers);
const isLengthOf = options => str => isLength(str, options);
const isValidEmail = str => isEmail(str);
const isValidMobilePhone = (locale, options) => str => isMobilePhone(str, locale, options);
const isValidIranMobilePhone = isValidMobilePhone('fa-IR');
const isEqualTo = second => first => second === first;

class CreateUserForm extends Component {

  state = {
    valid: {
      fname: false,
      lname: false,
      email: false,
      pass: false,
      mobile: false,
      confirmPass: false,
    },
    errors: {
      fname: '',
      lname: '',
      email: '',
      pass: '',
      confirmPass: '',
      mobile: '',
      isAdmin: '',
    },
    fname: '',
    lname: '',
    email: '',
    mobile: '',
    pass: '',
    confirmPass: '',
    isAdmin: false,
  };

  validateForm() {
    return R.reduce(R.and, true, R.values(this.state.valid));
  }

  validateField(fieldName, value) {
    const validators = {
      fname: [isLengthOf({min: 2, max: 50})],
      lname: [isLengthOf({min: 2, max: 50})],
      email: [isValidEmail],
      mobile: [isValidIranMobilePhone],
      pass: [isLengthOf({min: 8})],
      confirmPass: [isEqualTo(this.state.pass)],
      isAdmin: [R.always(true)],
    };

    if (typeof validators[fieldName] !== 'undefined') {
      this.setState(
        prevState => ({
          valid: {
            ...prevState.valid,
            [fieldName]: R.allPass(validators[fieldName])(value),
          }
        }),
        () => console.log(this.validateForm())
      );
    }
  };

  onInputChange = (event) => {
    const {name, value} = event.target;
    const callback = () => this.validateField(name, value);

    if (name === 'isAdmin') {
      this.setState(
        prevState => ({[name]: !prevState.isAdmin}),
        callback,
      );
    }
    else {
      this.setState(
        {[name]: value},
        callback,
      );
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const {fname, lname, email, mobile, pass, confirmPass, isAdmin} = this.state;
    console.log(this.state);
    // this.props.handleNewUserCreation({fname, lname, email, mobile, pass, confirmPass, isAdmin});
  };

  render() {
    const {fname, lname, email, mobile, pass, confirmPass, isAdmin} = this.state;
    return (
      <form className='rc-CreatePanel__form rc-inputGroup'
        onSubmit={this.handleSubmit}
      >
        <LabeledInput
          name='fname'
          displayName={`${t.fname}`}
          type='text'
          value={fname}
          onChange={this.onInputChange}
        />
        <LabeledInput
          name='lname'
          displayName={`${t.lname}`}
          type='text'
          value={lname}
          onChange={this.onInputChange}
        />
        <LabeledInput
          className='rc-ltr'
          name='email'
          displayName={`${t.email}`}
          type='email'
          value={email}
          required
          onChange={this.onInputChange}
        />
        <LabeledInput
          className='rc-ltr'
          name='mobile'
          displayName={`${t.mobile}`}
          type='text'
          value={mobile}
          required
          onChange={this.onInputChange}
        />
        <LabeledInput
          className='rc-ltr'
          name='pass'
          displayName={`${t.pass}`}
          type='password'
          required
          value={pass}
          onChange={this.onInputChange}
        />
        <LabeledInput
          className='rc-ltr'
          name='confirmPass'
          displayName={`${t.confirmPass}`}
          type='password'
          required
          value={confirmPass}
          onChange={this.onInputChange}
        />
        <LabeledInput
          name='isAdmin'
          displayName={`${t.isAdmin}`}
          type='checkbox'
          checked={isAdmin === true}
          onChange={this.onInputChange}
        />

        <div className='rc-CreatePanel__form__btnContainer rc-children--right'>
          <button className='rc-btn rc-green' type='submit'>{`${t.createNewUser}`}</button>
          <span style={{margin: '20px'}}>{`${t.or}`}</span>
          <a href="#">{`${t.cancel}`}</a>
        </div>
      </form>
    );
  }
}

const LabeledInput = ({name, displayName, className, ...rest}) => (
  <div className='rc-formControl'>
    <label className='rc-inputLabel' htmlFor={`${name}`}>
      {`${displayName}`}
    </label>
    <input className={`rc-input ${className}`.trim()} name={`${name}`} {...rest}/>
  </div>
);

export default CreateUserForm;