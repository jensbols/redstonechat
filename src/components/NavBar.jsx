import { useState } from "react"

export default function NavBar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <div className="lg:max-w-7xl lg:mx-auto flex justify-between">
        {/* Left side */}
        <div className="p-1 m-2">
          <p className="text-redstone text-3xl font-semibold">RedStoneChat</p>
        </div>
        {/* Right side */}
        <div className="hidden md:flex text-whitestone items-center mr-5 space-x-6">
          <a href="#" className="">Apply for beta</a>
          <a href="#" className="">Contact</a>

        </div>

        <div className="md:hidden flex items-center m-2">
          {/* right side */}
          <button onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-redstone mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {showMobileMenu ?
        <div className="">
          <a href="#" className="block py-2 px-4 text-base hover:bg-redstone text-whitestone">Apply For Beta</a>
          <a href="#" className="block py-2 px-4 text-base hover:bg-redstone text-whitestone">Contact</a>
        </div> : null}
    </>
  )
}