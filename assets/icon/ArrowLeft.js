import * as React from "react"
import Svg, { Path } from "react-native-svg"


const ArrowLeft = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M17.293 8.823A.827.827 0 0 0 18 8a.824.824 0 0 0-.818-.83H2.8l5.195-5.251.08-.093A.84.84 0 0 0 7.998.744.81.81 0 0 0 6.84.742L.252 7.4A.84.84 0 0 0 .24 8.588l6.6 6.67.093.08a.81.81 0 0 0 1.065-.082.839.839 0 0 0-.003-1.175L2.8 8.831h14.383l.11-.008Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default ArrowLeft