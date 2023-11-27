export function ContactForm({ name, number, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          name="name"
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          required
          value={name}
          onChange={onChange}
        />
        <label className="form-label">Number</label>
        <input
          name="number"
          type="tel"
          className="form-control"
          id="exampleInputEmail1"
          required
          value={number}
          onChange={onChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
