import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
// import HomePage from './components/Pages/home';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Helmet>
          <title>{process.env.REACT_APP_TITLE}</title>
        </Helmet>
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
