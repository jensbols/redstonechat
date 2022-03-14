import redstone from '../images/redstone.png'

export default function HeroSection() {
  return (
    <>
    <div className='relative lg:max-w-7xl lg:mx-auto lg:pb-40'>
      <div className='flex max-w-sm mx-auto md:max-w-lg lg:max-w-7xl md:mx-auto md:space-x-3'>
        { /* left text */}
        <div className="lg:w-2/3 ml-10 mt-6 w-1/3 md:w-1/2 float-left space-y-5 lg:pt-12 lg:ml-1">
          <p className="lg:hidden text-whitestone font-bold text-6xl mb-4 md:text-7xl md:mb-6">CHAT<br />AFK<br />PLAY</p>
          <p className="hidden lg:flex text-whitestone font-bold text-5xl md:text-7xl md:mb-6 pb-5 lg:text-8xl">CHAT. AFK. PLAY.</p>
          <p className='hidden lg:flex text-whitestone text-2xl max-w-md lg:max-w-lg text-left font-light ml-2 lg:pb-4 lg:text-3xl'>
          Join Minecraft servers with your phone to chat, play & afk while using your phone to do what you want!</p>
          <button className='lg:text-2xl ml-2 hidden lg:flex relative text-whitestone mx-auto float-left border-redstone border-4 p-1.5 px-5 mt-7 rounded-lg hover:bg-red-700 mb-14'>
        DOWNLOAD
      </button>
      <img src={redstone} alt="redstone" className="hidden lg:flex absolute opacity-40 top-1 -left-60 rotate-12" />
      <img src={redstone} alt="redstone" className="hidden lg:flex absolute opacity-40 top-1 -right-48 -rotate-12" />
      <img src={redstone} alt="redstone" className="hidden lg:flex absolute opacity-40 top-72 -left-80 -rotate-12" />
      <img src={redstone} alt="redstone" className="hidden lg:flex absolute opacity-40 top-48 right-96 -rotate-12" />
      <img src={redstone} alt="redstone" className="hidden lg:flex absolute opacity-40 top-68 left-80 rotate-12" />
      <img src={redstone} alt="redstone" className="hidden lg:flex absolute opacity-40 top-80 right-16 -rotate-12" />
        </div>
        { /* right image */}
        <div className='lg:w-1/3 w-2/3 float-right -mt-3 md:mt-0.5 lg:pt-10'>
          <img className='md:h-68 md:w-64' src={redstone} alt="bs" />
        </div>
      </div>
      { /* text under */}
      <div className='relative md:max-w-md max-w-sm mx-auto lg:float-left lg:pb-10'>
        <p className='lg:hidden text-whitestone text-xl mx-12 text-center font-light'>
          Join Minecraft servers with your phone to chat, play & afk while using your phone to do what you want!</p>
          <button className='hidden lg:hidden relative text-whitestone mx-auto bg-redstone border-redstone border-4 p-1 px-5 mt-7 rounded-lg hover:bg-red-700 mb-14'>
        APPLY FOR BETA
      </button>
        {/* Background image */}
        { /* tablet background images */ }
        <img src={redstone} alt="redstone" className="hidden md:flex absolute opacity-40 top-1 -left-60 rotate-45" />
        <img src={redstone} alt="redstone" className="hidden md:flex absolute opacity-40 top-1 -right-48 -rotate-12" />
        { /* mobile background images */ }
        <img src={redstone} alt="redstone" className="md:hidden absolute opacity-40 top-1 -left-24 rotate-12" />
        <img src={redstone} alt="redstone" className="md:hidden absolute opacity-40 top-1 -right-28 -rotate-12" />
      </div>

      { /* button */}
      <button className='lg:hidden text-whitestone mx-auto flex bg-redstone border-redstone border-4 p-1 px-5 mt-7 rounded-lg hover:bg-red-700 mb-14'>
        APPLY FOR BETA
      </button>
    </div>
    </>
  )
}