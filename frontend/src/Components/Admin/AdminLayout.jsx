import { useNavigate, Outlet, Navigate } from "react-router-dom";
import SideBar from "./SideBar";

export default function AdminLayout(){
    const navigate= useNavigate();
    const token = localStorage.getItem('admin_token');

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return <div className="admin-container">
        <SideBar/>
        <main className="main-content">
            <div className="page-view">
                <Outlet /> 
            </div>
      </main>
    </div>
}