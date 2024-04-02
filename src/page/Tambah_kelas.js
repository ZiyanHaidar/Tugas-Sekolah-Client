import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/Tambah_kelas.css"; // Pastikan file ini ada dan path-nya benar

const Tambah_kelas = () => {
  const [kelasList, setKelasList] = useState([]);
  const [formData, setFormData] = useState({
    _id: null,
    tingkat: "",
  });

  useEffect(() => {
    fetchKelas();
  }, []);

  const fetchKelas = async () => {
    try {
      const response = await axios.get("/kelas");
      setKelasList(response.data);
    } catch (error) {
      console.error("Error fetching kelas data:", error);
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
        await axios.put(`/kelas/${formData._id}`, formData); // Perbaikan di sini
      } else {
        await axios.post("/kelas", formData);
      }
      fetchKelas();
      setFormData({ _id: null, tingkat: "" });
    } catch (error) {
      console.error("Error adding/editing kelas:", error);
    }
  };

  const handleEdit = (kelas) => {
    setFormData({
      _id: kelas._id,
      tingkat: kelas.tingkat,
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/kelas/${id}`); // Perbaikan di sini
      fetchKelas();
    } catch (error) {
      console.error("Error deleting kelas:", error);
    }
  };

  return (
    <div className="dashboard">
      <h1>Tambah Kelas</h1>
      <form className="kelas-form" onSubmit={handleSubmit}>
        <label htmlFor="tingkat">Tingkat Kelas:</label>
        <input
          type="text"
          id="tingkat"
          name="tingkat"
          value={formData.tingkat}
          onChange={handleChange}
          required
        />
        <button type="submit">{formData._id ? "Edit" : "Tambah"} Kelas</button>
      </form>
      <div className="kelas-list">
        {kelasList.map((kelas) => (
          <div key={kelas._id} className="kelas-item">
            <p>{kelas.tingkat}</p>
            <button onClick={() => handleEdit(kelas)}>Edit</button>
            <button onClick={() => handleDelete(kelas._id)}>Hapus</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tambah_kelas;
