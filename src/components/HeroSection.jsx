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
      <div className=''>
        <p className='text-whitestone text-xl mx-10 text-center'>
          Join Minecraft servers with your phone to chat, play & afk while using your phone to do what you want!</p>
      </div>
      { /* button */ }
      <button className='text-whitestone mx-auto flex border-redstone border-4 p-1 mt-3 rounded-lg hover:bg-red-700'>
        APPLY FOR BETA</button>
    </>
  )
}