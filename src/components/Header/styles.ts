import styled from 'styled-components/native';
import logo from '../../assets/logo.png';
import Colors from '../../styles/colors';

export const Wrapper = styled.SafeAreaView`
  background: ${Colors.blue}
  flex-direction: row;
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 10px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 35px;
  height: 35px;
`;

export const Title = styled.Text`
  color: ${Colors.white};
  font-size: 14px;
`;

export const LogoButton = styled.TouchableOpacity`
flex-direction: row;
align-items: baseline;
`;


