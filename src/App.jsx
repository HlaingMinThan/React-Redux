import CakeContainer from './components/CakeContainer.jsx';
import IceCreamContainer from './components/IceCreamContainer.jsx';
import HookCakeContainer from './components/HookCakeContainer.jsx';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store.js';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer></CakeContainer>
        <IceCreamContainer></IceCreamContainer>
        {/* <HookCakeContainer></HookCakeContainer> */}
      </div>
    </Provider>
  );
}

export default App;
