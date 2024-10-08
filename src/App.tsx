import { Route, Routes } from "react-router-dom"
import Admin from "./pages/(admin)/Layout"
import Form from "./pages/(admin)/_components/Form"
import Table from "./pages/(admin)/_components/Table"
import HomePage from "./pages/(client)/Home/page"
import Layout from "./pages/(client)/Layout"
import Signin from "./pages/(client)/auth/Signin"
import ProtectedRouter from "./routes/ProtectedRotuer"

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
        </Route>
        <Route path="admin" element={<ProtectedRouter><Admin /></ProtectedRouter>}>
          <Route index element={<Table />} />
          <Route path="add" element={<Form />} />
          <Route path="edit/:id" element={<Form />} />
        </Route>
        <Route path="signin" element={<Signin />} />
      </Routes>

    </>
  )
}

export default App
