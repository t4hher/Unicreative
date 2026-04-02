export default function Footer(){
    return(
        <div className="footer-container">
            <span className="imgf">
                <img src="/logoo.jpeg" alt="footer" className="imgfooter"/>
            </span>
                    <h5 className="contact">Contactez-nous</h5>
                    <div className="conimg">
                        <a href="#">
                            <img className="icone-facebook" src="https://img.icons8.com/?size=100&id=1CJh8Xrdz1R2&format=png&color=ffffff" alt="icone-facebook"/>
                        </a>
                        <a href="#">
                            <img className="icone-instagram" src="https://img.icons8.com/?size=100&id=97E7Dm8qCE2w&format=png&color=ffffff" alt="icone-instagram"/>
                        </a>
                        <a href="#">
                            <img className="icone-linkdin" src="https://img.icons8.com/?size=100&id=BRElTmOLC6Bh&format=png&color=ffffff" alt="icone-linkdin"/>
                        </a>
                        <a href="#">
                            <img className="icone-youtube" src="https://img.icons8.com/?size=100&id=Aq10GU126KJX&format=png&color=ffffff" alt="icone-youtube"/>
                        </a>
                    </div>
                <div className="infor">
                    <span><a href="">A Propos</a></span>
                    <span><a href="">Nos service</a> </span>
                    <span><a href="">Nos Réalisation</a></span>
                    <span><a href="">Carriére</a></span>

                </div>

        </div>
    )
}
