import Image from "next/image"
const Footer = () => {
  return (
    <>
    <div>
      <hr className="w-[80%] m-auto border-[gray] "/>
      <div className="flex items-center content-center flex-col relative bottom-8">
        <Image src="/author.jpg" className="rounded-[50%] -z-0"
        width={70}
        height={100} 
        />

        <div className="flex flex-col items-center">
          <strong>Taras Migulko</strong>
          <p>Email me hey@migulko.cz</p>
          <button className="rounded-3xl bg-black text-white px-3">Work with me</button>
        </div>
      </div>
    </div>

    <div className="flex justify-center items-center bg-black text-white mt-8">
      <p className="font-sans italic text-[25px] tracking-tighter mr-3">Dribbble&nbsp;&nbsp;</p>
      <ol className="flex gap-4">
          <li>For Designers</li>
          <li>Hire Talent</li>
          <li>Inspiration</li>
          <li>Advertising</li>
          <li>Blog</li>
          <li>About</li>
          <li>Careers</li>
          <li>Support</li>
        </ol>
    </div>
    </>
  )
}

export default Footer