import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/Tambah_murid.css"; // Pastikan file ini ada dan benar path-nya

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
        await axios.put(`/siswa/${formData._id}`, formData);
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
      jurusan: siswa.jurusan,
      tanggal_lahir: siswa.tanggal_lahir,
      alamat: siswa.alamat,
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/siswa/${id}`);
      fetchSiswa();
    } catch (error) {
      console.error("Error deleting siswa:", error);
    }
  };

  return (
    <div className="dashboard">
      <h1>Tambah Siswa</h1>
      <form className="siswa-form" onSubmit={handleSubmit}>
        <label htmlFor="nama">Nama:</label>
        <input
          type="text"
          id="nama"
          name="nama"
          value={formData.nama}
          onChange={handleChange}
          required
        />
        <label htmlFor="jurusan">Jurusan:</label>
        <input
          type="text"
          id="jurusan"
          name="jurusan"
          value={formData.jurusan}
          onChange={handleChange}
          required
        />
        <label htmlFor="tanggal_lahir">Tanggal lahir:</label>
        <input
          type="date"
          id="tanggal_lahir"
          name="tanggal_lahir"
          value={formData.tanggal_lahir}
          onChange={handleChange}
          required
        />
        <label htmlFor="alamat">Alamat:</label>
        <input
          type="text"
          id="alamat"
          name="alamat"
          value={formData.alamat}
          onChange={handleChange}
          required
        />
        <button type="submit">{formData._id ? "Edit" : "Tambah"} Siswa</button>
      </form>
      <div className="siswa-list">
        {siswaList.map((siswa) => (
          <div key={siswa._id} className="siswa-item">
            <p>Nama: {siswa.nama}</p>
            <p>Jurusan: {siswa.jurusan}</p>
            <p>Tanggal Lahir: {siswa.tanggal_lahir}</p>
            <p>Alamat: {siswa.alamat}</p>
            <button onClick={() => handleEdit(siswa)}>Edit</button>
            <button onClick={() => handleDelete(siswa._id)}>Hapus</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tambah_murid;
