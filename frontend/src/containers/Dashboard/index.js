import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../service/api';
import './styles.css';

const Dashboard = () => {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    const loadSpots = async () => {
      const user_id = localStorage.getItem('user');
      const response = await api.get('/dashboard', {
        headers: { user_id },
      });
      setSpots(response.data);
    };

    loadSpots();
  }, []);

  return (
    <>
      <ul className='spot-list'>
        {spots.map((spto) => (
          <li key={spto._id}>
            <header style={{ backgroundImage: `url(${spto.thumbnail_url})` }} />
            <strong>{spto.company}</strong>
            <span>{spto.price ? `R$ ${spto.price}/dia` : 'GRATUITO'}</span>
          </li>
        ))}
      </ul>

      <Link to='/new'>
        <button className="btn">Cadastrar novo spto</button>
      </Link>
    </>
  );
};

export default Dashboard;
