
import React,{useState} from 'react'
import Navbar from './Component/Navbar';
import header from './images/desktop/image-header.jpg';
import arrow from './images/icon-arrow-down.svg';
import './App.css'
import Modal from './Component/Modal';
import transform from './images/desktop/image-transform.jpg';
import stand from './images/desktop/image-stand-out.jpg';
import graphic from './images/desktop/image-graphic-design.jpg';
import photography from './images/desktop/image-photography.jpg';
import emily from './images/image-emily.jpg';
import jennie from './images/image-jennie.jpg';
import thomas from './images/image-thomas.jpg';
import sugar from './images/desktop/image-gallery-sugarcubes.jpg';
import orange from './images/desktop/image-gallery-orange.jpg';
import milkbottles from './images/desktop/image-gallery-milkbottles.jpg';
import cone from './images/desktop/image-gallery-cone.jpg';
import facebook from './images/icon-facebook.svg';
import pinterest from './images/icon-pinterest.svg';
import twitter from './images/icon-twitter.svg';
import instagram from './images/icon-instagram.svg'
function App() {
  const [ActiveNav,setActive]=useState(1);
  const [toggle,setToggle]=useState(false);
  return (
    <div className="App">
    <header className="relative">
    <Navbar setToggle={()=>setToggle(!toggle)}/>
    <img src={header} alt="header image" className="object-cover w-screen h-screen "/>
    <div class="absolute top-48 w-full flex  justify-center items-center">
    <div class="text-center text-white"> 
    <h1 className="uppercase tracking-wider font-fraunces pb-4 text-4xl sm:text-5xl">we are creatives</h1>
      <img src={arrow} alt="arrow down" className="mx-auto" />
    </div>
    </div>
    </header>
   {
     toggle &&
     <Modal setActive={setActive} ActiveNav={ActiveNav}/>
   }
   <section className="flex flex-col md:flex-row justify-between items-center">
     <div className="w-full">
       <div className="text-center md:text-left max-w-md mx-4 my-20 sm:my-32 md:mx-auto ">
         <h1 className="font-fraunces text-darkdesaturatedblue text-3xl md:text-4xl pb-4">Transform your brand</h1>
         <p className="font-barlow font-thin text-sm tracking-wide leading-relaxed text-grayishblue">We are a full-service creative agency specializing in helping brands grow fast.Engage your clients through compelling visuals that do most of the marketing for you.</p>
         <div className="z-40 text-darkdesaturatedblue relative -mb-5 mt-8 uppercase font-fraunces text-xl ">Learn More</div>
           <div className=" z-0 relative opacity-50 h-2 rounded-full inline-block w-36 bg-yellow "></div>
       </div>
     </div>
     <div className="w-full">
       <img src={transform} alt="egg pic" className="w-full object-cover"/>
     </div>
   </section>
   <section className="flex flex-col md:flex-row-reverse justify-between  items-center">
     <div className="w-full">
       <div className="text-center md:text-left max-w-md mx-4 my-20 sm:my-32 md:mx-auto h-auto">
         <h1 className="font-fraunces text-darkdesaturatedblue text-3xl md:text-4xl pb-4">Stand out to the right audience</h1>
         <p className="font-barlow font-thin text-sm tracking-wide leading-relaxed text-grayishblue">We are a full-service creative agency specializing in helping brands grow fast.Engage your clients through compelling visuals that do most of the marketing for you.</p>
         <div className="z-40 relative  text-darkdesaturatedblue -mb-5 mt-8 uppercase font-fraunces text-xl ">Learn More</div>
           <div className=" z-0 relative opacity-50 h-2 rounded-full inline-block w-36 bg-softred "></div>
       </div>
     </div>
     <div className="w-full">
       <img src={stand} alt="egg pic" className="w-full object-cover"/>
     </div>
   </section>
   <section className="flex flex-col md:flex-row justify-between  items-center">
     <div className="w-full relative">
     <img  src={graphic}  alt="graphic" className="graphic-image w-full object-cover"/>
     <div className="absolute bottom-0 text-desaturatedcyan max-w-md text-center md:my-10 mx-2 md:mx-32 h-auto">
         <h1 className="font-fraunces text-2xl">Graphic Design</h1>
         <p className="font-barlow text-sm leading-relaxed pt-4 pb-8">Great design makes you memorable.We deliver artwork that underscores your brand message and capture potential client's attention.</p>
        </div>
     </div>
     <div className="w-full relative">
       <img src={photography}  alt="orange" className="photography-image w-full object-cover"/>
       <div className="absolute bottom-0 text-desaturatedcyan max-w-md text-center  md:my-10 mx-2 md:mx-32 h-auto">
         <h1 className="font-fraunces text-2xl">Photography</h1>
         <p className="font-barlow text-sm leading-relaxed pt-4 pb-8">Increase your credibly by getting the most stunning,high-quality photos that improve your business image.</p>
        </div>
     </div>
   </section>
    <section className="py-10">
     <h3 className="my-12 uppercase tracking-widest text-md font-semibold text-darkgrayishblue font-fraunces text-center">client testimonials</h3>
     <div className="flex flex-col md:flex-row items-center justify-evenly mx-auto my-12 w-full md:max-w-5xl space-x-2">
       <div className="flex flex-col p-8  justify-center items-center text-center space-y-6">
         <img src={emily} alt="Emily" className="rounded-full w-12"/>
         <p className="text-grayishblue text-sm font-barlow">We put our trust in Sunnyside and they delivered.Making sure our needs were met and deadlines were always hit.</p>
         <div>
           <h3 className="font-fraunces text-lg text-darkdesaturatedblue">Emily R.</h3>
           <p className="text-grayishblue font-barlow text-sm opacity-60">Marketing Director</p>
         </div>
       </div>
       <div className="flex flex-col p-8 justify-center items-center text-center space-y-6">
         <img src={thomas} alt="Thomas" className="rounded-full w-12"/>
         <p className="text-grayishblue text-sm font-barlow">Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.</p>
          <div>
            <h3 className="font-fraunces text-lg text-darkdesaturatedblue">Thomas S.</h3>
            <p className="text-grayishblue font-barlow text-sm  opacity-60">Chief Operating Officer</p>
          </div>
       </div>
       <div className="flex flex-col p-8 justify-center items-center text-center space-y-6">
         <img src={jennie} alt="Jennie" className="rounded-full w-12"/>
         <p className="text-grayishblue text-sm font-barlow">Incredible end result! Our sales increased over 400% when we worked with Sunnyside.Highly recommended!</p>
         <div>
           <h3 className="font-fraunces text-lg text-darkdesaturatedblue">Jennie F.</h3>
           <p className="text-grayishblue font-barlow text-sm opacity-60">Business Owner</p>
         </div>
       </div>
     </div>
   </section>
   <section className="grid grid-cols-2 sm:grid-cols-4 w-full">
     <img src={milkbottles} alt="Milk bottles"/>
     <img src={orange} alt="Orange"/>
     <img src={cone} alt="Cone"/>
     <img src={sugar} alt="Sugar cubes"/>
   </section>
   <footer className="bg-darkmoderatecyan w-full py-12 flex flex-col justify-center items-center w-full text-desaturatedcyan space-y-12">
     <h1 className="text-4xl text-desaturatedcyan font-extrabold font-fraunces tracking-widest">sunnyside</h1>
     <div className="flex flex-row justify-center items-center space-x-12 text-md font-semibold">
       <p>About</p>
       <p>Services</p>
       <p>Projects</p>
     </div>
     <div className="flex flex-row space-x-6 text-desaturatedcyan">
       <img src={facebook} alt="Facebook"/>
       <img src={instagram} alt="Instagram"/>
       <img src={pinterest} alt="Pinterest"/>
       <img src={twitter} alt="Twitter"/>
     </div>
   </footer>
    </div>
  );
}
 
