import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/Guru.css";
import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DaftarGuru = () => {
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
      <h1>Daftar Guru</h1>
      <Link to="/Tambah_guru" className="btn btn-primary">
            <FontAwesomeIcon icon={faChalkboardTeacher} /> Tambah Guru
          </Link>{" "}
      <table className="guru-table">
        <thead>
          <tr>
            <th>Nama Guru</th>
            <th>Mata Pelajaran</th>
            <th>Tanggal Lahir</th>
            <th>Alamat</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {guruList.map((guru) => (
            <tr key={guru._id}>
              <td>{guru.nama}</td>
              <td>{guru.mata_pelajaran}</td>
              <td>{guru.tanggal_lahir}</td>
              <td>{guru.alamat}</td>
              <td>
                <button onClick={() => handleEdit(guru)}>Edit</button>
                <button onClick={() => handleDelete(guru._id)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DaftarGuru;
