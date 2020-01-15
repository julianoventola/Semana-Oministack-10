import React, { useEffect, useState } from 'react';
import api from './services/api';

//* --- > Css import < ---*
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';

function App() {
  // Create States to use values
  const [devs, setDevs] = useState([]);

  // Run it  to update All DEVS when all components are mounted
  useEffect(() => {
    async function loadDevs() {
      // Load all devs saved in database
      const response = await api.get('/devs');
      setDevs(response.data);
    }

    loadDevs();
  },[]);

  // Access to server though API(axios)
  async function handleAddDev(data){
      // Send all form info to server to save in database
    const response = await api.post('/devs', data)

    // Add new Dev to array
    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      { /* --- > ASIDE < ---*/ }
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>

      { /* --- > MAIN < ---*/ }
      <main>
        <ul>
          {devs.map(dev => (<DevItem key={dev._id} dev={dev} />))}
        </ul>
      </main>
    </div>
  );
}

export default App;
