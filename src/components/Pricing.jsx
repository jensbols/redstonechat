export default function Pricing() {
  const CheckorNoIcon = ({ bool }) => {

    if (bool === 'true') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lg:h-9 lg:w-9 text-greenstone mx-auto my-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      );
    };
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lg:h-9 lg:w-9 text-redstone mx-auto my-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    )
  };

  return (
    <>
    <h2 className="text-whitestone text-center text-3xl mt-10 mb-3 md:text-4xl lg:text-5xl lg:font-semibold lg:mb-14">PRICING</h2>
      <div className="grid grid-cols-4 mx-3 pb-10 md:mx-16 md:text-lg lg:text-xl lg:max-w-5xl lg:mx-auto">
        { /* Perks */}
        <div className="text-whitestone col-span-2 ml-3 md:space-y-4 lg:space-y-5 lg:text-2xl">
          <p className="text-blackstone pt-3">+</p>
          <p className="my-2 font-extralight">No Ads</p>
          <p className="my-2 font-extralight">Unlimited Servers</p>
          <p className="my-2 font-extralight">Xanders Big Dick</p>
          <p className="my-2 font-extralight">Big boi sander</p>
          <p className="text-whitestone font-semibold lg:pt-5">Price</p>
          <p className="text-blackstone">+</p>
        </div>
        { /* Free */}
        <div className="text-center md:space-y-5">
          <p className="text-whitestone pt-3 lg:text-3xl">FREE</p>
          <CheckorNoIcon bool={'false'} />
          <CheckorNoIcon bool={'false'} />
          <CheckorNoIcon bool={'false'} />
          <CheckorNoIcon bool={'false'} />
          <p className="text-whitestone font-light lg:text-2xl lg:font-semibold">0$</p>
          <p className="text-blackstone">+</p>
        </div>
        { /* Premium */}
        <div className="text-center bg-redstone rounded-lg md:space-y-5 md:pb-5 md:rounded-2xl">
          <p className="text-whitestone pt-3 lg:text-3xl">PREMIUM</p>
          <CheckorNoIcon bool={'true'} />
          <CheckorNoIcon bool={'true'} />
          <CheckorNoIcon bool={'true'} />
          <CheckorNoIcon bool={'true'} />
          <p className="text-whitestone font-light mb-3 lg:text-2xl lg:font-semibold">2$</p>
          <button className="bg-greenstone text-whitestone rounded-lg mb-3 p-1.5 font-semibold">BUY NOW</button>
        </div>
      </div>
    </>
  )
}