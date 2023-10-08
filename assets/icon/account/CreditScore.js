import * as React from "react"
import Svg, {
  G,
  Rect,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const CreditScore = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={86}
    height={86}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Rect
        width={55.154}
        height={55.154}
        x={43}
        y={3}
        fill="url(#b)"
        rx={8.944}
        transform="rotate(45 43 3)"
      />
      <Rect
        width={50.682}
        height={50.682}
        x={43}
        y={6.162}
        stroke="#fff"
        strokeWidth={4.472}
        rx={6.708}
        transform="rotate(45 43 6.162)"
      />
    </G>
    <Circle
      cx={43}
      cy={42}
      r={13.028}
      fill="#33FFCE"
      stroke="#3EBD9F"
      strokeWidth={2.266}
    />
    <Path
      fill="#0E8569"
      d="M47.875 42.487v2.775c0 2.34-2.182 4.238-4.875 4.238s-4.875-1.898-4.875-4.238v-2.775c0 2.34 2.182 4.013 4.875 4.013s4.875-1.673 4.875-4.013Z"
    />
    <Path
      fill="#0E8569"
      d="M47.875 38.737v3.75c0 2.34-2.182 4.013-4.875 4.013s-4.875-1.673-4.875-4.013v-3.75c0 .683.188 1.313.517 1.853.803 1.32 2.453 2.16 4.358 2.16 1.905 0 3.555-.84 4.358-2.16.33-.54.517-1.17.517-1.853Z"
      opacity={0.4}
    />
    <Path
      fill="#0E8569"
      d="M47.875 38.737c0 .683-.188 1.313-.517 1.853-.803 1.32-2.453 2.16-4.358 2.16-1.905 0-3.555-.84-4.358-2.16a3.528 3.528 0 0 1-.517-1.853c0-2.34 2.182-4.237 4.875-4.237 1.35 0 2.565.472 3.45 1.237.877.773 1.425 1.83 1.425 3Z"
    />
    <Defs>
      <LinearGradient
        id="b"
        x1={45.016}
        x2={101.935}
        y1={8.706}
        y2={61.935}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={0.755} stopColor="#D9FFF6" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default CreditScore
