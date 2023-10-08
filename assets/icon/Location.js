import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"
const Location = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#808CA3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.24 10.391a7.678 7.678 0 1 1 15.356.053v.086c-.052 2.757-1.592 5.305-3.479 7.296a20.187 20.187 0 0 1-3.59 2.957.93.93 0 0 1-1.218 0 19.819 19.819 0 0 1-5.052-4.73 9.826 9.826 0 0 1-2.018-5.636v-.026Z"
      clipRule="evenodd"
    />
    <Circle
      cx={11.917}
      cy={10.539}
      r={2.461}
      stroke="#808CA3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </Svg>
)
export default Location
