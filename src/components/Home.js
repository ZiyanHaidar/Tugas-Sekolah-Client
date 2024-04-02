import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus, faHome } from '@fortawesome/free-solid-svg-icons';
import "./css/Home.css"; // Import file CSS yang telah dibuat

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Selamat Datang di Tampilan Home</h1>
        <nav>
          <Link to="/login" className="btn btn-primary">
            <FontAwesomeIcon icon={faSignInAlt} /> Masuk
          </Link>{" "}
          <Link to="/register" className="btn btn-success">
            <FontAwesomeIcon icon={faUserPlus} /> Daftar
          </Link>{" "}
        </nav>
      </header>
      <div className="content">
        <h2>Tentang Kami</h2>
        <p>Selamat datang di website kami! Kami adalah platform yang menyediakan berbagai informasi dan layanan yang berguna bagi pengguna kami.</p>
        <h2>Produk Kami</h2>
        <p>Kami menawarkan berbagai produk berkualitas tinggi untuk memenuhi kebutuhan Anda. Jelajahi katalog produk kami dan temukan yang terbaik untuk Anda.</p>
        <h2>Kontak</h2>
        <p>Jika Anda memiliki pertanyaan atau membutuhkan bantuan, jangan ragu untuk menghubungi tim dukungan kami melalui email atau telepon.</p>
      </div>
      <footer className="footer">
        <p>Home © 2024.</p>
      </footer>
    </div>
  );
};

export default Home;
