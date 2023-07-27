import React, {useState} from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import Header from './components/Layout/Header';
import About from './components/Pages/orders';
import NotFound from './components/Pages/Items';
import TestLifeCycle from './components/Test/TestLifeCycle';
import { Provider } from './Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ForgotYourPassword from './components/ForgotPassword/ForgotYourPassword';
import { UserContext } from './UserContext';
import Addstore from "./components/Pages/addstore";

import AddItem from "./components/Pages/addItem";

const App = () => {
  const [username, setUsername] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <UserContext.Provider value={{username, setUsername, isLoggedIn, setIsLoggedIn}}>
    <Provider>
      {console.log(localStorage.getItem("isLoggedIn"))}
      <BrowserRouter>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Contacts />} />
              <Route exact path="/contact/add" element={<AddContact />} />
              <Route exact path="/stores/add" element={<Addstore />} />
              <Route exact path="/Pages/additem" element={<AddItem />} />
              <Route exact path="/contact/edit/:id" element={<EditContact />} />
              <Route exact path="/orders" element={<About />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/forgot-password" element={<ForgotYourPassword />} />
              <Route exact path="/test" element={<TestLifeCycle favColor="yellow" />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
    </UserContext.Provider>
  );
};

export default App;
