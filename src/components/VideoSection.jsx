import redstone from '../images/redstone.png'
export default function VideoSection() {
  return (
    <>
        <h2 className="text-whitestone text-3xl font-bold text-center mt-6">How to join a Server</h2>
        <div className="border-whitestone border-2 h-44 my-3 mx-3 relative">
          <p className="text-whitestone flex justify-center mt-16">Youtube Video</p>
          <img src={redstone} alt="redstone" className="absolute opacity-40 -rotate-45 -right-20 -top-1" />
          <img src={redstone} alt="redstone" className="absolute opacity-40 rotate-45 -left-20" />
        </div>
    </>
  )
}