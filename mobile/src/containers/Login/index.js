import React, {useState, useEffect} from 'react';
import {Image, Platform} from 'react-native';
import api from '../../services/api';

import AsyncStorage from '@react-native-community/async-storage';

import {Container, Form} from './styles';

import logo from '../../assets/logo.png';

import Button from '../../components/Button';
import Input from '../../components/Input';

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
      return AsyncStorage.getItem('email').then((email) => {
        if (email) {
          setEmail(email);
        }
      });
    };

    const getTech = () => {
      return AsyncStorage.getItem('techs').then((techs) => {
        if (techs) {
          setTechs(techs);
        }
      });
    };
  }, [navigation]);

  const handleSubmit = async () => {
    console.log(email, techs);
    // const response = await api.post('/sessions', {
    //   email,
    // });

    // const {_id} = response.data;

    // await AsyncStorage.setItem('user', _id);
    // await AsyncStorage.setItem('email', email);

    // navigation.navigate('List');
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
