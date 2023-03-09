
import { Route } from 'react-router-dom';
import { Detail, Form, Landing, Home} from './views/views';

function App() {
  return (
    <div >
      <Route exact path ='/' render ={() => < Home />}/>
      <Route exact path='/landing' render={() => <Landing/>}/>
      <Route exact path='/form' render = {() => <Form/>}/>
      <Route exact path='/detail/:id' render = {() => <Detail/>}/>
    </div>
  );
}

export default App;
