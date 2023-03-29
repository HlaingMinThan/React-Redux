import CakeContainer from './components/CakeContainer.jsx';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/cakes/store.js';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer></CakeContainer>
      </div>
    </Provider>
  );
}

export default App;
