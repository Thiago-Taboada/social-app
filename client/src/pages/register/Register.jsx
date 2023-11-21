import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.scss";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
      navigate("/login");
    } catch (err) {
      setErr(err.response.data);
    }
  };

  useEffect(() => {
    document.title = "Cadastro - Super Social";
  }, []);
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Super Social.</h1>
          <p>
            Junte-se a nós para uma experiência global única! Conecte-se com pessoas fascinantes de todos os cantos do mundo. Cadastre-se agora e faça parte dessa comunidade.

          </p>
          <span>Ja possui uma conta?</span>
          <Link to="/login">
            <button>Entrar</button>
          </Link>
        </div>
        <div className="right">
          <h1>Cadastro</h1>
          <form>
            <input
              type="text"
              placeholder="Nome"
              name="name"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Senha"
              name="password"
              onChange={handleChange}
            />
            {err && err}
            <button onClick={handleClick}>Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
