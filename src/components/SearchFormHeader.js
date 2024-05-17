'use client'
import React, { useState, useEffect } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { Suspense } from 'react';

const SearchForm = () => {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [location, setLocation] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const url = `${apiUrl}/datas.json`;
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length === 0) return; // Ensure data is fetched before filtering

    // Get search params from the URL
    const nameFromUrl = searchParams.get('name') || '';
    const specialtyFromUrl = searchParams.get('specialty') || '';
    const locationFromUrl = searchParams.get('location') || '';

    setName(nameFromUrl);
    setSpecialty(specialtyFromUrl);
    setLocation(locationFromUrl);

    if (nameFromUrl || specialtyFromUrl || locationFromUrl) {
      // Perform initial filtering based on URL params
      const filtered = data.filter(artisan => {
        const nameMatch = nameFromUrl ? artisan.name.toLowerCase().includes(nameFromUrl.toLowerCase()) : true;
        const specialtyMatch = specialtyFromUrl ? artisan.specialty === specialtyFromUrl : true;
        const locationMatch = locationFromUrl ? artisan.location === locationFromUrl : true;

        return nameMatch && specialtyMatch && locationMatch;
      });

      setFilteredData(filtered);
    }
  }, [searchParams, data]);

  const handleSearch = (event) => {
    event.preventDefault();

    // Update search params in the URL
    const params = new URLSearchParams({
      name: name,
      specialty: specialty,
      location: location,
    });

    router.push(`/search?${params.toString()}`);
  };

  return (
    <Suspense>
    <div>
      <form onSubmit={handleSearch}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter artisan name"
          required
        />

        <label htmlFor="specialty">Specialty:</label>
        <select id="specialty" value={specialty} onChange={e => setSpecialty(e.target.value)} >
          <option value="">All Specialties</option>
          {Array.from(new Set(data.map(artisan => artisan.specialty))).map(specialty => (
            <option key={specialty} value={specialty}>
              {specialty}
            </option>
          ))}
        </select>

        <label htmlFor="location">Location:</label>
        <select id="location" value={location} onChange={e => setLocation(e.target.value)} >
          <option value="">All Locations</option>
          {Array.from(new Set(data.map(artisan => artisan.location))).map(location => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>

        <button type="submit">Search</button>
      </form>
    </div>
    </Suspense>
  );
};

export default SearchForm;
