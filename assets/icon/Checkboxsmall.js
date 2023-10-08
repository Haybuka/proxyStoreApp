import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const CheckBoxsmall = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <Circle cx={9} cy={9} r={9} fill="#23A16E" />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.808 6.577 7.96 11.423 5.538 9"
    />
  </Svg>
)
export default CheckBoxsmall
