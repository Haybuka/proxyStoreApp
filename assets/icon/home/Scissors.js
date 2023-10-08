import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Scissors = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#B04DFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="M5.625 9.75a2.625 2.625 0 1 0 0-5.25 2.625 2.625 0 0 0 0 5.25ZM5.625 19.5a2.625 2.625 0 1 0 0-5.25 2.625 2.625 0 0 0 0 5.25ZM12.75 12l-4.96 3.394M21.75 18.16 7.79 8.605M21.75 5.84l-5.681 3.891"
    />
  </Svg>
)
export default Scissors
