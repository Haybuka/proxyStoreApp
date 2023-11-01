import { Text } from "react-native"
import Barber from "../components/Utility/Lifestyle/barber"
import MakeUp from "../components/Utility/Lifestyle/makeup"
import Manicure from "../components/Utility/Lifestyle/manicure"
import Pedicure from "../components/Utility/Lifestyle/pedicure"
import Massage from "../components/Utility/Lifestyle/massage"
import Facials from "../components/Utility/Lifestyle/facials"

export default lifestyleOptions = (value = "deefault") => {
  switch (value.toLowerCase()) {
    case "barbing":
      return <Barber />
    case "make up":
      return <MakeUp />
    case "manicure":
      return <Manicure />
    case "pedicure":
      return <Pedicure />
    case "massage":
      return <Massage />
    case "facials":
      return <Facials />


    default:
      return <Text>No coomponetn</Text>

  }
}