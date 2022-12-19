import './App.css';
import Navigation from './components/Navigation';
import SideBar from './components/SideBar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="container">
      <div className="row">
          <SideBar />

          <div className="col-sm-9 right__column">
            <Navigation />

            <HomePage />
          </div>
      </div>
    </div>
  );
}

export default App;
