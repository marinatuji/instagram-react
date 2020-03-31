import React from 'react';
import './App.scss';
import Topbar from './components/Topbar';
import Stories from './components/Stories';
import Feed from './components/Feed';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Topbar />

        <Stories />

        <Feed />
      </React.Fragment>
    )
  }
}

export default App;
