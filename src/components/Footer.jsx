import React from "react";
import "../Style/Footer.css"
import Instagram from "@mui/icons-material/Instagram"
import Facebook from "@mui/icons-material/Facebook"
import Twitter from "@mui/icons-material/Twitter"
import LinkedIn from "@mui/icons-material/Linkedin"
function Footer()  {
    return   (
        <div className="Footer">
            <div className="SocialMedia">
            <Instagram/>
            <Facebook/>
            <Twitter/>
            <LinkedIn/>
           </div>  
            <p>@Copy:2025 Shantakanta.com</p>
        </div>
    )
}
export default Footer;
