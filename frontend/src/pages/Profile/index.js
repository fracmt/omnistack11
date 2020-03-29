import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';
//import heroesImg from '../../assets/heroes.png';

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Welcome, NGO</span>

        <Link className="button" to="/incidents/new">Register new incident</Link>
        <button type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>
    </div>
  );
}