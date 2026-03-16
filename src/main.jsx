import {createRoot} from "react-dom/client"
import App from "./App"
import "./index.css"
import GlobalContext from "./concept/crudoperation/context/GlobalContext"
import { Provider } from "react-redux"
import { store } from "./concept/reduxtoolkitconcept/app/store"

createRoot(document.getElementById("root")).render(
  
    <Provider store={store}>
      <GlobalContext>
        <App/>
      </GlobalContext>
    </Provider>
 
)
