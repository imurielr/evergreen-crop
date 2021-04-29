import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import CreateCrop from './components/createCrop/createCrop';
import CropList from './components/cropList/cropList';

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Switch>
          <Route path="/" component={CropList} exact={true} />
          <Route path="/create" component={CreateCrop} />
          <Route component={CropList} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
