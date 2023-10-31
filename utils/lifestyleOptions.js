import { Text } from "react-native"
import Barber from "../components/Utility/Lifestyle/barber"

export default lifestyleOptions = (value = "deefault") => {
  switch (value.toLowerCase()) {
    case "barbing":
      return <Barber />

    default:
      return <Text>No coomponetn</Text>

  }
}