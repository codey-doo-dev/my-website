

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <h1 className="text-xl font-bold">My Website</h1>
   
    <div>
    <ul>
      <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Home</li>
      <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">About</li>
      <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Contact</li>
    </ul>
   </div>
    </nav>
  )
}

export default Navbar
