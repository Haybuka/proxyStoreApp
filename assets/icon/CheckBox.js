import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const CheckBox = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={106}
    height={106}
    fill="none"
    {...props}
  >
    <Circle cx={53} cy={53} r={53} fill="#00E88A" fillOpacity={0.3} />
    <Circle cx={53} cy={53} r={27.414} fill="#00D881" />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.741}
      d="M63.052 46.604 50.259 59.397 43.862 53"
    />
  </Svg>
)
export default CheckBox
