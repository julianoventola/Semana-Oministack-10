import React from 'react';
import { MdDeleteForever, MdEditLocation, MdModeEdit } from 'react-icons/md';

import './styles.css';

export default function DevItem({dev, onSubmit}) {

  async function handleSubmit(e) {
    e.preventDefault();
    await onSubmit(dev.github_username);
  }

  function handleLocation(dev) {
    window.open(
      `http://maps.google.com/maps?q=${dev.location.coordinates[1]},${dev.location.coordinates[0]}`, "_blank")
  }

  return(
    <li className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={dev.name}/>
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(', ')}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`}>Acessar Perfil no Github</a>
      <div className="icons">
        {/* DELETE */}
        <form onSubmit={handleSubmit}>
          <button title="Deletar" 
            type="submit"
            className="delete-button"><MdDeleteForever size={30}/>
          </button>
        </form> 
        {/* MAPS */}
          <button title="Localizar"
            type="button"
            className="maps-button"
            onClick={() => handleLocation(dev)}
          ><MdEditLocation size={30}/></button>
        {/* EDIT */}
        <form  onSubmit={handleSubmit}>
          <button title="Editar" type="button" className="edit-button"><MdModeEdit size={30}/></button>
        </form>  
      </div>   
    </li>
  );
}