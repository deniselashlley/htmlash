import * as React from 'react'
import LinkedInIcon from '../../icons/linkedin-icon'
import TwitterIcon from '../../icons/twitter-icon'
import EmailIcon from '../../icons/email-icon'
import GithubIcon from '../../icons/github-icon'

const ContactLinks = () => (
    <>
      <h3>Connect with me...</h3>
      <ul>
        <li>
          <a
            href="https://uk.linkedin.com/in/deniselashlley/"
            target="_blank"
            rel="noreferrer"
            title="linkedIn"
          >
            <LinkedInIcon fill="#53666E" />
            <span>in/deniselashlley</span>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/lashlled"
            target="_blank"
            rel="noreferrer"
            title="@lashlled"
          >
            <TwitterIcon fill="#53666E" />
            <span>twitter.com/lashlled</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/deniselashlley"
            target="_blank"
            rel="noreferrer"
            title="github"
          >
            <GithubIcon fill="#53666E" />
            <span>github.com/deniselashlley</span>
          </a>
        </li>
        <li>
          <a href="mailto: denise@deniselashlley.io" title="email">
            <EmailIcon fill="#53666E" />
            <span>denise@deniselashlley.io</span>
          </a>
        </li>
      </ul>
    </>
);

export default ContactLinks
