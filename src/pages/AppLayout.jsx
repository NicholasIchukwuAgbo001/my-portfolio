import { Outlet } from "react-router"
import Header from "../components/Header"
import Footer from "../components/Footer"

const AppLayout = () => {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default AppLayout
