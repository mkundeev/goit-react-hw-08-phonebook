import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetUser } from 'redux/reducer';
import { useLogOutUserMutation } from 'redux/contactsAPI';
import { Avatar } from '@mui/material';
import stringAvatar from 'utilits/Avatar';
import s from './UserMenu.module.css';
import { store } from 'redux/store';
import { contactsApi } from 'redux/contactsAPI';

export default function UserMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logOutUser] = useLogOutUserMutation();
  const token = useSelector(state => state.currentUser.token);
  const name = useSelector(state => state.currentUser.user.name);
  const email = useSelector(state => state.currentUser.user.email);

  return (
    <ul className={s.hederList}>
      <li className={s.userProfileLink}>
        <Avatar {...stringAvatar(name.toUpperCase())} /> <span>{email}</span>
      </li>
      <li className={s.hederListItem}>
        <button
          type="button"
          className={s.button}
          onClick={() =>
            logOutUser(token)
              .unwrap()
              .then(() => {
                dispatch(resetUser());
                navigate('/registration', { replace: true });
                store.dispatch(contactsApi.util.resetApiState());
              })
          }
        >
          Log out
        </button>
      </li>
    </ul>
  );
}
