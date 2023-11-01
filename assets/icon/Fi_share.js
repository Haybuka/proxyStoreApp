import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Fi_share = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13"
    />
    <Path d="M4 12V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <Path d="M16 6L12 2L8 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <Path d="M12 2V15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </Svg>
)
export default Fi_share


