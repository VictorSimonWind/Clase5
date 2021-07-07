import './App.css'
import PropsExample from './components/props/PropsExample';
import FunctionalComponentStateExample from './components/state/FunctionalComponentStateExample';
import ClassComponenteStateExample from './components/state/ClassComponenteStateExample';
import FunctionComponentLifeCycles from './components/lifecycles/FunctionComponentLifeCycles';
import ClassComponenteLifeCycles from './components/lifecycles/ClassComponentLifeCycles';
import ClickTracker from './components/Practica/ClickTracker';


function App() {
  return (
    <div className="App">
      {/*<PropsExample/>*/}
      {/*<FunctionalComponentStateExample/>*/}
      {/*<ClassComponenteStateExample/>*/}
      {/*<FunctionComponentLifeCycles/>*/}
      {/*<ClassComponenteLifeCycles/>*/}
      <ClickTracker/>
    </div>

  );
}

export default App;
