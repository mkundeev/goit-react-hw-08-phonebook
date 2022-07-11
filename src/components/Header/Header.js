// import { NavLink, Link } from 'react-router-dom';

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
              <span>Log In</span>
            </li>
            <li className={s.hederListItem}>
              <span>Registration</span>
            </li>
          </ul>
        ) : (
          <ul className={s.hederList}>
            <li className={s.hederListItem}>
              <span>User</span>
            </li>
            <li className={s.hederListItem}>
              <span>Log out</span>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}
