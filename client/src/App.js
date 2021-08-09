import { Router } from 'react-router-dom';

import history from './history/history';

import AppRouter from './routes/AppRouter';

const App = () => (
  <Router history={ history }>
    <AppRouter />
  </Router>
);

export default App;
