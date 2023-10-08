import Box from "../assets/icon/home/Box"
import Bus from "../assets/icon/home/Bus"
import Data from "../assets/icon/home/Data"
import Drop from "../assets/icon/home/Drop"
import Fire from "../assets/icon/home/Fire"
import Gas from "../assets/icon/home/Gas"
import Lightning from "../assets/icon/home/Lightning"
import Scissors from "../assets/icon/home/Scissors"



export default utilityIcons = (value) => {
  switch (value) {
    case "transport":
      return <Bus />
    case "gas":
      return <Gas />
    case "fuel":
      return <Fire />
    case "lifestyle":
      return <Scissors />
    case "electricity":
      return <Lightning />
    case "water":
      return <Drop />
    case "church":
      return <Box />
    case "data":
      return <Data />
    default:
      return <Box />

  }
}