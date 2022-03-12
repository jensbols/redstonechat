import redstone from '../images/redstone.png'

export default function HeroSection() {
  return (
    <>
      <div className='flex'>
        { /* left text */}
        <div className="ml-10 mt-6 w-1/3 float-left">
          <p className="text-whitestone font-bold text-5xl">CHAT<br />AFK<br />PLAY</p>
        </div>
        { /* right image */}
        <div className='w-2/3 float-right -mt-3'>
          <img className='' src={redstone} alt="bs" />
        </div>
      </div>
      { /* text under */}
      <div className='relative'>
        <p className='text-whitestone text-xl mx-12 text-center font-light'>
          Join Minecraft servers with your phone to chat, play & afk while using your phone to do what you want!</p>
        {/* Background image */}
        <img src={redstone} alt="redstone" className="absolute opacity-40 top-1 -left-24 rotate-12" />
        <img src={redstone} alt="redstone" className="absolute opacity-40 top-1 -right-28 -rotate-12" />
      </div>

      { /* button */}
      <button className='relative text-whitestone mt-7 mx-auto flex bg-redstone border-redstone border-4 p-1 px-5 mt-3 rounded-lg hover:bg-red-700 mb-14'>
        APPLY FOR BETA
      </button>
    </>
  )
}