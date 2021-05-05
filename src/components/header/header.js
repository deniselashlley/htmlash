import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Navigation from '../navigation'
import { pxToRem } from '../../helper'

const HeaderWrapper = styled.header`
  background: ${props => props.theme.colors.baliHai};
  width: 100%;
  min-height: ${pxToRem(118)};
  border-bottom: 8px solid ${props => props.theme.colors.shuttleGray};

  @media (min-width: ${props => props.theme.responsive.medium}) {
    position: relative;
  }
`
const Block = styled.div`
  position: relative;
  margin: 0 auto;
  width: ${pxToRem(255)};
  left: ${pxToRem(20)};
  @media (min-width: ${props => props.theme.responsive.medium}) {
    width: ${pxToRem(300)};
  }
`

const Circle = styled.div`
  position: absolute;
  top: -100px;
  left: -45px;
  border: 1px solid ${props => props.theme.colors.shuttleGray};
  background: ${props => props.theme.colors.shuttleGray};
  border-radius: 300px;
  height: 255px;
  width: 255px;
  z-index: 99;

  @media (min-width: ${props => props.theme.responsive.medium}) {
    top: -145px;
    left: 0;
    height: ${pxToRem(300)};
    width: ${pxToRem(300)};
  }
`

const Title = styled.h1`
  float: left;
  border-radius: 300px;
  height: 255px;
  width: 255px;
  font-family: ${props => props.theme.logoText};
  line-height: 1.2;
  background: ${props => props.theme.colors.white};
  margin: 1px 0 0 10px;
  text-align: center;

  @media (min-width: ${props => props.theme.responsive.medium}) {
    height: ${pxToRem(300)};
    width: ${pxToRem(300)};
  }

  a {
    position: relative;
    display: block;
    top: ${pxToRem(100)};
    font-size: ${pxToRem(38)};
    text-decoration: none;
    color: ${props => props.theme.colors.baliHai};

    @media (min-width: ${props => props.theme.responsive.medium}) {
      font-size: ${pxToRem(42)};
      margin-top: ${pxToRem(160)};
      top: 0;
    }
  }
`

const Header = () => (
  <HeaderWrapper role="banner">
    <Block>
      <Circle>
        <Title>
          <Link to="/">Denise Lashlley</Link>
        </Title>
      </Circle>
    </Block>
    <Navigation />
  </HeaderWrapper>
)

export default Header
