export default function NavBar() {
  return (
    <>
      <div className="flex justify-between">
        {/* Left side */}
        <div className="p-1 m-2 bg-redstone text-whitestone">
          <p>LOGO</p>
        </div>

        <div className="flex items-center m-2">
          {/* right side */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-redstone " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>
    </>
  )
}