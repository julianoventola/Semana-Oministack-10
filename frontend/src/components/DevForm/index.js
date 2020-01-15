import React , {useState, useEffect} from 'react';

import './styles.css';

export default function DevForm({ onSubmit }) {
  // Create States to use values
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

  async function handleSubmit(e) {
     // Prevent form to change to "next" page
     e.preventDefault();
     
    // Send data to handleAddDev function in App.js
    await onSubmit({
      github_username,
      techs,
      latitude,
      longitude
    });

    // Clean githubusername and techs fields
    setGithubUsername('');
    setTechs('');
}

  return (
    <form onSubmit={handleSubmit}>
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
  )
}