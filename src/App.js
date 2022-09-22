import React, {Fragment} from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Job from './pages/Job';

function App() {
  return (
    <Fragment >
      <Header />
      <Home />
      {/* <Job /> */}
    </ Fragment>
  );
}

export default App;
