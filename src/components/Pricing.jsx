export default function Pricing() {
  const CheckorNoIcon = ({ bool }) => {

    if (bool === 'true') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-greenstone mx-auto my-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      );
    };
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-redstone mx-auto my-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    )
  };

  return (
    <>
    <h2 className="text-whitestone text-center text-3xl mt-10 mb-3">Pricing</h2>
      <div className="grid grid-cols-4 mx-3 pb-10">
        { /* Perks */}
        <div className="text-whitestone col-span-2 ml-3">
          <p className="text-blackstone pt-3">+</p>
          <p className="my-2 font-extralight">No Ads</p>
          <p className="my-2 font-extralight">Unlimited Servers</p>
          <p className="my-2 font-extralight">No Ads</p>
          <p className="my-2 font-extralight">No Ads</p>
          <p className="text-whitestone font-semibold">Price</p>
          <p className="text-blackstone">+</p>
        </div>
        { /* Free */}
        <div className="text-center">
          <p className="text-whitestone pt-3">FREE</p>
          <CheckorNoIcon bool={'false'} />
          <CheckorNoIcon bool={'false'} />
          <CheckorNoIcon bool={'false'} />
          <CheckorNoIcon bool={'false'} />
          <p className="text-whitestone font-light">0$</p>
          <p className="text-blackstone">+</p>
        </div>
        { /* Premium */}
        <div className="text-center bg-redstone rounded-lg">
          <p className="text-whitestone pt-3">PREMIUM</p>
          <CheckorNoIcon bool={'true'} />
          <CheckorNoIcon bool={'true'} />
          <CheckorNoIcon bool={'true'} />
          <CheckorNoIcon bool={'true'} />
          <p className="text-whitestone font-light mb-3">2$</p>
          <button className="bg-greenstone text-whitestone rounded-lg mb-3 p-1.5 font-semibold">BUY NOW</button>
          
        </div>
      </div>
    </>
  )
}