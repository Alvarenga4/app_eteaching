import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`; 

export const Content = styled.ScrollView.attrs({
  paddingHorizontal: 20
})`
  flex: 2;
  background-color: #FFF;
`;

export const Menu = styled.Text`
  color: #000;
  font-size: 20;
  letter-spacing: 2;
  font-family: Exo-Black;
`;