import { Welcome } from '../components/Sections/Welcome';
import { Container } from '../components/Structure/Container';
import { BoxMotion } from '../components/Motion/BoxMotion';

export default function Lore() {
  return (
    <BoxMotion>
      <Welcome />

      <Container bg="secondary">
        <h1>oi</h1>
      </Container>

      <Container>
        <h1>oi</h1>
      </Container>

      <Container bg="secondary">
        <h1>oi</h1>
      </Container>
    </BoxMotion>
  );
}
