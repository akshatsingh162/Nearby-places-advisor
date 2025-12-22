import { useEffect, useState } from "react";
import MoodSelector from "./components/MoodSelector";
import PlaceList from "./components/PlaceList";
import SortBar from "./components/SortBar";
import { fetchNearbyPlaces } from "./services/overpassApi";
import { getDistance } from "./utils/distance";

function App() {
  const [selectedMood, setSelectedMood] = useState("");
  const [sortType, setSortType] = useState("distance");
  const [location, setLocation] = useState(null);
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 1️⃣ Get user location (FREE browser API)
  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => {
        setError("Location permission denied");
      }
    );
  }, []);

  // 2️⃣ Fetch nearby places (FREE Overpass API)
  useEffect(() => {
    if (!location || !selectedMood) return;

    setLoading(true);
    setError("");

    fetchNearbyPlaces(location.lat, location.lng, selectedMood)
      .then((data) => {
        const formattedPlaces = data.map((place, index) => {
          const distance = getDistance(
            location.lat,
            location.lng,
            place.lat,
            place.lon
          );

          return {
            id: index,
            name: place.tags?.name || "Unnamed Place",
            distance: Number(distance.toFixed(2)),
            open: true, // OSM opening hours unreliable
          };
        });

        const sortedPlaces = [...formattedPlaces].sort((a, b) => {
          if (sortType === "distance") {
            return a.distance - b.distance;
          }
          if (sortType === "name") {
            return a.name.localeCompare(b.name);
          }
          return 0;
        });

        setPlaces(sortedPlaces);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch nearby places");
        setLoading(false);
      });
  }, [location, selectedMood, sortType]);

  return (
    <div
      style={{
        background: "#f4f6f8",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <div
        style={{
          maxWidth: "750px",
          margin: "auto",
          background: "#ffffff",
          padding: "25px",
          borderRadius: "14px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        }}
      >
        <h1 style={{ marginBottom: "5px" }}>
          📍 Smart Nearby Places Recommender
        </h1>

        <p style={{ color: "#555", marginBottom: "20px" }}>
          Find places around you based on your mood — using only free tools.
        </p>

        {/* Location status */}
        {location && (
          <p style={{ fontSize: "14px", color: "#666" }}>
            📌 Your location: {location.lat.toFixed(3)},{" "}
            {location.lng.toFixed(3)}
          </p>
        )}

        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* Mood selector */}
        <MoodSelector
          selectedMood={selectedMood}
          setSelectedMood={setSelectedMood}
        />

        {/* Sorting */}
        {selectedMood && (
          <SortBar sortType={sortType} setSortType={setSortType} />
        )}

        {/* Loading */}
        {loading && <p>🔄 Finding places near you...</p>}

        {/* Places */}
        {!loading && selectedMood && <PlaceList places={places} />}
      </div>
    </div>
  );
}

export default App;
