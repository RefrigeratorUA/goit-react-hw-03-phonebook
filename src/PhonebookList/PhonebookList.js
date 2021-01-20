import PropTypes from 'prop-types';
import PhonebookListItem from '../PhonebookListItem/PhonebookListItem';

const PhonebookList = ({ contacts, onDelete }) => {
  return (
    <ul className="list">
      {contacts.map(el => {
        const { name, id, number } = el;
        return (
          <PhonebookListItem name={name} key={id} number={number} id={id} onDelete={onDelete} />
        );
      })}
    </ul>
  );
};

PhonebookList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ),
  onDelete: PropTypes.func,
};

export default PhonebookList;
