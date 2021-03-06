import React from 'react';

const EmailIcon = (props) => {
  return (
    <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24.038v22.667H0z" />
        <path
          d="M27.173 3.778c0-1.834-1.211-3.334-2.692-3.334H2.942C1.462.444.25 1.944.25 3.778v20c0 1.833 1.212 3.333 2.692 3.333h21.539c1.48 0 2.692-1.5 2.692-3.333v-20zm-2.692 0L13.71 12.11 2.943 3.778h21.539zm0 20H2.942V7.11l10.77 8.333L24.48 7.111v16.667z"
          fill={props.fill}
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

EmailIcon.defaultProps = {
  fill: '#000',
};

export default EmailIcon;
