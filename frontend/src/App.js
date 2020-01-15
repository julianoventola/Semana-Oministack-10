import React from 'react';

//* --- > Css import < ---*
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {

  return (
    <div id="app">
      { /* --- > ASIDE < ---*/ }
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input id="github_username" name="github_username" required/>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input id="techs" name="techs" required/>
          </div>

          <div className="input-group">
              <div className="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input id="latitude" name="latitude" required/>
              </div>

              <div className="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input id="longitude" name="longitude" required/>
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
