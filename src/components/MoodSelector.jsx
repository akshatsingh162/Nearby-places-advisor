function MoodSelector({ selectedMood, setSelectedMood }) {
  const moods = ["work", "date", "quick", "budget"];

  return (
    <div style={{ marginBottom: "20px" }}>
      {moods.map((mood) => (
        <button
          key={mood}
          onClick={() => setSelectedMood(mood)}
          style={{
            marginRight: "10px",
            padding: "10px",
            backgroundColor: selectedMood === mood ? "#000" : "#ddd",
            color: selectedMood === mood ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {mood.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default MoodSelector;
