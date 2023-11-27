import { Component } from 'react';

export class ContactForm extends Component {
  state = { name: '', number: '' };
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit(name, number);
    this.reset();
  };
  reset() {
    this.setState({ name: '', number: '' });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            name="name"
            type="text"
            className="form-control"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label className="form-label">Number</label>
          <input
            name="number"
            type="telephone"
            className="form-control"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    );
  }
}

// export function ContactForm({ name, number, onChange, onSubmit }) {}
