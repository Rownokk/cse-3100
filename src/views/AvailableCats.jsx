import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Peterbald' },
  { name: 'Shadow', age: '1', breed: 'Birman' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Persian' },
  { name: 'Simba', age: '2', breed: 'Bengal' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('All');

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json()))
        );
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));
        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  const filteredCats = cats.filter((cat) => {
    return (
      (selectedBreed === 'All' || cat.breed === selectedBreed) &&
      cat.name.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  const breeds = ['All', 'Sphynx', 'Peterbald', 'Birman', 'Abyssinian', 'Persian', 'Bengal'];

  return (
    <section>
      <header>
        <h2>Available Cats</h2>
        <p>Filter and search to find your purrfect match!</p>
      </header>

      <main className="filters-section">
        <select
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
          className="form-select mb-2"
        >
          {breeds.map((breed, index) => (
            <option key={index} value={breed}>
              {breed}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search by name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="form-control mb-2"
        />
      </main>

      <div className="row g-4">
        {filteredCats.map((cat, index) => (
          <div key={index} className="col-md-4">
            <div className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid mb-2"
                style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }}
              />
              <div className="cat-info">
                <h3>{cat.name}</h3>
                <p>Age: {cat.age}</p>
                <p>Breed: {cat.breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
