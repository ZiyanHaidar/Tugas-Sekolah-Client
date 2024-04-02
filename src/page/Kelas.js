import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/Kelas.css";
import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DaftarKelas = () => {
  const [kelasList, setKelasList] = useState([]);
  const [formData, setFormData] = useState({
    tingkat_kelas: "",
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
        await axios.put(`/kelas/${formData._id}`, formData);
      }
      fetchKelas();
      setFormData({ tingkat_kelas: "" });
    } catch (error) {
      console.error("Error adding/editing kelas:", error);
    }
  };

  const handleEdit = (kelas) => {
    setFormData({
      tingkat_kelas: kelas.tingkat_kelas,
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/kelas/${id}`);
      fetchKelas();
    } catch (error) {
      console.error("Error deleting kelas:", error);
    }
  };

  return (
    <div className="dashboard">
      <h1>Daftar Kelas</h1>
      <Link to="/Tambah_kelas" className="btn btn-primary">
        <FontAwesomeIcon icon={faChalkboardTeacher} /> Tambah Kelas
      </Link>{" "}
      <table className="kelas-table">
        <thead>
          <tr>
            <th>Tingkat Kelas</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {kelasList.map((kelas) => (
            <tr key={kelas._id}>
              <td>{kelas.tingkat_kelas}</td>
              <td>
                <button onClick={() => handleEdit(kelas)}>Edit</button>
                <button onClick={() => handleDelete(kelas._id)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DaftarKelas;
