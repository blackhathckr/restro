import { Button } from "../components/ui/button";

const Navbar = () =>
{
    return (
        <nav className="absolute top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md">
          <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
            <h1 className="text-xl md:text-3xl font-bold text-orange-600">Vasu Gadagi Restaurant</h1>
            <div className="hidden md:flex space-x-4 lg:space-x-8">
              <a href="#menu" className="text-gray-800 hover:text-orange-500 font-medium">Menu</a>
              <a href="#about" className="text-gray-800 hover:text-orange-500 font-medium">About</a>
              <a href="#contact" className="text-gray-800 hover:text-orange-500 font-medium">Contact</a>
              <a href="/terms" className="text-gray-800 hover:text-orange-500 font-medium">Terms and Policies</a>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 rounded-xl px-4 sm:px-6 text-sm sm:text-base">Order Now</Button>
          </div>
        </nav>
    )
}

export default Navbar;