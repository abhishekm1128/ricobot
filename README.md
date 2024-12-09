# RICOBOT

This Ricobot project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Steps to Run

1. Clone the Repo
2. Do an `npm install`
3. Start mock server with `npm run mock-server`
4. Run app with `npm start`
5. Open [http://localhost:3000/ricobot](http://localhost:3000/ricobot) to view it in your browser

### Mock Server config

The mock server serves pageData which contains metadata for texts and images to be loaded dynamically from `Server/db.json`

### Redux store

Redux is used for state management to fetch and store pageData

### Styles

Global themes and breapoints set and injected to the app with  `styled-components`