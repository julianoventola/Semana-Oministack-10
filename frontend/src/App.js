import React, { useEffect, useState } from 'react';
import api from './services/api';

//* --- > Css import < ---*
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {

  // Create States to use values
  const [devs, setDevs] = useState([]);
  const [github_username, setGithubUsername] = useState(''); 
  const [techs, setTechs] = useState('');  
  const [latitude, setLatitude] = useState(''); 
  const [longitude, setLongitude] = useState('');


  // Run it  to update GEOLOCATION when all components are mounted
  useEffect(() => {
    // Function to get geolocation
    navigator.geolocation.getCurrentPosition(
      // If it success, get the position
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude)
      },
      //If it err, log error
      (err) => {
        console.log(err);        
      },{
        //timeout to get any response for geolocation
        timeout: 30000,
      }
    )
  },[]);

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
  async function handleAddDev(e){
    // Prevent form to change to "next" page
    e.preventDefault();

    // Send all form info to server to save in database
    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude,
    })

    // Clean githubusername and techs fields
    setGithubUsername('');
    setTechs('');

    setDevs([...devs, response.data]);
    
  }

  return (
    <div id="app">
      { /* --- > ASIDE < ---*/ }
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input 
              id="github_username"
              name="github_username"
              required
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
              id="techs"
              name="techs"
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
              <div className="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input 
                  type="number"
                  id="latitude"
                  name="latitude"
                  required value={latitude}
                  onChange={e => setLatitude(e.target.value) }
                />
              </div>

              <div className="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input 
                  type="number"
                  id="longitude"
                  name="longitude"
                  required value={longitude}
                  onChange={e => setLongitude(e.target.value)}
                />
              </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      { /* --- > MAIN < ---*/ }
      <main>
        <ul>
          {devs.map(dev => (
            <li className="dev-item" key={dev._id}>
              <header>
                <img src={dev.avatar_url} alt={dev.name}/>
                <div className="user-info">
                  <strong>{dev.name}</strong>
                  <span>{dev.techs.join(', ')}</span>
                </div>
              </header>
              <p>{dev.bio}</p>
              <a href={`https://github.com/${dev.github_username}`}>Acessar Perfil no Github</a>
            </li>)
          )}
          
        </ul>
      </main>

    </div>
  );
}

export default App;
