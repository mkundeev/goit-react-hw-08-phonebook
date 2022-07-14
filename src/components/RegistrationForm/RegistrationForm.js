import { Formik, Field, Form, ErrorMessage } from 'formik';
import {
  useRegisterUserMutation,
  useAuthorizeUserMutation,
} from 'redux/contactsAPI';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from 'redux/reducer';
import * as Yup from 'yup';
import s from './RegistrationForm.module.css';

export default function RegistrationForm({ registration }) {
  const dispatch = useDispatch();

  const [registerUser] = useRegisterUserMutation();
  const [authorizeUser] = useAuthorizeUserMutation();

  const navigate = useNavigate();

  return (
    <Formik
      initialValues={
        registration
          ? { name: '', email: '', password: '' }
          : { email: '', password: '' }
      }
      validationSchema={Yup.object({
        name:
          registration &&
          Yup.string()
            .matches(
              /(^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$)/,
              "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            )
            .required('Required'),
        email: Yup.string()
          .email('Please provide valid e-mail')
          .required('Required'),
        password: Yup.string()
          .required('No password provided.')
          .min(8, 'Password is too short - should be 8 chars minimum.'),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        registration
          ? registerUser(values)
              .unwrap()
              .then(payload => dispatch(setUser(payload)))
              .then(() => navigate('/contacts', { replace: true }))
              .catch(error => console.log(error))
          : authorizeUser(values)
              .unwrap()
              .then(payload => {
                dispatch(setUser(payload));
                navigate('/contacts', { replace: true });
              })
              .catch(error => console.log(error));
        setSubmitting(false);
        resetForm({});
      }}
    >
      <Form className={s.form}>
        {registration && (
          <>
            <label htmlFor="name" className={s.label}>
              Name
            </label>
            <Field name="name" type="text" className={s.input} />
            <ErrorMessage
              name="name"
              render={msg => <div className={s.error}>{msg}</div>}
            />
          </>
        )}
        <label htmlFor="email" className={s.label}>
          E-mail
        </label>
        <Field name="email" type="email" className={s.input} />
        <ErrorMessage
          name="email"
          render={msg => <div className={s.error}>{msg}</div>}
        />

        <label htmlFor="password" className={s.label}>
          Password
        </label>
        <Field name="password" type="password" className={s.input} />
        <ErrorMessage
          name="password"
          render={msg => <div className={s.error}>{msg}</div>}
        />

        <button type="submit" className={s.button}>
          {registration ? 'Register' : 'Sign in'}
        </button>
      </Form>
    </Formik>
  );
}
