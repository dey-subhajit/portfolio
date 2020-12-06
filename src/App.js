import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
// import HomePage from './components/Pages/home';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout>
            {/* <HomePage /> */}
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
