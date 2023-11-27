export function Filter({ filter, onChange }) {
  return (
    <>
      <label className="form-label">Find contacts by name</label>
      <input
        name="filter"
        type="text"
        className="form-control"
        required
        value={filter}
        onChange={onChange}
      />
    </>
  );
}
