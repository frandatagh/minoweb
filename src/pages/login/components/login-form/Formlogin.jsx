import React, { useState } from 'react';
import './Formlogin.css' ;

const Formlogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar la información de inicio de sesión a través de una API
    console.log(`Email: ${email} | Password: ${password}`);
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit} className='form'>
      
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Contraseña</label>
        <input
         type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Iniciar sesión</button>
        <h5>Regístrate</h5>
        <p>¿Olvidaste tu contraseña?</p>
      </form>
    </div>
  )
}

export default Formlogin