function SortBar({ sortType, setSortType }) {
  return (
    <div style={{ margin: "15px 0" }}>
      <label style={{ marginRight: "10px" }}>Sort by:</label>

      <select
        value={sortType}
        onChange={(e) => setSortType(e.target.value)}
        style={{
          padding: "8px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        <option value="distance">Nearest First</option>
        <option value="name">Name (A–Z)</option>
      </select>
    </div>
  );
}

export default SortBar;
