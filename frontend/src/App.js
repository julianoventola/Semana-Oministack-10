import React, { useEffect, useState } from 'react';

//* --- > Css import < ---*
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {

  // Create States to use values
  const [github_username, setGithubUsername] = useState(''); 
  const [techs, setTechs] = useState('');  
  const [latitude, setLatitude] = useState(''); 
  const [longitude, setLongitude] = useState('');


  // Run it when all components are mounted
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

  async function handleAddDev(){

  }

  return (
    <div id="app">
      { /* --- > ASIDE < ---*/ }
      <aside>
        <strong>Cadastrar</strong>
        <form>
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
          <li className="dev-item">
              <header>
                <img src="https://api.adorable.io/avatars/285/abott@adorable.png" alt="Juliano Ventola"/>
                <div className="user-info">
                  <strong>Juliano Ventola</strong>
                  <span>ReactJS, React Native, Node.js</span>
                </div>
              </header>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ducimus nisi ratione libero ab</p>
              <a href="https://github.com">Acessar Perfil no Github</a>
          </li>

          <li className="dev-item">
              <header>
                <img src="https://api.adorable.io/avatars/285/abott@adorable.png" alt="Juliano Ventola"/>
                <div className="user-info">
                  <strong>Juliano Ventola</strong>
                  <span>ReactJS, React Native, Node.js</span>
                </div>
              </header>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ducimus nisi ratione libero ab</p>
              <a href="https://github.com">Acessar Perfil no Github</a>
          </li>

          <li className="dev-item">
              <header>
                <img src="https://api.adorable.io/avatars/285/abott@adorable.png" alt="Juliano Ventola"/>
                <div className="user-info">
                  <strong>Juliano Ventola</strong>
                  <span>ReactJS, React Native, Node.js</span>
                </div>
              </header>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ducimus nisi ratione libero ab</p>
              <a href="https://github.com">Acessar Perfil no Github</a>
          </li>

          <li className="dev-item">
              <header>
                <img src="https://api.adorable.io/avatars/285/abott@adorable.png" alt="Juliano Ventola"/>
                <div className="user-info">
                  <strong>Juliano Ventola</strong>
                  <span>ReactJS, React Native, Node.js</span>
                </div>
              </header>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ducimus nisi ratione libero ab</p>
              <a href="https://github.com">Acessar Perfil no Github</a>
          </li>
        </ul>
      </main>

    </div>
  );
}

export default App;
