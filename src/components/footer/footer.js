import React from 'react'

const Footer = () => {
  var date = new Date()
  var year = date.getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__content">
      <div className="outer-circle">
        <div className="inner-circle">
          <p>
          Copyright &copy; <span>{year}</span> Denise Lashlley
        </p> 
        </div>
      </div>     
      </div>
    </footer>
  )
}

export default Footer
