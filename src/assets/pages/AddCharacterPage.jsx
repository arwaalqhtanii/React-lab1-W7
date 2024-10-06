import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('Male');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCharacter = {
      name,
      gender,
      image,
      status: 'Alive', 
    };

    axios.post('https://66e7e6bbb17821a9d9da704c.mockapi.io/home', newCharacter)
      .then(() => {
        navigate('/');
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card bg-base-100 w-full max-w-md shadow-xl p-6">
        <figure>
          <img
            src={image || 'https://i.pinimg.com/474x/eb/97/dd/eb97dda938837f874f981b3115ea304a.jpg'}
            alt=""
            className="w-full h-40 object-contain" 
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center">Add New Character</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              className="border p-2 w-full"
              placeholder="Character Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <select
              className="border p-2 w-full"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="text"
              className="border p-2 w-full"
              placeholder="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary w-full">
              Add Character
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;

