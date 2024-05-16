import React, { useState, useEffect } from 'react';

const SearchForm = () => {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [location, setLocation] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = process.env.API_URL;
      const url = `${apiUrl}/datas.json`;
      const data = await fetch(url).then((res) => res.json());
      setData(data);
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const filtered = data.filter(artisan => {
      const nameMatch = artisan.name.toLowerCase().includes(name.toLowerCase());
      const specialtyMatch = specialty === '' || artisan.specialty === specialty;
      const locationMatch = location === '' || artisan.location === location;

      return nameMatch && specialtyMatch && locationMatch;
    });

    setFilteredData(filtered);
  };

  return (
    <div>
      <h2>Search for Artisans</h2>

      <form onSubmit={handleSearch}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter artisan name"
        />

        <label htmlFor="specialty">Specialty:</label>
        <select id="specialty" value={specialty} onChange={e => setSpecialty(e.target.value)}>
          <option value="">All Specialties</option>
          {data.map(artisan => (
            <option key={artisan.specialty + artisan.id} value={artisan.specialty}>
              {artisan.specialty}
            </option>
          ))}
        </select>

        <label htmlFor="location">Location:</label>
        <select id="location" value={location} onChange={e => setLocation(e.target.value)}>
          <option value="">All Locations</option>
          {data.map(artisan => (
            <option key={artisan.location + artisan.id} value={artisan.location}>
              {artisan.location}
            </option>
          ))}
        </select>

        <button type="submit">Search</button>
      </form>

      {filteredData.length > 0 && (
        <div>
          <h2>Results</h2>
          <ul>
            {filteredData.map(artisan => (
              <li key={artisan.id}>
                <h3>{artisan.name}</h3>
                <p>Specialty: {artisan.specialty}</p>
                <p>Location: {artisan.location}</p>
                {/* Add other details as needed */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchForm;
