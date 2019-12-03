import styled from 'styled-components/native';

export const Content = styled.View.attrs({
  paddingHorizontal: 20,
})`
  flex: 1;
  background-color: #b8b8b8;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput`
  margin-top: 20;
  height: 45;
  width: 100%;
  border-color: #FFF;
  border-radius: 4;
  border-width: 1;
  background-color: #FFF;
  font-family: Exo-Regular
`;

export const Button = styled.TouchableOpacity`
  margin-top: 20;
  height: 45;
  width: 100%;
  border-radius: 4;
  background-color: #FFF;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #000;
  font-size: 20;
  font-family: Exo-Black;
`;