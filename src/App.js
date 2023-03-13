import './App.css';
import Footer from './components/common/Footer/Footer';
import Header from './components/common/Header/Header';
import UseStateHooks from './components/UseStateHooks/UseStateHooks';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='UseStateHooks'>
      <UseStateHooks />
      </div>
      <Footer />
    </div>
  );
}

export default App;
