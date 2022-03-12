import DiscordLogo from '../images/Discord.svg'
export default function Footer() {
  return (
    <>
      <div>
        <h2 className="text-whitestone text-3xl text-center mb-4 font-bold">LOGO</h2>
        <p className="text-whitestone mx-10 text-center mb-4 text-lg">Join our discord server below for help and questions</p>
        <img className='mx-auto pb-2' src={DiscordLogo} alt="discord link" />
        <div className="bg-redstone mt-2">
          <p className="text-whitestone text-center">Copyright RedStoneChat. All Rights Reserved <br></br>built by Jens Bols</p>
        </div>
      </div>
    </>
  )
}