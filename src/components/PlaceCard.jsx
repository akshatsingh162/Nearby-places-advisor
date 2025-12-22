function PlaceCard({ place }) {
  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        padding: "15px",
        marginBottom: "12px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
      }}
    >
      <h3 style={{ marginBottom: "5px" }}>{place.name}</h3>

      <p style={{ margin: "4px 0" }}>
        📍 {place.distance} km away
      </p>

      <p style={{ margin: "4px 0", color: "green" }}>
        🕒 Likely Open
      </p>
    </div>
  );
}

export default PlaceCard;
