import React from 'react';

const LinkedInIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28">
      <path
        d="M28 28h-5.6v-9.799c0-2.688-1.186-4.187-3.312-4.187-2.315 0-3.688 1.562-3.688 4.187V28H9.8V9.8h5.6v2.047s1.757-3.083 5.716-3.083c3.96 0 6.884 2.416 6.884 7.417V28zM3.419 6.89C1.53 6.89 0 5.346 0 3.443 0 1.543 1.53 0 3.419 0c1.887 0 3.417 1.543 3.417 3.444.002 1.903-1.53 3.445-3.417 3.445zM0 28h7V9.8H0V28z"
        fill={props.fill}
        fillRule="nonzero"
      />
    </svg>
  );
};

LinkedInIcon.defaultProps = {
  fill: '#000',
};

export default LinkedInIcon;
