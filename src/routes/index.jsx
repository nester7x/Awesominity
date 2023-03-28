import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import ContactUs from "screens/Contact";
import NotFound from "screens/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/not-found-404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found-404" />} />
    </Routes>
  );
}
