import SignIn from "./components/SignIn"
import SignWithEmail from "./components/SignWithEmail"
import ContinueWithEmail from "./components/ContinueWithEmail"
import ContinueToDashBoard from "./components/ContinueToDashBoard"
import DashBoard from "./components/DashBoard"
import MyAccount from "./components/MyAccount"
function App() {

  return (
    <>
      <SignIn/>
      <SignWithEmail/>
      <ContinueWithEmail/>
      <ContinueToDashBoard/>
      <DashBoard/>
      <MyAccount/>
    </>
  )
}

export default App
