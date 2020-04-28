import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Empty from './components/Empty';
import Loadable from 'react-loadable';
import LoadingGif from './components/Loading-gif'

const Loading = () => <div style={{height: '1000px', }}><LoadingGif/></div>;


const MainPage = Loadable({
  loader: () => import('./containers/Main-container.jsx'),
  loading: Loading
});

const Router = () => (
  <div>
   {/*  <NavbarContainer /> */}
      <Switch>
         <Route exact path='/' component={MainPage} />
     
      </Switch>
    {/*   <SupportHelp /> */}
   {/*  <Footer /> */}
  </div>
);

export default Router;
