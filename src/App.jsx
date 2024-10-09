import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Admin from '../src/Pages/Admin/Admin';
import ListProperty from '../src/Pages/Admin/ListProperty';
import UpdateProperty from '../src/Pages/Admin/UpdateProperty';
import UserPage from '../src/Pages/user/UserPage';
import SingleProperty from '../src/Pages/user/SingleProperty';
import AboutPage from './Pages/user/AboutPage';
import ContactUsPage from './Pages/user/ContactUsPage';
import AdmineSingleProperty from './Pages/Admin/AdmineSingleProperty';
import ViewIntrestedUser from './Pages/Admin/ViewIntrestedUser';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <UserPage /> } />
          <Route path="/about" element={ <AboutPage /> } />
          <Route path="/contact" element={ <ContactUsPage /> } />
          <Route path="/property/:id" element={ <SingleProperty /> } />

          <Route path="/admin/property/:id" element={ <AdmineSingleProperty /> } />
          <Route path="/admin" element={ <Admin /> } />
          <Route path="/admin/list-property" element={ <ListProperty /> } />
          <Route path="/admin/update-property/:id" element={ <UpdateProperty /> } />
          <Route path="/admin/view-users" element={ <ViewIntrestedUser /> } />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
