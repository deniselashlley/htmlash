import * as React from 'react'
import styled from '@emotion/styled'
import { pxToRem } from '../../helper'
import SectionTitle from '../section-title'

const IntroductionText = styled.div`
  line-height: 2.5;
  font-size: ${pxToRem(20)};
  margin: 0 auto;
  max-width: ${pxToRem(800)};

  p {
    margin-bottom:  ${pxToRem(15)};

    @media (min-width: ${props => props.theme.responsive.medium}) {
        text-align: center;
    }
  }

  ul {
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    
    li {
      padding: 0 ${pxToRem(8)}
    }
  }
`

const About = () => {
  return (
    <section>
      <SectionTitle>About Me</SectionTitle>
      <IntroductionText>
      <p>I am a web professional based in London, with more than 8 years experience of building quality and modern standard websites. 
        <br/> I specialise in HTML, CSS, JavaScript and other associated technologies.</p>
      </IntroductionText>
      <SectionTitle>KEY SKILLS & EXPERTISE</SectionTitle>
      <IntroductionText>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>SASS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Redux</li>
          <li>ES6</li>
          <li>Typescript</li>
          <li>React Testing Library</li>
          <li>GATSBY</li>
          <li>GIT</li>
          <li>Accessibility</li>
        </ul>
      </IntroductionText>
    </section>
  )
}

export default About
