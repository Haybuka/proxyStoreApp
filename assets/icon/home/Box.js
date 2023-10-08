import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Box = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#0D09DB"
      d="m20.21 7.82-7.7 4.46c-.31.18-.7.18-1.02 0l-7.7-4.46c-.55-.32-.69-1.07-.27-1.54.29-.33.62-.6.97-.79l5.42-3c1.16-.65 3.04-.65 4.2 0l5.42 3c.35.19.68.47.97.79.4.47.26 1.22-.29 1.54ZM11.43 14.14v6.82c0 .76-.77 1.26-1.45.93-2.06-1.01-5.53-2.9-5.53-2.9-1.22-.69-2.22-2.43-2.22-3.86V9.97c0-.79.83-1.29 1.51-.9l7.19 4.17c.3.19.5.53.5.9ZM12.57 14.14v6.82c0 .76.77 1.26 1.45.93 2.06-1.01 5.53-2.9 5.53-2.9 1.22-.69 2.22-2.43 2.22-3.86V9.97c0-.79-.83-1.29-1.51-.9l-7.19 4.17c-.3.19-.5.53-.5.9Z"
    />
  </Svg>
)
export default Box