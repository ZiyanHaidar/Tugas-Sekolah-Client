import React from "react";
import { Link } from "react-router-dom";
import { FaUserPlus, FaChalkboardTeacher, FaBook, FaDoorOpen } from "react-icons/fa";
import "./css/Navbar.css";

const Navbar = () => {
  const handleLogout = () => {
    console.log("Logout clicked");
    // Lakukan proses logout di sini
    // Contoh: hapus token, bersihkan sesi, dll.
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/murid" className="navbar-logo">
          Sekolah
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/murid" className="nav-links">
              <FaUserPlus className="nav-icon" /> Siswa
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/guru" className="nav-links">
              <FaChalkboardTeacher className="nav-icon" /> Guru
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/mapel" className="nav-links">
              <FaBook className="nav-icon" /> Mapel
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/kelas" className="nav-links">
              <FaChalkboardTeacher className="nav-icon" /> Kelas
            </Link>
          </li>
          <li className="nav-item">
            <button className="nav-links logout-button" onClick={handleLogout}>
              <FaDoorOpen className="nav-icon" /> Keluar
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
