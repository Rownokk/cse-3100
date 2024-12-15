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
        const responses = await Promise.all(availableCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())));
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

  useEffect(() => {
    let filteredCats = cats;

    if (selectedBreed && selectedBreed !== 'All') {
      filteredCats = filteredCats.filter(cat => cat.breed === selectedBreed);
    }

    if (searchText) {
      filteredCats = filteredCats.filter(cat => cat.name.toLowerCase().includes(searchText.toLowerCase()));
    }

    setCats(filteredCats);
  }, [selectedBreed, searchText, cats]);

  const breeds = ['Abyssinian', 'Bengal', 'Birman', 'Persian', 'Peterbald', 'Sphynx'];

  const applyFilters = () => {
    setSelectedBreed(selectedBreed); // Reapply breed filter
  };

  return (
    <section className="layout">
      <header>
        <h2>Adopted Cats</h2>
        <p>Find your new furry friend! Filter and search below to discover all the available cats.</p>
      </header>

      <main className="filters-section">
        <div className="filters">
          <select
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
            className="form-select mb-2"
          >
            <option value="All">Select Breed</option>
            {breeds.map((breed, index) => (
              <option key={index} value={breed}>{breed}</option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Search by name"
            className="form-control mb-2"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button className="btn btn-primary" onClick={applyFilters}>Search</button>
        </div>

        <div className="mt-2 row g-4 cats-container" id="cats-container">
          {cats.map((cat, i) => (
            <div key={i} className="col-md-4">
              <div className="cat-card">
                <img src={cat.image} alt={cat.name} className="img-fluid mb-2" style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }} />
                <div className="cat-info">
                  <h3 className="h5 mb-1">{cat.name}</h3>
                  <p className="mb-0">Age: {cat.age}</p>
                  <p className="mb-0">Breed: {cat.breed}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <p>© 2024 Cat Adoption - All Rights Reserved</p>
      </footer>
    </section>
  );
}
