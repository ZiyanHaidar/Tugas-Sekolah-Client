import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/Login.css"; // Import file CSS yang telah dibuat
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faHome, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPassword: false,
    };
  }

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  render() {
    const { showPassword } = this.state;

    return (
      <div className="form-container">
        <div className="home-link">
          <Link to="/" className="btn btn-info">
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>{" "}
        </div>
        <form>
          <h3>Masuk</h3>

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
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Masukan password mu"
              />
              <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash}
                className="password-toggle-icon"
                onClick={this.togglePasswordVisibility}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
          <p className="forgot-password text-right">
            <Link to="/register" className="btn btn-success">
              <FontAwesomeIcon icon={faUserPlus} /> Daftar
            </Link>{" "}
          </p>
        </form>
      </div>
    );
  }
}
