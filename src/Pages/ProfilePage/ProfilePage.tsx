import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutActionThunk } from '../../redux/profile/actions';
import { RootState } from '../../redux/reducers/RootReducer';
import classes from './ProfilePage.module.scss';

const ProfilePage: React.FC = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state: RootState) => state.profile.profile);
  const logout = () => dispatch(logoutActionThunk());
  return (
    <div className={classes.profile_container}>
      <div className={classes.profile_form}>
        <h3>Личная информация</h3>
        <ul className={classes.profile_ul}>
          <li className={classes.profile_li}>
            <span className={classes.li_label}>Email</span>
            <span className={classes.li_value}>{profile.email} </span>
          </li>
        </ul>
      </div>
      <button className={classes.profile_exit} onClick={logout}>
        Выйти
      </button>
    </div>
  );
};

export default ProfilePage;
