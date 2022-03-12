import DiscordLogo from '../images/Discord.svg'
import redstone from '../images/redstone.png';
export default function Footer() {
  return (
    <>
      <div>
        <div className='relative'>
          <img src={redstone} alt='redstone' className='absolute opacity-40 -bottom-12 rotate-12 -left-24' />
          <img src={redstone} alt='redstone' className='absolute opacity-40  rotate-12 -right-36 -bottom-20' />
          <h2 className="text-whitestone text-3xl text-center mb-4">LOGO</h2>
        </div>
        <p className="text-whitestone mx-10 text-center mb-4 text-lg">Join our discord server below for help and questions</p>
        <img className='mx-auto pb-2' src={DiscordLogo} alt="discord link" />
        <div className="bg-redstone mt-2">
          <p className="text-whitestone text-center mx-1 font-semibold text-sm pt-1">Copyright © RedStoneChat 2022. All Rights Reserved <br></br>built by Jens Bols</p>
        </div>
      </div>
    </>
  )
}