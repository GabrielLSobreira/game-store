import Link from 'next/link';
import {
  Item,
  Container,
  HeaderContainer,
  ItemsContainer,
  Logo,
} from './styles';
import { GrGamepad } from 'react-icons/gr';
import { BsCart, BsHouseDoor } from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';
import { useRouter } from 'next/dist/client/router';

export const Header = () => {
  const { asPath } = useRouter();
  return (
    <Container>
      <HeaderContainer>
        <Link href="/" passHref>
          <Logo>
            Next <span>Games</span> <GrGamepad />
          </Logo>
        </Link>
        <ItemsContainer>
          <Link href="/" passHref>
            <Item className={asPath === '/' ? 'active' : ''}>
              <BsHouseDoor />
              <span>Home</span>
            </Item>
          </Link>
          <Link href="/cart" passHref>
            <Item className={asPath === '/cart' ? 'active' : ''}>
              <BsCart />
              <span>Meu carrinho</span>
            </Item>
          </Link>
        </ItemsContainer>
      </HeaderContainer>
    </Container>
  );
};
