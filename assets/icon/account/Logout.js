import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Logout = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#F22"
      d="M7.2 2h2.6C13 2 15 4 15 7.2v4.05H8.75c-.41 0-.75.34-.75.75s.34.75.75.75H15v4.05C15 20 13 22 9.8 22H7.21c-3.2 0-5.2-2-5.2-5.2V7.2C2 4 4 2 7.2 2ZM19.44 11.25l-2.07-2.07a.742.742 0 0 1-.22-.53c0-.19.07-.39.22-.53.29-.29.77-.29 1.06 0l3.35 3.35c.29.29.29.77 0 1.06l-3.35 3.35c-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06l2.07-2.07H15v-1.5h4.44Z"
    />
  </Svg>
)
export default Logout