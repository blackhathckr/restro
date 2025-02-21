import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ChevronRight, Star, Clock } from "lucide-react";
import hero from "@/assets/hero.jpg"

const Hero = () => {
    return (
        <section className="min-h-screen relative overflow-hidden">


            <div className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="space-y-6 sm:space-y-8">
                        <div className="inline-block">
                            <span className="bg-orange-100 text-orange-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                                #1 Food Delivery
                            </span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight">
                            Savor the
                            <span className="text-orange-500"> Taste</span> of
                            <span className="text-orange-500"> Home</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600">
                            Experience culinary excellence delivered to your doorstep. Every bite tells a story of flavor and passion.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                            <Button className="bg-orange-500 rounded-xl hover:bg-orange-600 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto">
                                Start Order <ChevronRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
                            </Button>
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-4">
                                    {['https://tse2.mm.bing.net/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gHaHa&pid=Api&P=0&h=180',
                                        'https://tse3.mm.bing.net/th?id=OIP.tHoXCdncHBSqVXXwJ7FIPwHaE7&pid=Api&P=0&h=180',
                                        'https://tse3.mm.bing.net/th?id=OIP.P2ixwd8Oykw_Gaqv98RR2QHaE8&pid=Api&P=0&h=180'].map((src, i) => (
                                            <div key={i} className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                                                <img
                                                    src={src}
                                                    alt={`Image ${i + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ))}
                                </div>
                                <div>
                                    <div className="flex items-center">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <Star key={i} className="h-3 sm:h-4 w-3 sm:w-4 fill-orange-400 text-orange-400" />
                                        ))}
                                    </div>
                                    <p className="text-xs sm:text-sm text-gray-600">2k+ Happy Customers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-8 md:mt-0">
                        <div className="relative z-10">
                            <img
                                src={hero}
                                alt="Hero Dish"
                                className="rounded-3xl shadow-2xl object-cover h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full"
                            />
                        </div>
                        <Card className="absolute top-10 sm:top-20 -left-4 sm:-left-16 z-20 w-56 sm:w-64 bg-white/90 backdrop-blur rounded-xl">
                            <CardContent className="p-3 sm:p-4">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <Clock className="text-orange-500 h-5 sm:h-6 w-5 sm:w-6" />
                                    <div>
                                        <p className="font-semibold text-sm sm:text-base">Fast Delivery</p>
                                        <p className="text-xs sm:text-sm text-gray-600">30 min guaranteed</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="absolute bottom-10 sm:bottom-20 -right-4 sm:-right-16 z-20 w-56 sm:w-64 bg-white/90 backdrop-blur rounded-xl">
                            <CardContent className="p-3 sm:p-4">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="h-10 sm:h-12 w-10 sm:w-12 rounded-full bg-orange-100 flex items-center justify-center">
                                        <Star className="text-orange-500 h-5 sm:h-6 w-5 sm:w-6" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm sm:text-base">4.8/5 Rating</p>
                                        <p className="text-xs sm:text-sm text-gray-600">from 2k+ reviews</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;