import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Data = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#02AB6E"
      d="m19.54 6.54-3.07-3.07A5.003 5.003 0 0 0 12.93 2H8C5 2 3 4 3 7v10c0 3 2 5 5 5h8c3 0 5-2 5-5v-6.93c0-1.33-.53-2.6-1.46-3.53ZM11.5 18a.5.5 0 0 1-.5.5h-1c-1.65 0-3-1.35-3-3V15a.5.5 0 0 1 .5-.5h3.75c.14 0 .25.11.25.25V18Zm0-4.75c0 .14-.11.25-.25.25H7.5A.5.5 0 0 1 7 13v-.5c0-1.65 1.35-3 3-3h1a.5.5 0 0 1 .5.5v3.25ZM17 15.5c0 1.65-1.35 3-3 3h-1a.5.5 0 0 1-.5-.5v-3.25c0-.14.11-.25.25-.25h3.75a.5.5 0 0 1 .5.5v.5Zm0-2.5a.5.5 0 0 1-.5.5h-3.75c-.14 0-.25-.11-.25-.25V10a.5.5 0 0 1 .5-.5h1c1.65 0 3 1.35 3 3v.5Z"
    />
  </Svg>
)
export default Data