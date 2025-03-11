import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold text-orange-500 mb-4">Vasu Gadagi Restaurant</h3>
                        <p className="text-gray-400">Delivering happiness, one meal at a time.</p>
                    </div>
                    {['Menu', 'About', 'Contact', 'Legal'].map((section) => (
                        <div key={section}>
                            <h4 className="font-semibold mb-4">{section}</h4>
                            <ul className="space-y-2 text-gray-400">
                                {[1, 2, 3].map((item) => (
                                    <li key={item} className="hover:text-orange-500 cursor-pointer">
                                        {section} Link {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>© {new Date().getFullYear()} VasuGadagiRestaurant. All rights reserved.</p>
            
<div className="footer-bottom">
  <Link to="/terms" className="text-orange-600 hover:underline">
    Terms & Conditions
  </Link>
</div>
                </div>
        

            </div>
        </footer>
    )
}

export default Footer;