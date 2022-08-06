import { motion, useScroll } from 'framer-motion';
import { Welcome } from '../components/Sections/Welcome';
import { Container } from '../components/Container';
import { BoxMotion } from '../components/Motion/BoxMotion';
import { About } from '../components/Sections/About';
import { Gallery } from '../components/Sections/Gallery';
import { Character } from '../components/Sections/Characters';
import { Film } from '../components/Sections/Film';
import { Video } from '../components/Sections/Video';
import { HappyB } from '../components/Sections/HappyB';
import styles from './styles.module.css';

export default function Lore() {
  const { scrollYProgress } = useScroll();

  return (
    <BoxMotion>
      <motion.div style={{ scaleX: scrollYProgress }} className={styles['progress-bar']} />
      <Welcome />
      <About />
      <Gallery />
      <Character />
      <Video />
      <Film />
      <HappyB />
    </BoxMotion>
  );
}
