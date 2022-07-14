import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';
import ClipLoader from 'react-spinners/ClipLoader';
import s from './ContactItem.module.css';
import { useDeleteContactMutation } from 'redux/contactsAPI';

export default function ContactItem({ name, number, id }) {
  const [deletContact, { isLoading }] = useDeleteContactMutation();

  return (
    <>
      <div className={s.wrap}>
        <span className={s.name}>{name}</span>
        <span className={s.number}>{number}</span>
      </div>
      <button
        onClick={() => deletContact(id)}
        type="button"
        className={s.button}
      >
        {isLoading ? (
          <ClipLoader size="16px" color="white" />
        ) : (
          <AiOutlineClose />
        )}
      </button>
    </>
  );
}
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
