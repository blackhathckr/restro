import { useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { TrendingUp, Flame, Clock, Star, Heart, ArrowRight, ChevronDown } from "lucide-react";
import specialbiryani from "@/assets/specialbiryani.jpg";
import andhrachickencurry from "@/assets/andhrachickencurry.jpg";
import chickenfriedrice from "@/assets//chickenfriedrice.jpg";
import paradisemuttonbiryani from "@/assets/paradisemuttonbiryani.jpg";
import butterchicken from "@/assets/butterchicken.jpeg";

const Featured = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                        Hungry?
                        <br />
                        We've got you covered
                    </h1>
                    <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                        Order food from the best restaurants & home chefs in your city
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {[
                        { name: 'All', icon: <TrendingUp className="h-4 w-4" /> },
                        { name: 'What\'s New', icon: <Flame className="h-4 w-4" /> },
                        { name: 'Express', icon: <Clock className="h-4 w-4" /> }
                    ].map((category) => (
                        <Button
                            key={category.name}
                            variant={activeCategory === category.name ? "default" : "outline"}
                            className={`
                rounded-full px-6 py-6 transition-all duration-300 flex items-center gap-2
                ${activeCategory === category.name
                                    ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/20'
                                    : 'border-2 border-orange-200 text-gray-700 hover:bg-orange-50'
                                }
              `}
                            onClick={() => setActiveCategory(category.name)}
                        >
                            {category.icon}
                            {category.name}
                        </Button>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <Card className="relative group overflow-hidden rounded-3xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/80 to-orange-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                        <img
                            src={specialbiryani}
                            alt="Meghana Special Biryani"
                            className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                            <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="bg-white text-orange-500 px-3 py-1 rounded-full text-sm font-medium">
                                        Must Try
                                    </span>
                                    <span className="bg-green-500 text-black px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                                        <Star className="h-4 w-4" /> 4.8
                                    </span>
                                </div>
                                <h3 className="text-3xl font-bold text-black mb-2"> Special Biryani</h3>
                                <p className="text-black mb-4 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                                    Signature biryani cooked with secret spices and tender meat. A legendary taste of Bangalore
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="text-black">
                                        <span className="text-2xl font-bold">₹369</span>
                                        <span className="text-sm line-through ml-2 text-black">₹459</span>
                                    </div>
                                    <Button className="bg-white text-orange-500 hover:bg-orange-50">
                                        Order Now <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            {
                                name: "Andhra Chicken Curry",
                                price: "₹320",
                                rating: "4.6",
                                time: "35",
                                image: andhrachickencurry,
                                discount: "₹125 OFF"
                            },
                            {
                                name: "Chicken Fried Rice",
                                price: "₹290",
                                rating: "4.7",
                                time: "20",
                                image: chickenfriedrice,
                                bestSeller: true
                            },
                            {
                                name: "Paradise Mutton Biryani",
                                price: "₹420",
                                rating: "4.5",
                                time: "40",
                                image: paradisemuttonbiryani,
                                premium: true
                            },
                            {
                                name: "Butter chicken",
                                price: "₹240",
                                rating: "4.4",
                                time: "45",
                                image: butterchicken,
                                new: true
                            }
                        ].map((dish, index) => (
                            <Card key={index} className="group relative overflow-hidden rounded-2xl border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="relative h-48">
                                    <img
                                        src={dish.image}
                                        alt={dish.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-3 left-3 flex gap-2">
                                        {dish.discount && (
                                            <span className="bg-orange-500 text-white px-2 py-1 rounded-lg text-xs font-medium">
                                                {dish.discount}
                                            </span>
                                        )}
                                        {dish.bestSeller && (
                                            <span className="bg-yellow-500 text-white px-2 py-1 rounded-lg text-xs font-medium">
                                                Bestseller
                                            </span>
                                        )}
                                    </div>
                                    <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Heart className="h-4 w-4 text-orange-500" />
                                    </button>
                                </div>
                                <div className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-gray-800">{dish.name}</h3>
                                        <span className="flex items-center gap-1 bg-green-500 text-white px-2 py-1 rounded-xl text-xs">
                                            <Star className="h-3 w-3" /> {dish.rating}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2 text-gray-500">
                                            <Clock className="h-4 w-4" />
                                            <span className="text-sm">{dish.time} mins</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="font-bold text-gray-800">{dish.price}</span>
                                            <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl">
                                                ADD
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className="text-center">
                    <Button
                        variant="outline"
                        className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-6 rounded-full font-medium inline-flex items-center gap-2 group"
                    >
                        See More
                        <ChevronDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Featured;