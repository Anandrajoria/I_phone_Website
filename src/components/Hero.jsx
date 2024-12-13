import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import {heroVideo,smallHeroVideo} from '../utils'
import { useState } from 'react';
import { useEffect } from 'react';

function Hero() {
  const [videoSrc, setvideoSrc] = useState(window.innerWidth<760?smallHeroVideo:heroVideo)

  const handleVideoSrcSet=()=>{
    if(window.innerWidth<760){
      setvideoSrc(smallHeroVideo)
    }else{
      setvideoSrc(heroVideo)
    }
  }

  useEffect(()=>{
    window.addEventListener('resize',handleVideoSrcSet)
    return ()=>{
      window.removeEventListener('resize',handleVideoSrcSet)
    }
  },[])

  useGSAP(()=>{
    gsap.to('#hero',{
      opacity:1,
      delay:2
    })
    gsap.to('#cta' ,{
      opacity:1,
      y:-50,
      delay:2.4
    })
  },[])
  return <>
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id='hero' className="hero-title">iphone 15 pro</p>
        <div className='md:w-10/12 w-9/12'>
            <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc}>
              <source src={videoSrc} type='video/mp4'/>
            </video>
        </div>
      </div>

      <div id='cta' className='flex flex-col items-center opactiy-0 translate-y-20'>
          <a href="#higlights" className='btn'>Buy</a>
          <p className='font-normal text-xl'>from $199/months or $999</p>
      </div>
    </section>
  </>;
}

export default Hero;
