import Layout from "./Components/Layout.jsx";
import HomePage from "./Pages/HomePage.jsx";
import ProtectedRoute from './Components/ProtectedRoute';
import ProfilePage from "./Pages/ProfilePage.jsx";
import AccountPage from "./Pages/AccountPage.jsx";
import EditAdPage from "./Pages/EditAdPage.jsx";
import SecurityPage from "./Pages/SecurityPage.jsx";
import ListingPage from "./Pages/ListingPage.jsx";
import AddListingPage from "./Pages/AddListingPage.jsx";
import AdPage from "./Pages/AdPage.jsx";
import MyAdsPage from "./Pages/MyAdsPage.jsx";
import Login from "./Components/Login.jsx";
import { Route, Routes } from 'react-router-dom';  // Removed BrowserRouter here
import React from "react";
import { UserContextProvider } from "./Components/UserContext";
import axios from "axios";


// Set Axios defaults
axios.defaults.baseURL = 'https://urban-backend-2.onrender.com'; // Updated URL
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      {/* Routes are wrapped directly without a Router */}
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Layout className=" bg-grayf8" />}>
          <Route index element={<HomePage />} />

          {/* Protected Routes */}
          <Route path="/profile" element={<ProtectedRoute element={<ProfilePage />} />} />
          <Route path="/account" element={<ProtectedRoute element={<AccountPage />} />} />
          <Route path="/security" element={<ProtectedRoute element={<SecurityPage />} />} />
          <Route path="/myads/:id" element={<ProtectedRoute element={<EditAdPage />} />} />
          <Route path="/myads" element={<ProtectedRoute element={<MyAdsPage />} />} />
          <Route path="/new-ad" element={<ProtectedRoute element={<AddListingPage />} />} />

          {/* ListingPage with URL parameters */}
          <Route path="/listing" element={<ListingPage />} />
          <Route path="/listing/:ad_id" element={<AdPage/>}/>
          </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
