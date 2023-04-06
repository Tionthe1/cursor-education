import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PublicationsPage from "./pages/PublicationsPage";
import PhotosPage from "./pages/PhotosPage";
import ContactsPage from "./pages/ContactsPage";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/main" element={<HomePage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/photos" element={<PhotosPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </div>
  );
};

export default App;