export default App;
/*  <header>
      <Navbar/>
      <img className="w-screen h-screen object-cover" src={header} alt="sunnyside image"/>
      </header>
      <section className="flex flex-col md:flex-row">
        <div className="w-full md:w-6/12 h-auto p-10 text-center md:text-left md:my-10 md:mt-32 ">
          <h1 className="text-3xl font-fraunces  text-black m-2">Transform your brand</h1>
          <p className="text-darkgrayblue text-sm font-barlow m-2 ">
            We are a full-service creative agency specializing in helping brands grow fast.Engage your clients through compelling visuals that do most of the marketing for you:
          </p>
          <h3 className=" font-fraunces text-lg text-black m-2 z-40">Learn more</h3>
          <div className="border-4 rounded-full w-28 ml-1 -mt-5 border-yellow z-0"></div>

        </div>
        <div className="w-full md:w-6/12 h-auto">
          <img src={transform} className="w-full h-full" alt="dfc"/>
        </div>
      </section>
      <section className="flex flex-col  md:flex-row-reverse">
        <div className="w-full md:w-6/12 h-auto p-10 text-center md:text-left md:my-10 md:mt-32 ">
          <h1 className="text-3xl font-fraunces  text-black m-2">Stand out to the right audience</h1>
          <p className="text-darkgrayblue text-sm font-barlow m-2 ">
            Using a collaborative formula of designers,researchers,photographers,videographers and copywriters.We'll build and extend your brand in digital places.
          </p>
          <h3 className=" font-fraunces text-lg text-black m-2 z-40">Learn more</h3>
          <div className="border-4 rounded-full w-28 ml-1 -mt-5 border-softred z-0"></div>

        </div>
        <div className="w-full md:w-6/12 h-auto">
          <img src={stand} className="w-full h-full" alt="dfc"/>
        </div>
      </section>
      <section className="flex flex-col md:flex-row">
        <div className="relative w-screen md:w-6/12 ">
          <img src={graphic} className="w-full" alt="cdfss"/>
          <div className="absolute bottom-5 text-center ">
            <h1 className="text-xl font-fraunces text-darkcyan ">Graphic Design</h1>
            <p className="text-md font-barlow text-moderatecyan ">Great design makes you memorable.We deliver artwork that underscores your brand message and captures potential clients attention.</p>
          </div>
        </div>
        <div className="relative w-screen md:w-6/12 ">
        <img src={photography} className="w-full" alt="cdfss"/>
        <div className="absolute bottom-5 text-center">
          <h1 className="text-xl font-fraunces text-darkcyan ">Photography</h1>
          <p className="text-md font-barlow text-moderatecyan ">Increase your credibly by getting the most stunning,high-quality images that improve your business image.</p>
        </div>
        </div>

      </section>*/