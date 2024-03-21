import MenuOptions from './components/menuOptions/MenuOptions';
import { Outlet } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <MenuOptions />
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
