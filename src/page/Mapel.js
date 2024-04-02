import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/Mapel.css";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DaftarMapel = () => {
  const [mapelList, setMapelList] = useState([]);
  const [formData, setFormData] = useState({
    _id: null,
    mata_pelajaran: "",
  });

  useEffect(() => {
    fetchMapel();
  }, []);

  const fetchMapel = async () => {
    try {
      const response = await axios.get("/mapel");
      setMapelList(response.data);
    } catch (error) {
      console.error("Error fetching mata pelajaran data:", error);
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
      }
      fetchMapel();
      setFormData({ _id: null, mata_pelajaran: ""});
    } catch (error) {
      console.error("Error adding/editing mata pelajaran:", error);
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
      console.error("Error deleting mata pelajaran:", error);
    }
  };

  return (
    <div className="dashboard">
      <h1>Daftar Mata Pelajaran</h1>
      <Link to="/Tambah_mapel" className="btn btn-primary">
        <FontAwesomeIcon icon={faBook} /> Tambah Mata Pelajaran
      </Link>{" "}
      <table className="mapel-table">
        <thead>
          <tr>
            <th>Nama Mata Pelajaran</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {mapelList.map((mapel) => (
            <tr key={mapel._id}>
              <td>{mapel.nama}</td>
              <td>
                <button onClick={() => handleEdit(mapel)}>Edit</button>
                <button onClick={() => handleDelete(mapel._id)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DaftarMapel;
