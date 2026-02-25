// =====> IMPORTS
import { RouterProvider } from "react-router";
import router from "./routes/index.route";
import "@fontsource/poppins"

// MY-SETUP
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

// =====> EXPORTS
export default App;