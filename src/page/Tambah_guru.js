import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/Tambah_guru.css"; // Pastikan file ini ada dan path-nya benar

const Tambah_guru = () => {
  const [guruList, setGuruList] = useState([]);
  const [formData, setFormData] = useState({
    _id: null,
    nama: "",
    mata_pelajaran: "",
    tanggal_lahir: "",
    alamat: "",
  });

  useEffect(() => {
    fetchGuru();
  }, []);

  const fetchGuru = async () => {
    try {
      const response = await axios.get("/guru");
      setGuruList(response.data);
    } catch (error) {
      console.error("Error fetching guru data:", error);
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
        await axios.put(`/guru/${formData._id}`, formData);
      } else {
        await axios.post("/guru", formData);
      }
      fetchGuru();
      setFormData({ _id: null, nama: "", mata_pelajaran: "", tanggal_lahir: "", alamat: "" });
    } catch (error) {
      console.error("Error adding/editing guru:", error);
    }
  };

  const handleEdit = (guru) => {
    setFormData({
      _id: guru._id,
      nama: guru.nama,
      mata_pelajaran: guru.mata_pelajaran,
      tanggal_lahir: guru.tanggal_lahir,
      alamat: guru.alamat,
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/guru/${id}`);
      fetchGuru();
    } catch (error) {
      console.error("Error deleting guru:", error);
    }
  };

  return (
    <div className="dashboard">
      <h1>Tambah Guru</h1>
      <form className="guru-form" onSubmit={handleSubmit}>
        <label htmlFor="nama">Nama:</label>
        <input
          type="text"
          id="nama"
          name="nama"
          value={formData.nama}
          onChange={handleChange}
          required
        />
        <label htmlFor="mata_pelajaran">Mata Pelajaran:</label>
        <input
          type="text"
          id="mata_pelajaran"
          name="mata_pelajaran"
          value={formData.mata_pelajaran}
          onChange={handleChange}
          required
        />
        <label htmlFor="tanggal_lahir">Tanggal Lahir:</label>
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
        <button type="submit">{formData._id ? "Edit" : "Tambah"} Guru</button>
      </form>
    </div>
  );
};

export default Tambah_guru;
