export function ContactForm({ name, number, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          name="name"
          type="text"
          className="form-control"
          required
          value={name}
          onChange={onChange}
        />
        <label className="form-label">Number</label>
        <input
          name="number"
          type="telephone"
          className="form-control"
          required
          value={number}
          onChange={onChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
}
