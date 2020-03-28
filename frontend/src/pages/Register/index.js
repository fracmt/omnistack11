import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Register</h1>
          <p>Make your registration, enter the platform and help people find the cases of your NGOs.</p>

          <Link className="back-link" to="/register">
            <FiArrowLeft size={16} color="#E02041" />
            I have no registration
          </Link>
        </section>

        <form>
          <input placeholder="ONG Name" />
          <input type="email" placeholder="Email" />
          <input placeholder="Whatsapp" />

          <div className="input-group">
            <input placeholder="City" />
            <input placeholder="State" />
          </div>

          <button className="button" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}