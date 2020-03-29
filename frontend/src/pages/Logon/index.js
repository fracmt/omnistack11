import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import api from "../../services/api";

import "./styles.css";

import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";

export default function Logon() {
  const [ngo_id, setNgoId] = useState("");
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("sessions", { ngo_id });

      localStorage.setItem("ngoId", ngo_id);
      localStorage.setItem("ngoName", response.data.name);

      history.push("/profile");
    } catch (err) {
      alert("Login failed, try again");
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <form onSubmit={handleLogin}>
          <h1>Log in to your account</h1>

          <input
            placeholder="Your ID"
            value={ngo_id}
            onChange={e => setNgoId(e.target.value)}
          />
          <button className="button" type="submit">
            Sign in
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Register now
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
