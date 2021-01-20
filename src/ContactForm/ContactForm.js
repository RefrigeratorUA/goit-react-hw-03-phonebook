import { Component } from 'react';
import PropTypes from 'prop-types';
// import styles from '../ContactForm/ContactForm.module.css';

class ContactForm extends Component {
  static defaultProps = {
    name: '',
    number: '',
  };
  state = {
    name: this.props.name,
    number: this.props.number,
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;

    this.props.onAddContact(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            className="input"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          ></input>
        </label>
        <label>
          Number
          <input
            className="input"
            type="text"
            name="number"
            value={number}
            onChange={this.handleChange}
          ></input>
        </label>
        <br />
        <button className="btn" type="submit" disabled={!name || !number}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ContactForm;
