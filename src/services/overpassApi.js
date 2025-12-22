export async function fetchNearbyPlaces(lat, lng, mood) {
  const radius = 2000;

  const moodMap = {
    work: ["cafe", "library"],
    date: ["restaurant", "park"],
    quick: ["fast_food"],
    budget: ["street_food", "food_court"],
  };

  const tags = moodMap[mood]
    .map((tag) => `node["amenity"="${tag}"](around:${radius},${lat},${lng});`)
    .join("");

  const query = `
    [out:json];
    (
      ${tags}
    );
    out;
  `;

  const response = await fetch(
    "https://overpass-api.de/api/interpreter",
    {
      method: "POST",
      body: query,
    }
  );

  const data = await response.json();
  return data.elements;
}
