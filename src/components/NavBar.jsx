export default function NavBar() {
  return (
    <>
      <div className="flex justify-between">
        {/* Left side */}
        <div className="p-1 m-2">
          <p className="text-redstone text-3xl font-semibold">RedStoneChat</p>
        </div>

        <div className="flex items-center m-2">
          {/* right side */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-redstone mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>
    </>
  )
}