import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <>
      <header className='app-header'>
        <img src={logo} alt='logo' />
        <h1>School dashboard</h1>
      </header>
      <main className='app-body'>
        <p>Login to access the full dashboard</p>
      </main>
      <footer className='app-footer'>
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </>
  );
}

export default App;
