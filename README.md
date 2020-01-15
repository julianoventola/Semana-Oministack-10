# Semana-Oministack-10 (dev em Windows)
Aplicação para localização de desenvolvedores por geolocalização

# Planilha com programas base e bibliotecas dev
https://docs.google.com/spreadsheets/d/1R_CCsAcdU7rG0qgB5I7FA4sThnjYPjGr-qfzLs1Oi8w/edit?usp=sharing

# Como iniciar:
 - Utilize a planilha para instalar os programas
 - Configure a conexão com o mongo Atlas no arquivo src/index.js
 - Rode o comando: yarn dev

# Backend Dependencies
 - express - Gerenciamento de rotas e backend
 - nodemon - Auto restart do server (dev dependency)
 - mongoose - Conexão com o banco de dado mongoDB Atlas
 - axios - Requisição ajax em APIs

# Utilizando as rotas
 - POST - Cadastrar Dev: http://localhost:3333/devs
   - Json (body): github_username, techs, latitude, longitude
   
  - GET - Listar Devs: http://localhost:3333/devs
  
  - GET - Buscar Devs: http://localhost:3333/devs
    - Query (no-body): latitude, longitude, techs
    
  - PUT - Alterar Dev: http://localhost:3333/devs/"github_username"
    - Json (body): Opcionais - techs, name, bio e avatar_url
    
  - DELETE - Deletar Dev: http://localhost:3333/devs/"github_username"
   
