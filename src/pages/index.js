import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Overview from '../components/OverView/Overview';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import styled from 'styled-components';

// Create a responsive hero section
const HeroSection = styled(Section)`
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
`;

const Home = () => {
  return (
    <Layout>
      <HeroSection grid="true">
        <Hero />
        <BgAnimation />
      </HeroSection>
      <Overview />
      <Projects />
      <Technologies />

      <Acomplishments />
    </Layout>
  );
};

export default Home;
