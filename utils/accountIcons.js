import About from "../assets/icon/account/About"
import Help from "../assets/icon/account/Help"
import Padlock from "../assets/icon/account/Padlock"
import Privacy from "../assets/icon/account/Privacy"
import Profile from "../assets/icon/account/Profile"

export default accountIcons = (value) => {
  switch (value) {
    case "profile":
      return <Profile />
    case "lock":
      return <Padlock />
    case "help":
      return <Help />
    case "about":
      return <About />
    case "policy":
      return <Privacy />

    default:
      return <Help />

  }
}