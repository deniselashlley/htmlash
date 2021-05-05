import * as React from 'react'

/* const FooterContainer = styled.footer`
  position: relative;
  overflow: hidden;
  height: 90px;
  padding: 84px 0;

  h3 {
    position: relative;
    top: ${pxToRem(36)};
    text-align: center;
  }

  p {
    position: absolute;
    font-size: ${pxToRem(11)};
    margin: 0 5px 0;
    z-index: 99;
    text-align: center;
    left: 0;
    bottom: 8px;
    width: 100%;

    @media (min-width: ${props => props.theme.responsive.medium}) {
      text-align: left;
      width: 100%;
    }
  }
`

const FooterLinks = styled(StyledList)`
  ul {
    min-height: ${pxToRem(85)};

    @media (min-width: ${props => props.theme.responsive.medium}) {
      min-height: ${pxToRem(95)};
    }
  }
  span {
    display: none;
  }
`

const FooterInnerWrapper = styled.div`
  padding: ${pxToRem(38)};
  box-sizing: border-box;
  background: ${props => props.theme.colors.baliHai};
  border-top: 8px solid ${props => props.theme.colors.shuttleGray};
`
const OuterCirle = styled.div`
  margin: 0 auto;
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  width: 230px;
  height: 230px;
  border-radius: 300px;
  background-color: ${props => props.theme.colors.shuttleGray};
  z-index: 99;
`

const InnerCircle = styled.div`
  width: 230px;
  height: 230px;
  margin-left: 8px;
  border-radius: 300px;
  background-color: ${props => props.theme.colors.white};
` */

const Footer = () => {
  var date = new Date()
  var year = date.getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      {/* <FooterInnerWrapper>
        <OuterCirle>
          <InnerCircle>
            <FooterLinks>
              <ContactLinks />
            </FooterLinks>
          </InnerCircle>
      </OuterCirle> */}

        <p>
          Copyright &copy; <span>{year}</span> Denise Lashlley.
        </p>
      {/* </FooterInnerWrapper> */}
    </footer>
  )
}

export default Footer
