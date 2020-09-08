import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {Alert, ScrollView} from 'react-native';
import socketio from 'socket.io-client';

import SpotList from '../../components/SpotList';
import logo from '../../assets/logo.png';

import {Container, Logo} from './styles';

const List = () => {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('user').then((user_id) => {
      const socket = socketio('http://192.168.2.106:3333', {
        query: {user_id},
      });

      socket.on('booking_response', (booking) => {
        Alert.alert(
          `Sua reserva em ${booking.spot.company} em ${booking.date} foi ${
            booking.approved ? 'APROVADA' : 'REJEITADA'
          }`,
        );
      });
    });
  }, []);

  useEffect(() => {
    AsyncStorage.getItem('techs').then((storagedTechs) => {
      const techsArray = storagedTechs.split(',').map((tech) => tech.trim());
      setTechs(techsArray);
    });
  }, []);

  return (
    <Container>
      <Logo source={logo} resizeMode={'contain'} />
      <ScrollView>
        {techs.map((tech) => (
          <SpotList key={tech} tech={tech} />
        ))}
      </ScrollView>
    </Container>
  );
};
export default List;
