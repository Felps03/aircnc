import styled from 'styled-components/native';

export const Label = styled.Text`
  font-weight: bold;
  color: #444;
  margin-bottom: 8px;
  text-transform: uppercase;
  margin-top: ${(props) => (props.marginTop ? `${props.marginTop}px` : '0px')};
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(128, 128, 128, 0.50)',
})`
  border-width: 1px;
  border-color: #ddd;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 16px;
  color: #444;
  margin-bottom: 20px;
  border-radius: 2px;
`;
