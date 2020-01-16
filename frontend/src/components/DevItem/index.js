import React from 'react';
import { MdDeleteForever, MdEditLocation, MdModeEdit } from 'react-icons/md';

import './styles.css';

export default function DevItem({dev, onSubmit}) {

  async function handleSubmit(e) {
    e.preventDefault();
    await onSubmit(dev.github_username);
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
      <form className="icons" onSubmit={handleSubmit}  >

        <button title="Deletar" 
          type="submit"
          className="delete-button"
          
        ><MdDeleteForever size={30}/>
        </button>
     
        <button title="Localizar" type="button" className="maps-button"><MdEditLocation size={30}/></button>
        <button title="Editar" type="button" className="edit-button"><MdModeEdit size={30}/></button>
      </form>
    </li>
  );
}