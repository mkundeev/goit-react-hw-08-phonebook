import { NavLink } from 'react-router-dom';

import s from './Header.module.css';

export default function Header() {
  return (
    <header className={s.header}>
      <p className={s.logo}>
        <span className={s.logoSpan}>Phone</span>book
      </p>
      <div className={s.hederLinkWrap}>
        {true ? (
          <ul className={s.hederList}>
            <li className={s.hederListItem}>
              <NavLink to="/authorization" className={s.link}>
                Log In
              </NavLink>
            </li>
            <li className={s.hederListItem}>
              <NavLink to="/registration" className={s.link}>
                Registration
              </NavLink>
            </li>
          </ul>
        ) : (
          <ul className={s.hederList}>
            <li className={s.hederListItem}>
              <NavLink to="/profile" className={s.link}>
                User
              </NavLink>
            </li>
            <li className={s.hederListItem}>
              <span className={s.link}>Log out</span>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}
