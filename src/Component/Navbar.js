import React,{useState} from 'react'
import hamburger from '../images/icon-hamburger.svg';
export default function Navbar({setToggle}) {
    const [active,setActive]=useState(1);
    
    return (
            <div className="w-full p-4 absolute top-0 left-0 bg-transparent text-white flex justify-between items-center">
            <div>
                <h1 className="font-barlow text-3xl font-extrabold mx-5">sunnyside</h1>
            </div>
            <div className="hidden md:flex justify-between items-center px-4 ">
                <a className={(active===1)?"px-6 py-2 mx-4 rounded-full bg-white font-fraunces text-black uppercase tracking-wider":"px-6 py-2 mx-4 rounded-full hover:bg-grayblue font-barlow"} href="#" onClick={()=>setActive(1)}>About</a>
                <a className={(active===2)?"px-6 py-2 mx-4 rounded-full bg-white font-fraunces text-black uppercase tracking-wider":"px-6 py-2 mx-4 rounded-full hover:bg-grayblue font-barlow"} href="#" onClick={()=>setActive(2)}>Services</a>
                <a className={(active===3)?"px-6 py-2 mx-4 rounded-full bg-white font-fraunces text-black uppercase tracking-wider":"px-6 py-2 mx-4 rounded-full hover:bg-grayblue font-barlow"} href="#" onClick={()=>setActive(3)}>Projects</a>
                <a className={(active===4)?"px-6 py-2 mx-4 rounded-full bg-white font-fraunces text-black uppercase tracking-wider":"px-6 py-2 mx-4 rounded-full hover:bg-grayblue font-barlow"} href="#"onClick={()=>setActive(4)}>Contact</a>
            </div>
            <div className="md:hidden hover:bg-grayishblue p-2 rounded-sm" onClick={setToggle}>
                <img src={hamburger} alt="hamburger icon"/>
            </div>
        </div>     
    )
}
