import { Outlet } from "react-router-dom"

export default function Empty() {
  return (
    <div className="empty">
      <Outlet />
    </div>
  )
}