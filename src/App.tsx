import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/(client)/Home/page"
import Signin from "./pages/(client)/auth/Signin"
import Admin from "./pages/(admin)/Layout"
import Form from "./pages/(admin)/_components/Form"
import Table from "./pages/(admin)/_components/Table"
import ProtectedRouter from "./routes/ProtectedRotuer"
import Layout from "./routes/Layout"

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
        </Route>
        <Route path="admin" element={<ProtectedRouter><Admin /></ProtectedRouter>}>
          <Route path="list" element={<Table />} />
          <Route path="add" element={<Form />} />
          <Route path="edit/:id" element={<Form />} />
        </Route>
        <Route path="signin" element={<Signin />} />
      </Routes>

    </>
  )
}

export default App
