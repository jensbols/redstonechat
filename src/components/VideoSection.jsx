import redstone from '../images/redstone.png'
export default function VideoSection() {
  return (
    <>
      <div className='lg:mt-12 lg:max-w-5xl lg:mx-auto'>
        <h2 className="text-whitestone text-3xl text-center mt-6 md:text-4xl lg:text-5xl font-semibold">TUTORIAL</h2>
        <div className="md:h-64 lg:h-96 h-44 my-3 mx-3 md:mx-24 relative lg:max-w-7xl lg:mx-auto lg:mt-5">
          <p className="text-whitestone flex justify-center mt-16"></p>
          {/* images desktop */}
          <img src={redstone} alt="redstone" className="hidden lg:flex absolute opacity-40 top-1 -left-60 -rotate-45" />
          <img src={redstone} alt="redstone" className="hidden lg:flex absolute opacity-40 top-1 -right-56 rotate-12" />
          <img src={redstone} alt="redstone" className="hidden lg:flex absolute opacity-40 top-72 -left-60 rotate-12" />
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