import redstone from '../images/redstone.png'
export default function VideoSection() {
  return (
    <>
    <div className='lg:mt-12 lg:max-w-5xl lg:mx-auto'>
        <h2 className="text-whitestone text-3xl text-center mt-6 md:text-4xl lg:text-5xl">How To Join A Server</h2>
        <div className="border-whitestone border-2 md:h-64 lg:h-96 h-44 my-3 mx-3 md:mx-24 relative lg:max-w-7xl lg:mx-auto lg:mt-5">
          <p className="text-whitestone flex justify-center mt-16">Youtube Video</p>
          {/* images tablet */}
          <img src={redstone} alt="redstone" className="lg:hidden hidden md:flex absolute opacity-40 -rotate-45 -right-44 -top-10" />
          <img src={redstone} alt="redstone" className="lg:hidden hidden md:flex absolute opacity-40 rotate-45 -left-40 -bottom-40" />
          {/* images mobile */}
          <img src={redstone} alt="redstone" className="md:hidden absolute opacity-40 -rotate-45 -right-20 -top-1" />
          <img src={redstone} alt="redstone" className="md:hidden absolute opacity-40 rotate-45 -left-20" />
        </div>
    </div>
    </>
  )
}