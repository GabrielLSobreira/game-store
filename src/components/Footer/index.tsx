import { BsEnvelope } from 'react-icons/bs';
import { GrGithub, GrLinkedin } from 'react-icons/gr';
import { FooterContainer, List } from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <span>Desenvolvido por Gabriel Sobreira</span>
      <List>
        <li>
          <a
            href="https://www.linkedin.com/in/gabriel-sobreira-b584a9178"
            rel="noreferrer"
            target="_blank"
          >
            <GrLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/GabrielLSobreira"
            rel="noreferrer"
            target="_blank"
          >
            <GrGithub />
          </a>
        </li>
        <li>
          <a
            href="mailto:gabriellaranjasobreira@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <BsEnvelope />
          </a>
        </li>
      </List>
    </FooterContainer>
  );
};

export default Footer;
