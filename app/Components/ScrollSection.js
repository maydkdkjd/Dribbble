import {useEffect, useRef} from 'react'
import { gsap } from "gsap/gsap-core"
import { ScrollTrigger } from "gsap/all"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faBookmark,
  faComment,
  faUpload
} from "@fortawesome/free-solid-svg-icons";

const ScrollSection = () => {
    const sectionRef = useRef(null)
    const triggerRef = useRef(null)

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        const pin = gsap.fromTo(sectionRef.current, {
            translateX : 0
        }, {
            translateX : "-3000vw",
            ease : "none",
            duration : 1,
            scrollTrigger : {
                trigger : triggerRef.current,
                start : "Top Top",
                end : "2000 top",
                scrub : 0.6,
                pin : true
            }
    })

    return () => {
        pin.kill()
    }

}, [])

  return (
        <div className="flex items-center content-center flex-col mt-[80] relative">
            <div className="flex justify-around items-center content-center w-[90%] my-10">
              <div className="flex">
                  <Image src="/author.jpg" height = {20} width={45} className="rounded-[50%]"/>&nbsp;
                  <span className="text-b">Ahead app redesign concept <br/> Taras Migulko follow </span>
              </div>
              <div>
                <button className="rounded-3xl bg-black text-white py-2 px-3">Work with me</button>
              </div>
            </div>
            
            <video width="75%" loop autoPlay muted>
                <source src="https://cdn.dribbble.com/userupload/3938332/file/large-764ed959003779807e6dff430ab6ecda.mp4"></source>
            </video>
          
    
            <div className="py-4 text-[20px] w-[60%] my-8">
                <p className="mb-8">Hey all, </p>
                <p className="mb-8">I have decided to redesign and animation for the ahead app. Please review and happy 
                to read your feedback!</p>
                <p className="mb-8">Design-Figma<br/>
                Illustrations-Adobe Illustrator<br/>
                Animation-Adobe After Effects
                </p>
                <p className="mb-8">***********<br/>
                I am open to new projects! hey@migulko.cz<br/>
                ***********<br/> LinkedIN | Instagram | U18
                </p>
            </div>
    
            <div className="absolute right-[50px] top-10 flex flex-col gap-6">
              <Image src="/author.jpg" height = {20} width={45} className="rounded-[50%]"/>
              <FontAwesomeIcon icon= {faHeart}/>
                <FontAwesomeIcon icon = {faBookmark} height={20} width={45}/>
                <FontAwesomeIcon icon = {faComment} height={20} width={45}/>
                <FontAwesomeIcon icon = {faUpload} height={20} width={45}/>
                {/* <FontAwesomeIcon icon = {faCircleStop}/> */}
            </div>
    
            <Image src="/original.jpg" className="mb-20"
            width={1100}
            height={350}/>
    
            
        </div>
      )
  }
export default ScrollSection