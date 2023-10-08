import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Drop = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#22D7FF"
      d="M16.313 4.481a24.322 24.322 0 0 0-3.882-3.6.76.76 0 0 0-.862 0 24.319 24.319 0 0 0-3.882 3.6C5.11 7.434 3.75 10.556 3.75 13.5a8.25 8.25 0 1 0 16.5 0c0-2.944-1.36-6.066-3.938-9.019Zm.862 9.9a5.23 5.23 0 0 1-4.294 4.285h-.122a.75.75 0 0 1-.122-1.491 3.722 3.722 0 0 0 3.057-3.056.752.752 0 0 1 1.147-.506.74.74 0 0 1 .334.768Z"
    />
  </Svg>
)
export default Drop