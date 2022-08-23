import React from 'react';

import colors from '../../helper/colors';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

function RightLinks(props) {
    return (
        <div>
            <div className="attachRight">

                <button className="attachRightBtn LinkedIn" onClick={()=>{window.open("https://www.linkedin.com/company/sme-generators")}}><LinkedInIcon style={{color:colors.white}}/></button><br/>
                <button className="attachRightBtn Facebook" onClick={()=>{window.open("https://www.facebook.com/smegenerators/")}}><FacebookIcon style={{color:colors.white}}/></button><br/>
                <button className="attachRightBtn Whatsapp" onClick={()=>{window.open("//api.whatsapp.com/send?phone=918888871895&text=Hello, I want to enquire about ")}}><WhatsAppIcon style={{color:colors.white}}/></button><br/>
                <button className="attachRightBtn MailSales" onClick={()=>{window.open('mailto:sales@smegenerators.com')}}><MailIcon style={{color:colors.white}}/></button><br/>
            </div>
        </div>
    );
}

export default RightLinks;