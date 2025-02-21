import { Card, CardContent } from "../components/ui/card";
import { Sparkles, Leaf, Rocket, Trophy, ArrowRight } from "lucide-react";

const WhyChooseUs = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-orange-50" />
            <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-5" />
            <div className="container mx-auto px-6 relative">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
                        <Sparkles className="w-5 h-5 text-orange-500" />
                        <span className="text-orange-600 font-medium">Why Choose Us</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Experience the
                        <span className="text-orange-500"> Difference</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Quality ingredients, swift delivery, and great value – the perfect recipe for your satisfaction.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Fresh Ingredients",
                            desc: "Experience the vibrant flavors of quality ingredients in every dish we prepare. Our commitment to freshness makes every bite exceptional.",
                            icon: <Leaf className="w-8 h-8 text-white" />,
                            highlight: "Premium Quality Ingredients"
                        },
                        {
                            title: "Express Delivery",
                            desc: "Your favorite meals delivered hot and fresh within 30 minutes. Track your order in real-time as it makes its way to you.",
                            icon: <Rocket className="w-8 h-8 text-white" />,
                            highlight: "30 Min Delivery Guaranteed"
                        },
                        {
                            title: "Best Value",
                            desc: "Enjoy restaurant-quality meals at competitive prices. Regular promotions and special offers to give you the best dining experience.",
                            icon: <Trophy className="w-8 h-8 text-white" />,
                            highlight: "Unbeatable Prices & Quality"
                        }
                    ].map((feature, index) => (
                        <Card key={index} className="group relative bg-gradient-to-br from-white to-orange-50 hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-2xl border-0">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <CardContent className="p-8 relative">
                                <div className="absolute right-4 top-4 text-8xl font-bold text-orange-100 transition-all duration-500 group-hover:scale-110">
                                    {index + 1}
                                </div>
                                <div className="mb-6 relative">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center shadow-lg transform -rotate-6 group-hover:rotate-0 transition-all duration-500">
                                        {feature.icon}
                                    </div>
                                    <div className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                                        <ArrowRight className="w-4 h-4 text-orange-500" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange-500 transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {feature.desc}
                                </p>
                                <div className="flex items-center gap-4 text-sm text-orange-500 font-medium">
                                    {feature.highlight}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs;