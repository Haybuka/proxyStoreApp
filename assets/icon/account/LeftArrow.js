import * as React from "react"
import Svg, { Path } from "react-native-svg"
const LeftArrow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#200E32"
      fillRule="evenodd"
      d="M20.293 12.823A.827.827 0 0 0 21 12a.824.824 0 0 0-.818-.83H5.8l5.195-5.251.08-.093a.84.84 0 0 0-.077-1.082.81.81 0 0 0-1.157-.002L3.252 11.4a.84.84 0 0 0-.012 1.189l6.6 6.67.093.08a.81.81 0 0 0 1.065-.083.839.839 0 0 0-.003-1.175L5.8 12.831h14.383l.11-.008Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default LeftArrow
