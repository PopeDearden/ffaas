import React from 'react';
import './App.css';
import './styles/Reset.scss'
import './styles/App.scss'
import Header from './components/Header/Header'
import Routes from './routes/Routes'
function App() {
  return (
    <div className="App">
      <Header/>
      {Routes}
    </div>
  );
}

export default App;
