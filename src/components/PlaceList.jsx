import PlaceCard from "./PlaceCard";

function PlaceList({ places }) {
  if (places.length === 0) {
    return <p>No places found for this mood 😕</p>;
  }

  return (
    <div>
      {places.map((place) => (
        <PlaceCard key={place.id} place={place} />
      ))}
    </div>
  );
}

export default PlaceList;
