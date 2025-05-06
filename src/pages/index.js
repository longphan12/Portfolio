import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Experience from '../components/Experience/Experience';
import Overview from '../components/Overview/Overview';
import { Layout } from '../layout/Layout';
import { Section, SectionDivider } from '../styles/GlobalComponents';
import styled from 'styled-components';

// Create a responsive hero section
const HeroSection = styled(Section)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0;
  padding: 0 48px;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 0 16px;
  }
`;

const Home = () => {
  return (
    <Layout>
      <HeroSection grid="true">
        <Hero />
      </HeroSection>
      <SectionDivider />
      <Overview />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Technologies />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
