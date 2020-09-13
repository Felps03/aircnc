import React, {useState, useEffect} from 'react';
import {withNavigation} from 'react-navigation';
import api from '../../services/api';

import Button from '../Button';

import {
  Container,
  Title,
  Bold,
  FlatList,
  ListView,
  Thumbnail,
  Company,
  Price,
} from './styles';

const SpotList = ({tech, navigation}) => {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    const loadSpots = async () => {
      const response = await api.get('/spots', {
        params: {tech},
      });
      setSpots(response.data);
    };
    loadSpots();
  }, [tech]);

  const handleNavigate = (id) => {
    navigation.navigate('Book', {id});
  };

  return (
    <Container>
      <Title>
        Empresas que usam <Bold>{tech}</Bold>
      </Title>
      <FlatList
        data={spots}
        keyExtractor={(spot) => spot._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <ListView>
            <Thumbnail
              source={{uri: item.thumbnail_url}}
              resizeMode={'cover'}
            />
            <Company>{item.company}</Company>
            <Price>{item.price ? `R$${item.price}/dia` : 'GRATUITO'}</Price>
            <Button
              onPress={() => handleNavigate(item._id)}
              label={'Solicitar reserva'}
              height={32}
              marginTop={15}
              borderRadius={2}
              fontSize={15}
            />
          </ListView>
        )}
      />
    </Container>
  );
};

export default withNavigation(SpotList);
