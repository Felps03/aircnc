import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import socketio from 'socket.io-client';

import api from '../../service/api';
import './styles.css';

const Dashboard = () => {
  const [spots, setSpots] = useState([]);
  const [requests, setRequests] = useState([]);

  const user_id = localStorage.getItem('user');
  
  const socket = useMemo(() => socketio('http://localhost:3333', {
    query: { user_id },
  }), [user_id]);
  
  useEffect(() => {
    socket.on('booking_request', data => {
      setRequests([...requests, data]);
    })
  }, [requests, socket]);

  useEffect(() => {
    const loadSpots = async () => {
      const user_id = localStorage.getItem('user');
      const response = await api.get('/dashboard', {
        headers: { user_id }
      });
      setSpots(response.data);
    }

    loadSpots();
  }, []);

  const handleAccept = async (id) => {
    await api.post(`/bookings/${id}/approvals`);
    setRequests(requests.filter(request => request._id !== id));
  }

  const handleReject = async (id) => {
    await api.post(`/bookings/${id}/rejections`);
    setRequests(requests.filter(request => request._id !== id));
  }

  return (
    <>
     <ul className="notifications">
        {requests.map(request => (
          <li key={request._id}>
            <p>
              <strong>{request.user.email}</strong> está solicitando uma reserva em <strong>{request.spot.company}</strong> para a data: <strong>{request.date}</strong>
            </p>
            <button className="accept" onClick={() => handleAccept(request._id)}>ACEITAR</button>
            <button className="reject" onClick={() => handleReject(request._id)}>REJEITAR</button>
          </li>
        ))}
      </ul>

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
