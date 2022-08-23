import React from 'react';

import HomeComponent from './components/HomeComponent';
import Navbar from './components/Navbar';

import { Card, CardContent, CardMedia, Grid } from '@mui/material';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MailIcon from '@mui/icons-material/Mail';

import TriangleImg from "../assets/triangle.png";
import KirloskarImg from '../assets/kirloskar_genset.png';
import MahindraImg from '../assets/mahindra_generator.png';
import CumminsImg from '../assets/cummins_genset.jpg';
import HarisonImg from '../assets/harison.png';
import HimalayanPower from '../assets/himalayan_genset.jpg';
import Lubricant from '../assets/oil.png';

import AboutImg from '../assets/about2.jpg';

import Footer from './components/Footer';
import RightLinks from './components/RightLinks';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Home(props) {

    const homeRef=props.homeRef; 
    const aboutRef=props.aboutRef; 
    const productsRef=props.productsRef;
    const contactRef=props.contactRef;

    const [containerRef,containerInView] = useInView({triggerOnce:true});
    const [productContainerRef,productContainerInView] = useInView({triggerOnce:true});
    const [contactContainerRef,contactContainerInView] = useInView({triggerOnce:true});

    const cards = [
        {
            img:KirloskarImg,
            heading:'Kirloskar',
            subHeading:'Diesel Generators (7.5 KVA to 625 KVA)',
            descriptionGenset:true
        },
        {
            img:MahindraImg,
            heading:'Mahindra',
            subHeading:'Diesel Generators (7.5 KVA to 625 KVA)',
            descriptionGenset:true
        },
        {
            img:CumminsImg,
            heading:'Cummins',
            subHeading:'Diesel Generators (7.5 KVA to 625 KVA)',
            descriptionGenset:true
        },
        {
            img:HarisonImg,
            heading:'Harison',
            subHeading:'Diesel Generators (7.5 KVA to 125 KVA)',
            descriptionGenset:true
        },
        {
            img:HimalayanPower,
            heading:'Himalayan Power',
            subHeading:'Petrol Generators (1 KVA to 7.5 KVA)',
            descriptionGenset:true
        },
        {
            img:Lubricant,
            heading:'Lubricants',
            subHeading:'Hydraulic Oil, Engine Oil, Gear Oil etc',
            descriptionGenset:false
        }
    ];

    const Headquaters = {
        ContactName:'Mr. Kishor Wadile',
        Designation:'Manager',
        Address:'Pune',
        AddressLine1:'opp. Tata Showroom, Tathawade,',
        AddressLine2:'Pune - 411033',
        ContactText:'+91 98220 53777',
        ContactLink:'tel:919822053777',
        MapsLink:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15123.545630793853!2d73.744007!3d18.6241783!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x950aa678e2d37997!2sSME%20GENERATORS!5e0!3m2!1sen!2sin!4v1661052930433!5m2!1sen!2sin',
        WhatsappLink:'https://wa.me/919822053777',
        LinkedInLink:''
    };

    const branches = [
        {
            ContactName:'Mr. Mayur Patil',
            Designation:'Service Manager',
            Address:'Pune',
            AddressLine1:'S.No. 23/7 Plot No. 4 Shrihari Soc. Dhankawadi,',
            AddressLine2:'Pune - 411043',
            ContactText:'+91 88888 71891',
            ContactLink:'tel:918888871891',
            MapsLink:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15138.051016279504!2d73.8603556!3d18.4604192!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf713a3e40503bb88!2sSME%20Generators!5e0!3m2!1sen!2sin!4v1661054110635!5m2!1sen!2sin',
            WhatsappLink:'https://wa.me/918888871891',
        },
        {
            ContactName:'Mr. Ravindra Salunkhe',
            Designation:'Branch Manager',
            Address:'Dhule',
            AddressLine1:'AT Post Babhale NH 52 TAL - Shindkheda Dist - Dhule,',
            AddressLine2:'Babhale - 424309',
            ContactText:'+91 88888 71893',
            ContactLink:'tel:918888871893',
            MapsLink:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.7358325421296!2d74.79033031540331!3d21.123095489925944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bded70dde328977%3A0xd174dfda7a3c00a8!2sSME%20Generators!5e0!3m2!1sen!2sin!4v1661054653362!5m2!1sen!2sin',
            WhatsappLink:'https://wa.me/918888871893',
        },
        {
            ContactName:'Mr. Rajesh Bhagat',
            Designation:'Sr. Service Head',
            Address:'Pune',
            AddressLine1:'Shop No. 12, Devkar Plaza, Shantinagar, Bhosari,',
            AddressLine2:'Pune - 411039',
            ContactText:'+91 88888 71892',
            ContactLink:'tel:918888871892',
            MapsLink:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236.30779200714818!2d73.84463968161637!3d18.622457602694816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7803addc019%3A0x8aad85d18521daf6!2sShree%20Mahalaxmi%20Enterprises!5e0!3m2!1sen!2sin!4v1661055675936!5m2!1sen!2sin',
            WhatsappLink:'https://wa.me/918888871892',
        }
    ];

    const pns = ['Supply & Installation','Spare Parts','Repair','Annual Maintenance Contract'];
    const lubs = ['Volvoline','Frontline','Palco','HP','Servo'];

    return (
        <div>
            {/* HOME */}
            <HomeComponent reference={homeRef}/>

            <RightLinks/>
            
            <div className="divCenter" style={{ marginTop: -50 }}>
                <img src={TriangleImg} width={30} alt="Triangle" />
            </div>

            {/* ABOUT US */}

            <div className='pad-10' style={{height:'100%'}} ref={containerRef}>
                <Grid container id="aboutUs" ref={aboutRef} spacing={3}>
                    <Grid item lg={6} xs={12}>
                        <motion.h1 animate={{x: containerInView && 0}} transition={{from:-200,duration:2}} className='mFont'>About Us</motion.h1>
                        <motion.div animate={{x: containerInView && 0}} transition={{from:-200,duration:2}} className='lineDiv'></motion.div>
                        

                        <motion.p animate={{x: containerInView && 0}} transition={{from:-200,duration:2}} className='mFont why'>

                            SME Generators was established in 2016. SME Generators depicts the trust, reliability, quality and best service all over india.
                            <br/>
                            SME Generators sale and service diesel generators of Kirloskar, Mahindra, Cummins, Harison, Himalayan Power and many more makes.
                            We specialize in understanding customer requirements carefully and guide them to the right direction according
                            to their needs. 
                            <br/>
                            We also provide service of hiring, repairing and Annual Maintenance Contract (AMCs) of generators.
                            <br/>
                            Currently we are dealing with Diesel Generators ranging from 7.5 KVA to 625 KVA.

                        </motion.p>
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <motion.div animate={{x: containerInView && 0}} transition={{from:200,duration:2}}>
                            <img src={AboutImg} width="100%" alt="about img"/>
                        </motion.div>
                    </Grid>
                </Grid>
            </div>

            {/* PRODUCTS AND SERVICES */}

            <div className='pad-10' style={{height:'100%'}}>
                <h1 className='mFont' style={{textAlign:'center'}} id="products" ref={productsRef}>Products and Services</h1>
                <div className="divCenter">
                    <div className='lineDiv'></div>
                </div>
                <Grid container ref={productContainerRef}>
                    {
                        cards.map(d=>(
                            <Grid item lg={4} xs={12}>
                                <motion.div animate={{y: productContainerInView && 0}} transition={{from:200,duration:2}}>
                                <Card style={{margin:5}}>
                                    <CardMedia
                                        component="img"
                                        height="100%"
                                        width="100%"
                                        image={d.img}
                                        alt={d.heading}
                                    />
                                    <CardContent>
                                        <h2 className='mFont'>{d.heading}</h2>
                                        <h4 className='mFont'>{d.subHeading}</h4>
                                        <div>
                                            {
                                                d.descriptionGenset ? 
                                                <p className='mFont'>
                                                    {pns.map(p=>(
                                                        <Grid container>
                                                            <Grid item>
                                                                <CheckCircleIcon style={{marginRight:10,color:'green'}}/>
                                                            </Grid>
                                                            <Grid item>
                                                                {p}
                                                            </Grid>
                                                        </Grid>
                                                    ))}
                                                </p>
                                                :
                                                <p className='mFont'>
                                                    {lubs.map(lub=>(
                                                        <Grid container>
                                                            <Grid item>
                                                                <CheckCircleIcon style={{marginRight:10,color:'green'}}/>
                                                            </Grid>
                                                            <Grid item>
                                                                {lub}
                                                            </Grid>
                                                        </Grid>
                                                    ))}
                                                </p>
                                            }
                                            
                                        </div>
                                    </CardContent>
                                </Card>
                                </motion.div>
                            </Grid>
                        ))
                    }
                    
                </Grid>
            </div>
            
            {/* CONTACT US */}

            <div className='pad-10'>
                <h1 id="contact" className='mFont' style={{textAlign:'center'}} ref={contactRef}>Contact Us</h1>
                <div className="divCenter" ref={contactContainerRef}>
                    <div className='lineDiv'></div>
                </div>
                <motion.div animate={{x: contactContainerInView && 0}} transition={{from:-200,duration:2}}>
                <Card>
                    <CardContent>   
                        <Grid container>

                            <Grid item xs={12} lg={6}>
                                <h2 className='mFont'>{Headquaters.Address}</h2>
                                <h4 className='mFont'>Headquaters</h4>
                                <p className='mFont'>
                                    SME Generators, <br/>
                                    {Headquaters.AddressLine1}<br/>
                                    {Headquaters.AddressLine2}
                                    <br/><br/>
                                    {Headquaters.ContactName}<br/>
                                    {Headquaters.Designation}
                                    <br/><br/>
                                    Contact No. <a href={Headquaters.ContactLink}>{Headquaters.ContactText}</a>
                                    <br/><br/>
                                    <a href={Headquaters.WhatsappLink} alt="KishorWadileWhatsapp" style={{color:'green'}}><WhatsAppIcon style={{fontSize:30}}/></a>
                                    <a className="MailSales" href="mailto:sales@smegenerators.com" alt="Email Contact" style={{color:'red',marginLeft:10}}><MailIcon style={{fontSize:30}}/></a>
                                </p>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <iframe 
                                    src={Headquaters.MapsLink}
                                    width="100%" 
                                    height="100%" 
                                    style={{border:0}} 
                                    allowFullScreen 
                                    loading="lazy" 
                                    title="SME Generators"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
                </motion.div>
                
                <motion.div animate={{x: contactContainerInView && 0}} transition={{from:200,duration:2}}>
                <Grid container style={{marginTop:50}} spacing={2}>
                    {branches.map(b=>(
                        <Grid item xs={12} lg={4}>
                            <Card>
                                <CardContent>
                                    <iframe 
                                        src={b.MapsLink}
                                        width="100%" 
                                        height={200}
                                        style={{border:0}} 
                                        allowFullScreen 
                                        loading="lazy" 
                                        title="SME Generators"
                                        referrerPolicy="no-referrer-when-downgrade">
                                    </iframe>
                                    <h2 className='mFont'>{b.Address}</h2>
                                    <h4 className='mFont'>Branch Office</h4>
                                    <p className='mFont'>
                                        SME Generators,<br/>
                                        {b.AddressLine1}<br/>
                                        {b.AddressLine2}
                                        <br/><br/>
                                        {b.ContactName}<br/>
                                        {b.Designation}
                                        <br/><br/>
                                        Contact No. <a className="oPhone" href={b.ContactLink}>{b.ContactText}</a>
                                        <br/><br/>
                                        <a href={b.WhatsappLink} className="oWhatsApp" alt="Whatsapp Contact" style={{color:'green'}}><WhatsAppIcon style={{fontSize:30}}/></a>
                                        <a href="mailto:sales@smegenerators.com" className='MailSales' alt="Email Contact" style={{color:'red',marginLeft:10}}><MailIcon style={{fontSize:30}}/></a>
                                    </p>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}

                </Grid>
                </motion.div>
            </div>
            
            {/* NAVBAR AND FOOTER */}
            
            <Navbar 
                homeRef={props.homeRef} 
                aboutRef={props.aboutRef} 
                productsRef={props.productsRef} 
                contactRef={props.contactRef} 
                scrollToRef={props.scrollToRef}
            />

            <Footer/>
        </div>
    );
}

export default Home;