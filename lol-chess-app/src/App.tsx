import './App.scss';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { AppRouter } from './router/AppRouter.tsx';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
