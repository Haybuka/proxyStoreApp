import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"


const LocationIcon = ({ dimension = "24" }) => (
  <Svg width={dimension} height={dimension} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M4.23914 10.3912C4.25354 6.15065 7.7029 2.72465 11.9435 2.73906C16.1841 2.75347 19.6101 6.20282 19.5957 10.4434V10.5304C19.5435 13.2869 18.0044 15.8347 16.1174 17.826C15.0382 18.9466 13.8331 19.9387 12.5261 20.7825C12.1766 21.0848 11.6582 21.0848 11.3087 20.7825C9.3602 19.5143 7.65007 17.9131 6.25653 16.0521C5.01449 14.4293 4.3093 12.4597 4.23914 10.4173L4.23914 10.3912Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <Circle cx="11.9174" cy="10.539" r="2.46087" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </Svg>

)
export default LocationIcon
