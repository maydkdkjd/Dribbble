const Header = () => {
  return (
    <div className="flex justify-between px-[50px] mt-5 mb-11 items-center">
        <div className="flex items-center">
            <p className="text-black font-sans italic text-[25px] tracking-tighter mr-3">Dribbble&nbsp;&nbsp;</p>
        <ol className="flex gap-7">
            <li>Find Talent</li>
            <li>Inspiration</li>
            <li>Learn Design</li>
            <li>Jobs</li>
            <li>Go Pro</li>
        </ol>
        </div>
        <div className="flex gap-4 items-center">
            <a>login</a>
            <a className="cursor-pointer bg-black rounded-3xl text-white px-5 py-2">Sign up</a>
        </div>
    </div>
  )
}

export default Header