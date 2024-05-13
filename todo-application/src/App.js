import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.js';
import MyToDos from './Pages/MyToDos.js';
import HelloWorld from './Pages/HelloWorld.js';
import Picture from './Pages/Picture.js';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import SideBar from './Components/SideBar.js';
import { Grid } from '@mui/material';


const initialGlobalState = {
  count: 0,
  todoTasks: [],
};

// Create a Context for the (global) State
const GlobalState = React.createContext();

class Global extends React.Component {
  constructor(props) {
    super(props);

	// Set the initial (global) State
    this.state = {
      globals: initialGlobalState || {},
    };
  }

  // Expose the setGlobals function to the Globals object
  componentDidMount() {
    GlobalState.set = this.setGlobalState;
  }

  setGlobalState = (data = {}) => {
    const { globals } = this.state;

    // Loop over the data items by key, only updating those which have changed
    Object.keys(data).forEach((key) => {
      globals[key] = data[key];
    });

    // Update the state with the new State
    this.setState(globals);
  };

  render() {
    const { globals } = this.state;
    const { Root } = this.props;

    return (
      // Pass the current value of GlobalState, based on this components' State, down
      <GlobalState.Provider value={globals}>
        <Root />
      </GlobalState.Provider>
    );
  }
}

// Create a shorthand Hook for using the GlobalState
const useGlobalState = () => React.useContext(GlobalState);

// Create an example component which both renders and modifies the GlobalState
function SomeComponent() {
  const { count } = useGlobalState();

  // Create a function which mutates GlobalState
  function incrementCount() {
    GlobalState.set({
      count: count + 1,
    });
  }

  return <div onClick={incrementCount}>{count}</div>;
  
}

export default function App() {
  // Note: within the Root function we can return any Component (not just SomeComponent, but also a Router for instance)
  //return <Global Root={() => <SomeComponent />} />;
  return (
    <Global Root={() => <Router>

      <Grid container>
        <Grid item xs={4} style={{ flex: '0 0 auto' }}>
          <SideBar />
        </Grid>
        
        <Grid item xs={6} style={{ flex: '1 1 auto' }}>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mytodos" element={<MyToDos />} />
            <Route path="/helloworld" element={<HelloWorld />} />
            <Route path="/picture" element={<Picture />} />
          </Routes>

        </Grid>
      </Grid>  

    </Router>
    }
    />
  );
}

// Expose the GlobalState object to the window (allowing GlobalState.set({ count: 'new' }) from anywhere in the code (even your console))
export { useGlobalState, GlobalState };
window.GlobalState = GlobalState;
