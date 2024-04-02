import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Tambah_murid from "./page/Tambah_murid";
import Tambah_guru from "./page/Tambah_guru";
import Tambah_mapel from "./page/Tambah_mapel";
import Tambah_kelas from "./page/Tambah_kelas";
import Murid from "./page/Murid";
import Guru from "./page/Guru";
import Mapel from "./page/Mapel";
import Kelas from "./page/Kelas";
import Edit_murid from "./page/Edit_murid";
import Edit_guru from "./page/Edit_guru";
import Edit_mapel from "./page/Edit_mapel";
import Edit_kelas from "./page/Edit_kelas";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tambah_murid" element={<Tambah_muridWithNavbar />} />
          <Route path="/tambah_guru" element={<Tambah_guruWithNavbar />} />
          <Route path="/tambah_mapel" element={<Tambah_mapelWithNavbar />} />
          <Route path="/tambah_kelas" element={<Tambah_kelasWithNavbar />} />
          <Route path="/murid" element={<MuridWithNavbar />} />
          <Route path="/guru" element={<GuruWithNavbar />} />
          <Route path="/mapel" element={<MapelWithNavbar />} />
          <Route path="/kelas" element={<KelasWithNavbar />} />
          <Route path="/edit_murid" element={<Edit_muridWithNavbar />} />
          <Route path="/edit_guru" element={<Edit_guruWithNavbar />} />
          <Route path="/edit_mapel" element={<Edit_mapelWithNavbar />} />
          <Route path="/edit_kelas" element={<Edit_kelasWithNavbar />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

const Tambah_muridWithNavbar = () => {
  return (
    <>
      <Navbar />
      <Tambah_murid />
    </>
  );
};

const Tambah_guruWithNavbar = () => {
  return (
    <>
      <Navbar />
      <Tambah_guru />
    </>
  );
};

const Tambah_mapelWithNavbar = () => {
  return (
    <>
      <Navbar />
      <Tambah_mapel />
    </>
  );
};
const Tambah_kelasWithNavbar = () => {
  return (
    <>
      <Navbar />
      <Tambah_kelas />
    </>
  );
};
const MuridWithNavbar = () => {
  return (
    <>
      <Navbar />
      <Murid />
    </>
  );
};

const GuruWithNavbar = () => {
  return (
    <>
      <Navbar />
      <Guru />
    </>
  );
};

const MapelWithNavbar = () => {
  return (
    <>
      <Navbar />
      <Mapel />
    </>
  );
};
const KelasWithNavbar = () => {
  return (
    <>
      <Navbar />
      <Kelas />
    </>
  );
};
const Edit_muridWithNavbar = () => {
  return (
    <>
      <Navbar />
      <Edit_murid />
    </>
  );
};

const Edit_guruWithNavbar = () => {
  return (
    <>
      <Navbar />
      <Edit_guru />
    </>
  );
};

const Edit_mapelWithNavbar = () => {
  return (
    <>
      <Navbar />
      <Edit_mapel />
    </>
  );
};
const Edit_kelasWithNavbar = () => {
  return (
    <>
      <Navbar />
      <Edit_kelas />
    </>
  );
};

export default App;