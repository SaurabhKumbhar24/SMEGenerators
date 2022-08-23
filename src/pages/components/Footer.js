import React from 'react';

import colors from '../../helper/colors';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

import LogoImg from "../../assets/icon.png";

function Footer(props) {
    return (
        <div>
            <div style={{background:colors.white,padding:20}}>
                <div className="divCenter">
                    <img onClick={()=>{window.location="https://www.smegenerators.com"}} style={{cursor:'pointer'}} src={LogoImg} width="auto" height="50px" alt="logo"/>
                </div>

                <div className="divCenter" style={{marginTop:20}}>
                    <button className='LinkedIn' style={{border:"none",background:"transparent",cursor:"pointer"}} onClick={()=>{window.open("https://www.linkedin.com/company/sme-generators")}}><LinkedInIcon style={{color:colors.black}}/></button>
                    <button className='Facebook' style={{border:"none",background:"transparent",cursor:"pointer"}} onClick={()=>{window.open("https://www.facebook.com/smegenerators/")}}><FacebookIcon style={{color:colors.black}}/></button>
                    <button className='Whatsapp' style={{border:"none",background:"transparent",cursor:"pointer"}} onClick={()=>{window.open("//api.whatsapp.com/send?phone=918888871895&text=Hello, I want to enquire about ")}}><WhatsAppIcon style={{color:colors.black}}/></button>
                    <button className='MailSales' style={{border:"none",background:"transparent",cursor:"pointer"}} onClick={()=>{window.open('mailto:sales@smegenerators.com')}}><MailIcon style={{color:colors.black}}/></button>
                </div>

                <p className="mFont" style={{textAlign:"center",lineHeight:2,color:colors.black}}>Copyright © {new Date().getFullYear()} SME Generators.<br/>All Rights Reserved.</p>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                    <a href="/tnc" className='mFont'>Terms {'&'} Conditions</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;