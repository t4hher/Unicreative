import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

export default function AdminLayout(){
    return <div className="admin-container">
        <SideBar/>
        <main className="main-content">
            <div className="page-view">
                <Outlet /> 
            </div>
      </main>
    </div>
}