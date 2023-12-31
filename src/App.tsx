import {Route, Routes} from "react-router-dom";
import {routes} from "./routes.tsx";
import Menu from "./components/Menu";

function App() {
  return (
      <>
          <Menu/>
          <Routes>
              {routes.map(item => (
                  <Route key={item.path} element={item.element} path={item.path}/>
              ))}
          </Routes>
      </>
      )
}

export default App
