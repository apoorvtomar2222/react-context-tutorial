import './App.css';
// import ClassBasedComponent from './container/ClassBasedComponent';
// import FunctionBasedComponent from './container/FunctionBasedComponent';
import FunctionBasedContextComponent from './container/FunctionBasedContextComponent';

import GlobalState from './context/globalState';

function App() {
  return (
    <div className="App">
      <GlobalState>

        <FunctionBasedContextComponent />
      </GlobalState>
    </div>
  );
}

export default App;
