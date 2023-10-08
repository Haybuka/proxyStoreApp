import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Padlock = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#AFAFAF"
      d="M14.65 7.44H5.12V6.28c0-2.93.83-4.88 4.88-4.88 4.33 0 4.88 2.11 4.88 3.95 0 .39.31.7.7.7.39 0 .7-.31.7-.7C16.28 1.8 14.17 0 10 0 4.37 0 3.72 3.58 3.72 6.28v1.25C.92 7.88 0 9.3 0 12.79v1.86C0 18.75 1.25 20 5.35 20h9.3c4.1 0 5.35-1.25 5.35-5.35v-1.86c0-4.1-1.25-5.35-5.35-5.35ZM10 16.74c-1.67 0-3.02-1.36-3.02-3.02 0-1.67 1.36-3.02 3.02-3.02a3.03 3.03 0 0 1 3.02 3.02c0 1.67-1.35 3.02-3.02 3.02Z"
    />
  </Svg>
)
export default Padlock
