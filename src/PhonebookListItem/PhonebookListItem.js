import PropTypes from 'prop-types';
// import styles from '../PhonebookListItem/PhonebookListItem.module.css';

const PhonebookListItem = ({ name, number, id, onDelete }) => {
  return (
    <li className="list-item">
      {`${name}: `}
      <span>{number}</span>
      <button type="button" id={id} onClick={event => onDelete(event.target.id)}>
        Delete
      </button>
    </li>
  );
};

PhonebookListItem.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.string,
};

export default PhonebookListItem;
