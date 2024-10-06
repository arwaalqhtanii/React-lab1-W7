import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');

  const fetchCharacters = () => {
    axios.get('https://66e7e6bbb17821a9d9da704c.mockapi.io/home')
      .then(res => {
        setCharacters(res.data);
      });
  };

  useEffect(() => {
    fetchCharacters(); 
  }, []);

  
  const searchCharacters = () => {
    return characters.filter(character =>
      character.name.toLowerCase().includes(search.toLowerCase())
    );
  };


  const handleDelete = (id) => {
    const character = characters.find(c => c.id === id);
    const confirmDelete = window.confirm(`Are you sure you want to delete the character "${character.name}"?`);
    if (confirmDelete) {
      axios.delete(`https://66e7e6bbb17821a9d9da704c.mockapi.io/home/${id}`)
        .then(() => {
          fetchCharacters(); 
        });
    }
  };

  return (
    <div className="p-4">

      <h1 className="text-3xl font-bold text-center mb-6">Character Gallery</h1>

      <div className="flex justify-between items-center mb-4">

        <input
          type="text"
          className="border rounded p-2 w-full md:w-1/1"
          placeholder="Search characters..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
 
        <Link to="/add" className="btn btn-primary ml-2 mr-3">
          Add New Character
        </Link>
      </div>

      {searchCharacters().length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {searchCharacters().map((character) => (
            <div key={character.id} className="card bg-base-100 shadow-xl">
              <figure className="h-48 w-full">
                <img 
                  src={character.image} 
                  alt={character.name} 
                  className="w-full h-full object-contain" 
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{character.name}</h2>
                <p>Gender: {character.gender}</p>
                <div className="card-actions justify-end">
                  <Link to={`/update/${character.id}`} className="btn btn-primary mr-2">
                    Update
                  </Link>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleDelete(character.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center ">Oops 😲 ! No characters found !</div>
      )}
    </div>
  );
};

export default HomePage;
