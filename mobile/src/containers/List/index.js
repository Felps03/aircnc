import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {ScrollView} from 'react-native';

import SpotList from '../../components/SpotList';
import logo from '../../assets/logo.png';

import {Container, Logo} from './styles';

const List = () => {
  const [techs, setTechs] = useState([]);

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
