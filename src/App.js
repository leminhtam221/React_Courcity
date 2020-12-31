import HomeTemplate from 'pages/HomeTemplate';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={HomeTemplate} />
      </Switch>
    </div>
  );
}

export default App;
