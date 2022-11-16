import { Container, Title } from './Section.styled';
import PropTypes from 'prop-types';

export default function Section({ children }) {
  return (
    <Container>
      <Title>Please leave feedback</Title>
      {children}
    </Container>
  );
}

Section.propTypes = {
  children: PropTypes.array,
};
