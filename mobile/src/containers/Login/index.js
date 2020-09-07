import React, {useState, useEffect} from 'react';
import {Image, Platform} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logo from '../../assets/logo.png';

import {Container, Form} from './styles';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [techs, setTechs] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('user')
      .then((user) => {
        if (user) {
          return navigation.navigate('List');
        }
      })
      .then(getEmail)
      .then(getTech);

    const getEmail = () => {
      return AsyncStorage.getItem('email').then((Email) => {
        if (Email) {
          setEmail(Email);
        }
      });
    };

    const getTech = () => {
      return AsyncStorage.getItem('techs').then((Techs) => {
        if (Techs) {
          setTechs(Techs);
        }
      });
    };
  }, [navigation]);

  const handleSubmit = async () => {
    const response = await api.post('/sessions', {
      email,
    });

    const {_id} = response.data;

    await AsyncStorage.setItem('user', _id);
    await AsyncStorage.setItem('email', email);
    await AsyncStorage.setItem('techs', techs);

    navigation.navigate('List');
  };

  return (
    <Container behavior="padding" enabled={Platform.OS === 'ios'}>
      <Image source={logo} />
      <Form>
        <Input
          label={'Seu E-mail *'}
          placeholder="Seu e-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />
        <Input
          label={'Tecnologias *'}
          placeholder="Tecnologias de interesse"
          autoCapitalize="words"
          autoCorrect={false}
          value={techs}
          onChangeText={setTechs}
        />
        <Button onPress={handleSubmit} label={'Encontrar sptos'} />
      </Form>
    </Container>
  );
};

export default Login;
