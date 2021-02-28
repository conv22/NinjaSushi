import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  registerActionThunk,
  loginActionThunk,
  loginActionFacebookThunk,
  loginActionGoogleThunk,
} from '../../redux/profile/actions';
import fb from '../../assets/images/icons/fb.svg';
import gg from '../../assets/images/icons/gg.svg';
import classes from './Modals.module.scss';

type AuthModalProps = {
  modal: boolean;
  setModal(value: boolean): void;
};

const AuthModal: React.FC<AuthModalProps> = ({ setModal, modal }) => {
  const [switcher, setSwitcher] = useState<'login' | 'register'>('login');
  const [form, setForm] = useState({ email: '', password: '' });
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div
      className={classes.wrapper}
      style={modal ? { display: 'flex' } : { display: 'none' }}
    >
      <div className={classes.modal}>
        <div className={classes.close} onClick={() => setModal(false)}>
          <span></span>
          <span></span>
        </div>
        {switcher === 'login' ? (
          <Login
            changeHandler={changeHandler}
            form={form}
            setSwitcher={setSwitcher}
          />
        ) : (
          <Register
            changeHandler={changeHandler}
            form={form}
            setSwitcher={setSwitcher}
          />
        )}
      </div>
    </div>
  );
};

type AuthProps = {
  changeHandler(e: React.ChangeEvent<HTMLInputElement>): void;
  setSwitcher(login: 'login' | 'register'): void;
  form: {
    email: string;
    password: string;
  };
};

const Register: React.FC<AuthProps> = ({
  changeHandler,
  setSwitcher,
  form,
}) => {
  const dispatch = useDispatch();
  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(registerActionThunk(form));
  };
  return (
    <>
      <h3 className={classes.h3}>Регистрация</h3>
      <form onSubmit={submitHandler}>
        <InputGroup
          label={'Email'}
          name={'email'}
          onChange={changeHandler}
          type={'email'}
          value={form.email}
        />
        <InputGroup
          label={'Пароль'}
          name={'password'}
          onChange={changeHandler}
          type={'password'}
          value={form.password}
        />
        <div className={classes.login_div}>
          <button type='submit' className={classes.login_btn}>
            Зарегистрироваться
          </button>
        </div>
        <div className={classes.form_end}>
          У вас уже есть аккаунт?
          <span
            role='link'
            className={classes.form_end_register}
            onClick={() => setSwitcher('login')}
          >
            Войти
          </span>
        </div>
      </form>
    </>
  );
};

const Login: React.FC<AuthProps> = ({ changeHandler, setSwitcher, form }) => {
  const dispatch = useDispatch();
  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(loginActionThunk(form));
  };
  const googleAuth = () => {
    dispatch(loginActionGoogleThunk());
  };
  const facebookAuth = () => {
    dispatch(loginActionFacebookThunk());
  };
  return (
    <>
      <h3 className={classes.h3}>Авторизация</h3>
      {/* {error && (
        <div className={classes.error}>
          <span className={classes.error_code}>{error.code}</span>
          {error.message}
        </div>
      )} */}
      <div className={classes.social}>
        <span>Войти с помощью</span>
        <div className={classes.social_button}>
          <button onClick={facebookAuth}>
            <img src={fb} alt='' />
          </button>
          <button onClick={googleAuth}>
            <img src={gg} alt='' />
          </button>
        </div>
      </div>
      <form onSubmit={submitHandler}>
        <InputGroup
          name={'email'}
          label={'Email'}
          onChange={changeHandler}
          type={'email'}
          value={form.email}
        />
        <InputGroup
          label={'Пароль'}
          name={'password'}
          onChange={changeHandler}
          type={'password'}
          value={form.password}
        />
        <div className={classes.login_div}>
          <button type='submit' className={classes.login_btn}>
            Войти
          </button>
        </div>
      </form>
      <div className={classes.form_end}>
        У вас нет аккаунта?
        <span
          role='link'
          className={classes.form_end_register}
          onClick={() => setSwitcher('register')}
        >
          Зарегистрироваться
        </span>
      </div>
    </>
  );
};

type InputGroupProps = {
  name: string;
  type: string;
  value: string;
  label: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
};

const InputGroup: React.FC<InputGroupProps> = ({
  name,
  type,
  value,
  label,
  onChange,
}) => {
  return (
    <div className={classes.input_group}>
      <label htmlFor={name} className={classes.input_label}>
        {label} <span className={classes.input_orange}>*</span>
      </label>
      <input
        className={classes.input_input}
        type={type}
        name={name}
        value={value}
        onChange={e => onChange(e)}
      />
      <div className={classes.input_error}></div>
    </div>
  );
};

export default AuthModal;
