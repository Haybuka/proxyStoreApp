import * as React from "react"
import { Text, View } from "react-native"
import Svg, { Path } from "react-native-svg"
const Home = ({ focused }) => {
  return (
    (
      <>
        {
          focused ? (

            <Svg
              xmlns="http://www.w3.org/2000/svg"

              fill="none"
              style={{
                backgroundColor: '#0D5FFF',
                borderRadius: 25,
                width: 50,
                height: 50,

              }}
            >
              <Path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                translateX={13}
                translateY={12}
                d="M12 18v-3M10.07 2.82 3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l1.33 7.96c.24 1.42 1.6 2.57 3.04 2.57h11.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91l-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01Z"
              />
            </Svg>

          ) :
            (

              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
              >
                <Path
                  stroke="#595A76"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 18v-3M10.07 2.82 3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l1.33 7.96c.24 1.42 1.6 2.57 3.04 2.57h11.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91l-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01Z"
                />
              </Svg>
            )
        }
      </>
    )
  )
}
export default Home