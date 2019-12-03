import styled from 'styled-components/native';

export const Content = styled.ScrollView.attrs({
  paddingHorizontal: 20,
})`
  flex: 1;
  background-color: #b8b8b8;
`;

export const Input = styled.TextInput`
  margin-top: 20;
  height: 45;
  width: 100%;
  border-color: #FFF;
  border-radius: 4;
  border-width: 1;
  background-color: #FFF;
  font-family: Exo-Regular;
  padding-left: 12;
`;

export const SubTitle = styled.Text`
  color: #FFF;
  font-family: Exo-MediumItalic;
  font-size: 20;
  margin-top: 30;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 20;
  height: 45;
  width: 100%;
  border-radius: 4;
  background-color: #FFF;
  justify-content: center;
  align-items: center;
  margin-bottom: 20;
`;

export const ButtonText = styled.Text`
  color: #000;
  font-size: 20;
  font-family: Exo-Black;
`;