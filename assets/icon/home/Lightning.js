import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Lightning = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#FF4DD8"
      d="M20.23 11.081a.75.75 0 0 0-.468-.534l-5.4-2.025 1.369-6.872a.76.76 0 0 0-.384-.816.74.74 0 0 0-.891.15l-10.5 11.25a.74.74 0 0 0-.019 1.01.768.768 0 0 0 .3.21l5.4 2.024-1.369 6.872a.76.76 0 0 0 .385.816.788.788 0 0 0 .347.084.742.742 0 0 0 .543-.234l10.5-11.25a.741.741 0 0 0 .188-.685Z"
    />
  </Svg>
)
export default Lightning
