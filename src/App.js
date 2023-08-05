// import logo from './logo.svg';
import './App.css';
import EmailInput from './components/EmailInput';
import Link from './components/Link';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import Overview from './components/Overview';

function App() {
  const config = {
    href: 'https://google.com'
  };

  const [searchTerm, setSearchTerm] = useState('');
    
  const updateSearchTermHandler = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <SearchBar onUpdateSearch={updateSearchTermHandler} />
      <Overview currentTerm={searchTerm} />
      <Link config={config}>Google it!</Link>
      <EmailInput />
    </div>
  );
}

export default App;
