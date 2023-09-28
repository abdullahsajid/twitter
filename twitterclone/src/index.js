import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Home from './layout/home/Home';
import ProtectedRoutes from './auth/ProtectedRoutes';
import RouteExplore from './routes/RouteExplore';
import RouteCommunities from './routes/RouteCommunities';
import RouteNotification from './routes/RouteNotification';
import RouteMessage from './routes/RouteMessage';
import RouteBookmark from './routes/RouteBookmark';
import RouteProfile from './routes/RouteProfile';
import RouteComment from './routes/RouteComment';
import App from './App';
import { Toaster } from 'react-hot-toast';
import {disableReactDevTools} from '@fvilers/disable-react-devtools'

if(process.env.NODE_ENV === 'production'){
  disableReactDevTools()
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> 
      <BrowserRouter>
       <Routes>
          <Route element={<ProtectedRoutes/>}>
            <Route path="/home" element={<App />} />
            <Route path='/explore' element={<RouteExplore/>} />
            <Route path='/communities' element={<RouteCommunities/>} />
            <Route path='/notification' element={<RouteNotification/>} />
            <Route path='/message' element={<RouteMessage/>} />
            <Route path='/bookmark' element={<RouteBookmark/>} />
            <Route path='/profile/:id' element={<RouteProfile/>} />
            <Route path='/comments' element={<RouteComment/>}/>
          </Route>
          <Route path='/' element={<Home/>}/>
        </Routes> 
      </BrowserRouter>
      <Toaster/>
    </Provider>
  </React.StrictMode>
);
