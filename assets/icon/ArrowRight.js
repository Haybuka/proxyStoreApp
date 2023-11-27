import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ArrowRight = ({ stroke = "#292D32" }) => (

  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
  // {...props}
  >
    <Path
      stroke={`${stroke}`}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.5 19 7-7-7-7"
    />
  </Svg>
)
export default ArrowRight
