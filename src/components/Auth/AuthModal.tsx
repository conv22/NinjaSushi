import React, { useState } from 'react';
import fb from '../../assets/images/icons/fb.svg';
import gg from '../../assets/images/icons/gg.svg';
import classes from './Modals.module.scss';

const AuthModal: React.FC = () => {
  const [switcher, setSwitcher] = useState<'login' | 'register'>('login');
  const [form, setForm] = useState({ email: '', password: '' });
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.modal}>
        <div className={classes.close}>
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
  return (
    <>
      <h3 className={classes.h3}>Регистрация</h3>
      <form>
        <InputGroup
          name={'Email'}
          onChange={changeHandler}
          type={'email'}
          value={form.email}
        />
        <InputGroup
          name={'Password'}
          onChange={changeHandler}
          type={'password'}
          value={form.password}
        />
        <div className={classes.login_div}>
          <button type='submit' className={classes.login_btn}>
            Войти
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
  return (
    <>
      <h3 className={classes.h3}>Авторизация</h3>
      <div className={classes.social}>
        <span>Войти с помощью</span>
        <div className={classes.social_button}>
          <button>
            <img src={fb} alt='' />
          </button>
          <button>
            <img src={gg} alt='' />
          </button>
        </div>
      </div>
      <form>
        <InputGroup
          name={'Email'}
          onChange={changeHandler}
          type={'email'}
          value={form.email}
        />
        <InputGroup
          name={'Password'}
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
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
};

const InputGroup: React.FC<InputGroupProps> = ({
  name,
  type,
  value,
  onChange,
}) => {
  return (
    <div className={classes.input_group}>
      <label htmlFor={name} className={classes.input_label}>
        {name} <span className={classes.input_orange}>*</span>
      </label>
      <input
        className={classes.input_input}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      <div className={classes.input_error}></div>
    </div>
  );
};

export default AuthModal;
