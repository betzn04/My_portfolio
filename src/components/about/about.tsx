import styled from 'styled-components';
import ScrollAnimation from '../../common/ScrollAnimation';

const AboutContainer = styled.div`
  margin: 0 auto;
  padding: 0rem 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color:rgb(255, 255, 255);
  margin-bottom: 2rem;
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background: #0984e3;
    margin: 1rem auto;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 2;
  color:rgb(255, 255, 255);
  width: 100%;
  padding: 4px 44px;
  text-align: justify;
  
  @media (max-width: 934px) {
    font-size: 1rem;
    padding: 0 2rem;
  }
`;

const About = () => {
  return (
    <ScrollAnimation>

      <AboutContainer id='about'>
        <Title>About Me</Title>
        <Description>
          Hi, I'm Betsin Kuruvila Mekkat, a passionate and results-driven React Developer
          with a strong foundation in front-end development. I specialize in creating
          dynamic, responsive, and visually appealing web applications that deliver
          exceptional user experiences. With a focus on React.js, JavaScript, and modern
          libraries, I thrive on building interfaces that are both functional and
          aesthetically pleasing.

          Currently, I'm working as a Senior System Engineer at Infosys Limited, where
          I've contributed to projects like the User Identity Management (UIM) system
          and the Reward Management System. These experiences have allowed me to hone
          my skills in crafting responsive interfaces, implementing role-based
          functionalities, and ensuring seamless user experiences across devices.

          When I'm not coding, I enjoy exploring new technologies, contributing to
          open-source projects, and staying updated with the latest trends in web
          development
        </Description>
      </AboutContainer>
    </ScrollAnimation>
  );
};

export default About;