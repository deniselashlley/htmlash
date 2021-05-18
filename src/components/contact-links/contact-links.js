import * as React from 'react';
import LinkedInIcon from '../../assets/icons/linkedin-icon';
import TwitterIcon from '../../assets/icons/twitter-icon';
import EmailIcon from '../../assets/icons/email-icon';
import GithubIcon from '../../assets/icons/github-icon';

const ContactLinks = () => (
  <ul>
    <li>
      <a href="https://uk.linkedin.com/in/deniselashlley/" target="_blank" rel="noreferrer" title="linkedIn">
        <LinkedInIcon fill="#C7CCDB" />
      </a>
    </li>
    <li>
      <a href="https://twitter.com/lashlled" target="_blank" rel="noreferrer" title="@lashlled">
        <TwitterIcon fill="#0b2027" />
      </a>
    </li>
    <li>
      <a href="https://github.com/deniselashlley" target="_blank" rel="noreferrer" title="github">
        <GithubIcon fill="#C7CCDB" />
      </a>
    </li>
    <li>
      <a href="mailto: denise@deniselashlley.io" title="email">
        <EmailIcon fill="#0b2027" />
      </a>
    </li>
  </ul>
);

export default ContactLinks;
