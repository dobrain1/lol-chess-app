import './App.scss';
import BuilderPage from './pages/BuilderPage/BuilderPage.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

function App() {
  return (
    <Provider store={store}>
      <BuilderPage />
    </Provider>
  );
}

export default App;
