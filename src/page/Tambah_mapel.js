import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/Tambah_mapel.css"; // Pastikan file ini ada dan benar path-nya

const Tambah_mapel = () => {
  const [mapelList, setMapelList] = useState([]);
  const [formData, setFormData] = useState({
    _id: null,
    nama: "",
  });

  useEffect(() => {
    fetchMapel();
  }, []);

  const fetchMapel = async () => {
    try {
      const response = await axios.get("/mapel");
      setMapelList(response.data);
    } catch (error) {
      console.error("Error fetching mapel data:", error);
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
        await axios.put(`/mapel/${formData._id}`, formData);
      } else {
        await axios.post("/mapel", formData);
      }
      fetchMapel();
      setFormData({ _id: null, nama: "" });
    } catch (error) {
      console.error("Error adding/editing mapel:", error);
    }
  };

  const handleEdit = (mapel) => {
    setFormData({
      _id: mapel._id,
      nama: mapel.nama,
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/mapel/${id}`);
      fetchMapel();
    } catch (error) {
      console.error("Error deleting mapel:", error);
    }
  };

  return (
    <div className="dashboard">
      <h1>Tambah Mata Pelajaran</h1>
      <form className="mapel-form" onSubmit={handleSubmit}>
        <label htmlFor="nama">Nama Mata Pelajaran:</label>
        <input
          type="text"
          id="nama"
          name="nama"
          value={formData.nama}
          onChange={handleChange}
          required
        />
        <button type="submit">
          {formData._id ? "Edit" : "Tambah"} Mata Pelajaran
        </button>
      </form>

      
    </div>
  );
};

export default Tambah_mapel;
