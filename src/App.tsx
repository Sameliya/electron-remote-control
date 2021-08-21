import main from './views/main/main';
import control from './views/control/control';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Route path="/main" component={main} />
      <Route path="/control" component={control} />
    </Router>
  );
};

export default App;
