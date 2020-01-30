import React from 'react';

const Loupe = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="19px" height="18px" {...props}>
      <path
        fillRule="evenodd"
        fill="rgb(51, 51, 51)"
        d="M17.747,16.537 L13.735,12.523 C14.792,11.204 15.427,9.532 15.427,7.714 C15.427,3.461 11.968,0.000 7.715,0.000 C3.463,0.000 0.003,3.461 0.003,7.714 C0.003,11.968 3.463,15.428 7.715,15.428 C9.533,15.428 11.204,14.792 12.523,13.735 L16.535,17.749 C16.703,17.916 16.922,18.000 17.141,18.000 C17.361,18.000 17.580,17.916 17.747,17.749 C18.082,17.414 18.082,16.871 17.747,16.537 ZM7.715,13.714 C4.408,13.714 1.717,11.023 1.717,7.714 C1.717,4.406 4.408,1.714 7.715,1.714 C11.023,1.714 13.714,4.406 13.714,7.714 C13.714,11.023 11.023,13.714 7.715,13.714 Z"
      />
    </svg>
  );
};

export default Loupe;
