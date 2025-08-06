import { Outlet } from "react-router"
import Header from "../components/Header"

const AppLayout = () => {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
