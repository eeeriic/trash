import { Outlet } from "react-router-dom"
import Navbar1 from "../../components/Navbars/Navbar1/Navbar1"
import Footer1 from "../../components/Footers/Footer1/Footer1"
import styles from "./Full.module.css"

export default function Full() {
  return (
    <div className={styles.full}>
      <Navbar1></Navbar1>
      <Outlet />
      <Footer1></Footer1>
    </div>
  )
}