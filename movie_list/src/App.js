import './App.css';
import fetchNewPopularPage from './actionCreators/popular_pages_action_creator';
import { fetchSaveTopRatedPage } from './actionCreators/topRatedPageActionCreator';
import TestConnectComponent from './components/test_connect'

function App() {
  return (
    <div className="App">
      <TestConnectComponent movieId={113} />
    </div>
  );
}

export default App;
