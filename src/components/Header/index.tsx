import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Wrapper,
  Container,
  Logo,
  LogoButton,
  Title,
} from './styles';

const Header: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <Container>
        <LogoButton onPress={() => navigation.navigate('Main')}>
          <Logo />
          <Title >CALCULATOR</Title>
        </LogoButton>
      </Container>
    </Wrapper>
  );
};

export default Header;
