import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { resetUser } from 'redux/reducer';
import { useLogOutUserMutation } from 'redux/contactsAPI';
import s from './Header.module.css';

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logOutUser] = useLogOutUserMutation();
  const isLogin = useSelector(state => state.currentUser.isLoggedIn);
  const token = useSelector(state => state.currentUser.token);
  const activeLink = ({ isActive }) => (isActive ? s.linkActive : s.link);

  return (
    <header className={s.header}>
      <p className={s.logo}>
        <span className={s.logoSpan}>Phone</span>book
      </p>
      <div className={s.hederLinkWrap}>
        {!isLogin ? (
          <ul className={s.hederList}>
            <li className={s.hederListItem}>
              <NavLink to="/authorization" className={activeLink}>
                Log In
              </NavLink>
            </li>
            <li className={s.hederListItem}>
              <NavLink to="/registration" className={activeLink}>
                Registration
              </NavLink>
            </li>
          </ul>
        ) : (
          <ul className={s.hederList}>
            <li className={s.hederListItem}>
              <NavLink to="/profile" className={activeLink}>
                User
              </NavLink>
            </li>
            <li className={s.hederListItem}>
              <button
                type="button"
                className={s.button}
                onClick={() =>
                  logOutUser(token)
                    .then(() => dispatch(resetUser()))
                    .then(() => navigate('/registration', { replace: true }))
                }
              >
                Log out
              </button>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}
