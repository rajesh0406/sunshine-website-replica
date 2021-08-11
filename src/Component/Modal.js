import React from 'react'

export default function Modal({setActive,ActiveNav}) {
    return (
        <div className="md:hidden bg-white w-11/12 flex flex-col justify-center items-center mx-5 absolute top-32 py-8">
     <div className="cloud"></div>
       <a src="#" onClick={()=>setActive(1)} className={
         ActiveNav===1?
         "text-black py-2 px-8 my-2 bg-yellow rounded-full font-fraunces text-lg font-bold uppercase"
         :
         "text-darkgrayishblue py-2 px-8 my-2 bg-white rounded-full font-faunces text-md"
     }>About</a>
       <a src="#" onClick={()=>setActive(2)}  className={
         ActiveNav===2?
         "text-black  py-2 px-8 my-2 bg-yellow rounded-full font-fraunces text-lg font-bold uppercase"
         :
         "text-darkgrayishblue py-2 px-8 my-2 bg-white rounded-full font-faunces text-md"
     }>Services</a>
       <a src="#" onClick={()=>setActive(3)}  className={
         ActiveNav===3?
         "text-black py-2 px-8 my-2 bg-yellow rounded-full font-fraunces text-lg font-bold uppercase"
         :
         "text-darkgrayishblue py-2 px-8 my-2 bg-white rounded-full font-faunces text-md"
     }>Projects</a>
       <a src="#" onClick={()=>setActive(4)}  className={
         ActiveNav===4?
         "text-black py-2 px-8 my-2 bg-yellow rounded-full font-fraunces text-lg font-bold uppercase"
         :
         "text-darkgrayishblue py-2 px-8 my-2 bg-white rounded-full font-faunces text-md"
     }>Contact</a>
     </div>
    )
}
