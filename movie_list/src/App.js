import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar/sidebar';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar/>
      </Router>
    </div>
  );
}

export default App;
