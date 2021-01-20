import PropTypes from 'prop-types';

const Filter = ({ value, onFilterChange }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className="input"
        type="text"
        value={value}
        onChange={e => onFilterChange(e.target.value)}
      ></input>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onFilterChange: PropTypes.func,
};

export default Filter;
