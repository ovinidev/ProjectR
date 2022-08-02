import { Welcome } from '../components/Sections/Welcome';
import { Container } from '../components/Container';
import { BoxMotion } from '../components/Motion/BoxMotion';
import { About } from '../components/Sections/About';
import { Gallery } from '../components/Sections/Gallery';
import { Character } from '../components/Sections/Characters';
import { Film } from '../components/Sections/Film';
import { Video } from '../components/Sections/Video';
import { HappyB } from '../components/Sections/HappyB';

export default function Lore() {
  return (
    <BoxMotion>
      <Welcome />
      <About />
      <Film />
      <Video />
      <Character />
      <Gallery />
      <HappyB />
    </BoxMotion>
  );
}
