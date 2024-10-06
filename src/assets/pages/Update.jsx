import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [gender, setGender] = useState('Male');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
  
    axios.get(`https://66e7e6bbb17821a9d9da704c.mockapi.io/home/${id}`)
      .then(res => {
        const character = res.data;
        setName(character.name);
        setGender(character.gender);
        setImage(character.image);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCh = {
      name,
      gender,
      image,
    };

    axios.put(`https://66e7e6bbb17821a9d9da704c.mockapi.io/home/${id}`, updatedCh)
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
            src={image || 'https://via.placeholder.com/300x200.png?text=No+Image+Available'}
            alt="Character Preview"
            className="w-full h-40 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center">Update Character</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              className="border p-2 w-full"
              placeholder="Character Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <select
              className="border p-2 w-full"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
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
            />
            <button type="submit" className="btn btn-primary w-full">
              Update Character
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
