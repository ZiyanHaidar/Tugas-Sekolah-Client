import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/Murid.css"; // Pastikan file ini ada dan benar path-nya
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Tambah_murid = () => {
  const [siswaList, setSiswaList] = useState([]);
  const [formData, setFormData] = useState({
    _id: null,
    nama: "",
    jurusan: "", // Menambahkan field jurusan
    tanggal_lahir: "",
    alamat: "",
  });

  useEffect(() => {
    fetchSiswa();
  }, []);

  const fetchSiswa = async () => {
    try {
      const response = await axios.get("/siswa");
      setSiswaList(response.data);
    } catch (error) {
      console.error("Error fetching siswa data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData._id) {
        await axios.put(`/siswa/${formData._id}`, formData); // Perbaikan di sini
      } else {
        await axios.post("/siswa", formData);
      }
      fetchSiswa();
      setFormData({ _id: null, nama: "", jurusan: "", tanggal_lahir: "", alamat: "" }); // Reset form
    } catch (error) {
      console.error("Error adding/editing siswa:", error);
    }
  };

  const handleEdit = (siswa) => {
    // Mengatur nilai form saat tombol edit diklik
    setFormData({
      _id: siswa._id,
      nama: siswa.nama,
      jurusan: siswa.jurusan, // Menambahkan field jurusan
      tanggal_lahir: siswa.tanggal_lahir,
      alamat: siswa.alamat,
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/siswa/${id}`); // Perbaikan di sini
      fetchSiswa();
    } catch (error) {
      console.error("Error deleting siswa:", error);
    }
  };

  return (
    <div className="dashboard">
      <h1>Daftar Siswa</h1>
      <Link to="/Tambah_murid" className="btn btn-primary">
            <FontAwesomeIcon icon={faUserPlus} /> Tambah Murid
          </Link>{" "}
      <table className="siswa-table">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Jurusan</th>
            <th>Tanggal Lahir</th>
            <th>Alamat</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {siswaList.map((siswa) => (
            <tr key={siswa._id}>
              <td>{siswa.nama}</td>
              <td>{siswa.jurusan}</td> {/* Menampilkan field jurusan */}
              <td>{siswa.tanggal_lahir}</td>
              <td>{siswa.alamat}</td>
              <td>
                <button onClick={() => handleEdit(siswa)}>Edit</button>
                <button onClick={() => handleDelete(siswa._id)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tambah_murid;
