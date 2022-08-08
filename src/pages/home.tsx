import ReactAudioPlayer from 'react-audio-player';
import Link from 'next/link';
import { Welcome } from '../components/Sections/Welcome';
import { BoxMotion } from '../components/Motion/BoxMotion';
import { About } from '../components/Sections/About';
import { Gallery } from '../components/Sections/Gallery';
import { Character } from '../components/Sections/Characters';
import { Film } from '../components/Sections/Film';
import { Video } from '../components/Sections/Video';
import { HappyB } from '../components/Sections/HappyB';
import { FavDay } from '../components/Sections/FavDay';
import { NYC } from '../components/Sections/NYC';

export default function Lore() {
  return (
    <BoxMotion>
      <Welcome />
      <About />
      <Gallery />
      <Character />
      <Video />
      <Film />
      <HappyB />
      <FavDay />
      <NYC />
      <ReactAudioPlayer
        src="paratodos.mp3"
        autoPlay
        loop
        volume={0.2}
      />
    </BoxMotion>
  );
}
