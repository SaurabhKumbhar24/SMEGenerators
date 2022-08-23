import React from 'react';

import { Link } from 'react-router-dom';

import { Dialog, DialogContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import colors from "../../helper/colors";

function Navbar(props) {

    const [hovered,setHovered] = React.useState(false);
        
    const [openNav,setNav] = React.useState(false);

    function handleNav(){
        if(openNav){
            setNav(false);
        }else{
            setNav(true);
        }
    }

    return (
        <div className="navBar">
          <div>
            <Dialog className='dialogBack' keepMounted open={openNav} onClose={handleNav} fullScreen>
                <DialogContent className='dialogBack' style={{paddingTop:'20%'}}>
                    <div className='divCenter'>
                        <Link to="/">
                            <button className="mFont navBtn" 
                                onClick={()=>{
                                    setNav(false);
                                    props.scrollToRef(props.homeRef);
                                }}
                                >Home</button>
                        </Link>
                    </div>
                    <div className='divCenter'>
                        <Link to="/#aboutUs">
                            <button className="mFont navBtn" onClick={()=>{
                                setNav(false);
                                props.scrollToRef(props.aboutRef);
                                }}>About Us</button>
                        </Link>
                    </div>
                    
                    <div className='divCenter'>
                        <Link to="/#products">
                            <button className="mFont navBtn" 
                                onClick={()=>{
                                    setNav(false);
                                    props.scrollToRef(props.productsRef);
                                }}>Products and Services</button>
                        </Link>
                    </div>

                    <div className='divCenter'>
                        <Link to="/#contact">
                            <button className="mFont navBtn" 
                                onClick={()=>{
                                    setNav(false);
                                    props.scrollToRef(props.contactRef);
                                    
                                }}>Contact Us</button>
                        </Link>
                    </div>

                    <div className='divCenter'>
                        <a type="button" style={{textDecoration:"none"}} href="/tnc" className="mFont navBtn">Terms and Conditions</a>
                    </div>

                    <button style={{position:'absolute',top:20,right:20,background:"transparent",border:"none",cursor:"pointer"}} onClick={()=>{setNav(false);}}><CloseIcon style={{color:colors.black}}/></button>
                </DialogContent>
            </Dialog>
            <button type='button' onClick={handleNav} style={{border:"none",background:'transparent',cursor:'pointer'}}>
            <div>
                <svg onMouseEnter={()=>{setHovered(true)}} onMouseLeave={()=>{setHovered(false);}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                    <g id="Rectangle_3" data-name="Rectangle 3" fill={hovered ? colors.secondary : colors.white} stroke="none" strokeWidth="2.5">
                        <rect width="30" height="30" rx="5" stroke="none"/>
                        <rect x="1.25" y="1.25" width="27.5" height="27.5" rx="3.75" fill="none"/>
                    </g>
                    <line id="Line_39" data-name="Line 39" x2="15" transform="translate(8 11)" fill="none" stroke={hovered ? colors.white : colors.secondary} strokeLinecap="round" strokeWidth="5"/>
                    <line id="Line_40" data-name="Line 40" x2="15" transform="translate(8 20)" fill="none" stroke={hovered ? colors.white : colors.secondary} strokeLinecap="round" strokeWidth="5"/>
                </svg>
            </div>
            </button>
          </div>
        </div>
    );
}

export default Navbar;