import React from 'react'
import Fuel from './Fuel'
import Gas from './Gas'
import Transportation from './Transportation'
import Lifestyle from './Lifestyle'
import Electricity from './Electricity'
import Airtime from './Airtime'
import Tithes from './Tithes'
import Water from './water'

const UtilityScreenType = ({ title, handleTitle }) => {

  const utilityType = (title) => {
    switch (title?.toLowerCase()) {
      case "fuel":
        return <Fuel handleTitle={handleTitle} />
      case "gas":
        return <Gas handleTitle={handleTitle} />
      case "transportation":
        return <Transportation handleTitle={handleTitle} />
      case "lifestyle":
        return <Lifestyle handleTitle={handleTitle} />
      case "electricity":
        return <Electricity handleTitle={handleTitle} />
      case "airtime":
        return <Airtime handleTitle={handleTitle} />
      case "tithes":
        return <Tithes handleTitle={handleTitle} />
      case "water":
        return <Water handleTitle={handleTitle} />

      default:
        break;
    }
  }
  return (

    utilityType(title)

  )
}

export default UtilityScreenType