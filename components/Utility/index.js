import React from 'react'

import Fuel from './Fuel'
import Gas from './Gas'
import Transportation from './Transportation'
import Lifestyle from './Lifestyle'
import Electricity from './Electricity'
import Airtime from './Airtime'
import Tithes from './Tithes'
import Water from './water'
import Codevolution from './codevolution'

const UtilityScreenType = ({ title }) => {

  const utilityType = (title) => {
    switch (title?.toLowerCase()) {
      case "fuel":
        return <Fuel />
      case "gas":
        return <Gas />
      case "transportation":
        return <Transportation />
      case "lifestyle":
        return <Lifestyle />
      case "electricity":
        return <Electricity />
      case "airtime & data":
        return <Airtime />
      case "tithes & offering":
        return <Tithes />
      case "water":
        return <Water />
      case "codevolution":
        return <Codevolution />
      default:
        break;
    }
  }
  return (

    utilityType(title)

  )
}

export default UtilityScreenType