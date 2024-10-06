import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './assets/pages/HomePage';
import AddCharacterPage from './assets/pages/AddCharacterPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddCharacterPage />} />
      </Routes>
    </Router>
  );
};

export default App;
