import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const FilterIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      d="M8.43096 14.9888H2.40253"
      stroke="white"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.5982 14.9888C17.5982 16.3143 16.5237 17.3888 15.1982 17.3888C13.8727 17.3888 12.7982 16.3143 12.7982 14.9888C12.7982 13.6624 13.8727 12.5888 15.1982 12.5888C16.5237 12.5888 17.5982 13.6624 17.5982 14.9888Z"
      stroke="white"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.5689 5.21843H17.5983"
      stroke="white"
      strokeWidth="1.25"
      strokelinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.40216 5.21843C2.40216 6.5449 3.47667 7.61843 4.80216 7.61843C6.12765 7.61843 7.20216 6.5449 7.20216 5.21843C7.20216 3.89294 6.12765 2.81843 4.80216 2.81843C3.47667 2.81843 2.40216 3.89294 2.40216 5.21843Z"
      stroke="white"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default FilterIcon;
