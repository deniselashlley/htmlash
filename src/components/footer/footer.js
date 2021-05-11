import React from 'react'

const Footer = () => {
  var date = new Date()
  var year = date.getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__content">
      <div className="outer-circle">
        <div className="inner-circle">
          <div className="inner-circle__content">
          <p>Source on <a href=" https://github.com/deniselashlley/htmlash">Github</a></p>
          <p>
          Copyright &copy; <span>{year}</span> Denise Lashlley
        </p> 
        </div>
        </div>
      </div>     
      </div>
    </footer>
  )
}

export default Footer
