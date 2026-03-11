import {createRoot} from "react-dom/client"
import App from "./App"
import "./index.css"
import GlobalContext from "./concept/crudoperation/context/GlobalContext"

createRoot(document.getElementById("root")).render(
  <GlobalContext>
    <App/>
  </GlobalContext>
)
