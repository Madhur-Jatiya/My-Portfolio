import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/header/Navbar';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/navbar' element={<Navbar />} />
      </Routes>
    </Router>
  );
}

export default App;
