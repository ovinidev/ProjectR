import { Welcome } from '../components/Sections/Welcome';
import { Container } from '../components/Container';
import { BoxMotion } from '../components/Motion/BoxMotion';
import { About } from '../components/Sections/About';
import { Gallery } from '../components/Sections/Gallery';
import { Character } from '../components/Sections/Characters';
import { Film } from '../components/Sections/Film';

export default function Lore() {
  return (
    <BoxMotion>
      <Welcome />
      <Film />
      <About />
      <Gallery />
      <Character />
    </BoxMotion>
  );
}
