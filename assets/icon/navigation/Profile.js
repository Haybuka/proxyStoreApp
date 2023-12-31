import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Profile = ({ focused }) => {
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
                d="M12.16 10.87c-.1-.01-.22-.01-.33 0a4.42 4.42 0 0 1-4.27-4.43C7.56 3.99 9.54 2 12 2a4.435 4.435 0 0 1 .16 8.87ZM7.16 14.56c-2.42 1.62-2.42 4.26 0 5.87 2.75 1.84 7.26 1.84 10.01 0 2.42-1.62 2.42-4.26 0-5.87-2.74-1.83-7.25-1.83-10.01 0Z"
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
                  d="M12.16 10.87c-.1-.01-.22-.01-.33 0a4.42 4.42 0 0 1-4.27-4.43C7.56 3.99 9.54 2 12 2a4.435 4.435 0 0 1 .16 8.87ZM7.16 14.56c-2.42 1.62-2.42 4.26 0 5.87 2.75 1.84 7.26 1.84 10.01 0 2.42-1.62 2.42-4.26 0-5.87-2.74-1.83-7.25-1.83-10.01 0Z"
                />
              </Svg>
            )
        }
      </>
    )
  )
}
export default Profile


