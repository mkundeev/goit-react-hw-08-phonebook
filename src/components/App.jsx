import { Routes, Route } from 'react-router-dom';
import RegistrationPage from 'pages/RegistartionPage';
import AuthorizationPage from 'pages/AuthorizationPage';
import ContactsPage from 'pages/ContactsPage';
import UserProfilePage from 'pages/UserProfilePage';

import Header from './Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route index path="/registration" element={<RegistrationPage />} />
        <Route path="/authorization" element={<AuthorizationPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="*" element={<RegistrationPage />} />
      </Routes>
    </div>
  );
}

export { App };
