import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers/RootReducer';
import { hidePopUpAction } from '../../redux/reducers/PopUpReducer';
import successImg from '../../assets/images/icons/valid-msg.png';
import errorImg from '../../assets/images/icons/error-msg.png';
import classes from './PopUp.module.scss';

const PopUp: React.FC = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.popup);
  useEffect(() => {
    function hide() {
      if (state.modalType !== null) {
        setTimeout(() => {
          dispatch(hidePopUpAction());
        }, 1500);
      }
    }
    hide();
  }, [dispatch, state.modalType]);

  return (
    <div className={classes.popup_container}>
      <div
        className={
          state.modalType === 'error'
            ? `${classes.error} ${classes.show}`
            : classes.error
        }
      >
        <img src={errorImg} alt='error' />
        <span>{state.modalText}</span>
      </div>
      <div
        className={
          state.modalType === 'success'
            ? `${classes.success} ${classes.show}`
            : classes.success
        }
      >
        <img src={successImg} alt='success' />
        <span>{state.modalText}</span>
      </div>
    </div>
  );
};

export default PopUp;
