import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus, faHome } from '@fortawesome/free-solid-svg-icons';
import "./css/Register.css"; // Import file CSS yang telah dibuat

export default class SignUp extends Component {
  render() {
    return (
      <div className="register-container">
       <div className="home-link">
        <Link to="/" className="btn btn-info">
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>{" "}
        </div>
        <div className="register-form">
          <form>
            <h2>Daftar</h2>

            <div className="form-group">
              <label>Nama</label>
              <input type="text" className="form-control" placeholder="Masukan nama mu" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Masukan email mu"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Masukan password mu"
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Daftar
            </button>
            <p className="forgot-password text-right">
            <Link to="/login" className="btn btn-primary">
            <FontAwesomeIcon icon={faSignInAlt} /> Masuk
          </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    );
  }
}