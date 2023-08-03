// import logo from './logo.svg';
import './App.css';
import EmailInput from './components/EmailInput';
import Link from './components/Link';

function App() {
  const config = {
    href: 'https://google.com'
  };

  return (
    <div className="App">
      <Link config={config}>Google it!</Link>
      <EmailInput />
    </div>
  );
}

export default App;
