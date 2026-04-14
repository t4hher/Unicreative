import { Link } from "react-router-dom";

export default function AdminMessage(){
    return <div className="dash-container">
        <div className="dash-header">
            <h1>Messages</h1>
            <div className="adminFilter">
                <div className="">
                    <input type="text" className="form-control" placeholder="Chercher"/>
                </div>
                <span> | </span>
                <div className="adminFilterBtn">
                    <a href="#" className="active">Tous</a>
                    <a href="#">Non Lues</a>
                    <a href="#">Lues</a>
                </div> 
            </div>
        </div>
        <div className="dash-body">
            <div className="grid">
                <div className="box">
                    <h4>Nom et Prénom</h4>
                    <p>Contact Info</p>
                    <span><b>Message: </b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, corporis <b>...</b></span>
                </div>
                <div className="box">
                    <h4>Nom et Prénom</h4>
                    <p>Contact Info</p>
                    <span><b>Message: </b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, corporis <b>...</b></span>
                </div>
                <div className="box">
                    <h4>Nom et Prénom</h4>
                    <p>Contact Info</p>
                    <span><b>Message: </b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, corporis <b>...</b></span>
                </div>
                <div className="box">
                    <h4>Nom et Prénom</h4>
                    <p>Contact Info</p>
                    <span><b>Message: </b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, corporis <b>...</b></span>
                </div>
                <div className="box">
                    <h4>Nom et Prénom</h4>
                    <p>Contact Info</p>
                    <span><b>Message: </b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, corporis <b>...</b></span>
                </div>
                <div className="box">
                    <h4>Nom et Prénom</h4>
                    <p>Contact Info</p>
                    <span><b>Message: </b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, corporis <b>...</b></span>
                </div>
                <div className="box">
                    <h4>Nom et Prénom</h4>
                    <p>Contact Info</p>
                    <span><b>Message: </b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, corporis <b>...</b></span>
                </div>
                <div className="box">
                    <h4>Nom et Prénom</h4>
                    <p>Contact Info</p>
                    <span><b>Message: </b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, corporis <b>...</b></span>
                </div>
                <div className="box">
                    <h4>Nom et Prénom</h4>
                    <p>Contact Info</p>
                    <span><b>Message: </b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, corporis <b>...</b></span>
                </div>
            </div>
        </div>
    </div>
}