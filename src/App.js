import Login from './components/Login/Login';
import NavBar from './components/navbar/NavBar';
import { useState } from 'react';

function App() {
  const [isClicked, setIsclicked] = useState(false);

  const openModal = () => {
    setIsclicked(true);
  };

  const closeModal = () => {
    setIsclicked(false);
  };

  return (
    <div>
      <NavBar openLoginModal={openModal} />
      {isClicked && <Login closeModal={closeModal} />}
    </div>
  );
}

export default App;
