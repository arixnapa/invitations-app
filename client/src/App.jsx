// import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Page404 from "./pages/Page404";
import Home from "./pages/Home";
import Invite from "./pages/Invite";
import Events from "./pages/Events";
import Event from "./pages/Event";
import Confirmation from "./pages/Confirmation";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div className="container text-center">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invite" element={<Invite />} />
        <Route path="/events" element={<Events />}>
          <Route path=":id" element={<Event />} />
        </Route>
        <Route path="/events/:id/confirm" element={<Confirmation />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}
