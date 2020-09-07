import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: ${(props) => (props.height ? `${props.height}px` : '42px')};
  background: ${(props) =>
    props.backgroundColor ? `${props.backgroundColor}` : '#f05a5b'};
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => (props.marginTop ? `${props.marginTop}px` : '0px')};
  border-radius: ${(props) =>
    props.borderRadius ? `${props.borderRadius}px` : '4px'};
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '16px')};
`;
