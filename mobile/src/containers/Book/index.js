import React, {useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';

import api from '../../services/api';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {Container} from './styles';

const Book = ({navigation}) => {
  const [date, setDate] = useState('');
  const id = navigation.getParam('id');

  const handleSubmit = async () => {
    const user_id = await AsyncStorage.getItem('user');
    await api.post(
      `/spots/${id}/bookings`,
      {
        date,
      },
      {
        headers: {user_id},
      },
    );
    Alert.alert('Solicitação de reserva enviada.');
    navigation.navigate('List');
  };

  const handleCancel = async () => {
    navigation.navigate('List');
  };

  return (
    <Container>
      <Input
        label={'Data de interesse *'}
        marginTop={20}
        placeholder="Qual data você quer reservar"
        autoCapitalize="words"
        autoCorrect={false}
        value={date}
        onChangeText={setDate}
      />
      <Button label={'Solicitar reserva'} onPress={handleSubmit} />
      <Button
        label={'Cancelar'}
        backgroundColor={'#ccc'}
        marginTop={10}
        onPress={handleCancel}
      />
    </Container>
  );
};
export default Book;
