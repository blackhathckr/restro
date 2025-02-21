import { Star, ShieldCheck, Zap, Smartphone, Download, ArrowRight} from "lucide-react";
import restroapp from "@/assets/restroapp.jpeg";

const Product = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-orange-50" />
            <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-5" />

            <div className="container mx-auto px-6 relative">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full">
                            <Star className="w-5 h-5 text-orange-500" />
                            <span className="text-orange-600 font-medium">4.8 Rating on Play Store</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                            Experience Better
                            <span className="text-orange-500"> On Mobile</span>
                        </h2>

                        <p className="text-xl text-gray-600">
                            Join thousands of food lovers who've already discovered a better way to order their favorite meals. Download our app today!
                        </p>

                        <div className="space-y-4">
                            {[
                                { icon: <ShieldCheck className="w-5 h-5" />, text: "Safe & Secure Payments" },
                                { icon: <Zap className="w-5 h-5" />, text: "Faster Ordering Process" },
                                { icon: <Smartphone className="w-5 h-5" />, text: "Real-time Order Updates" }
                            ].map((feature, index) => (
                                <div key={index} className="flex items-center gap-3 text-gray-700">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center text-white transform -rotate-6 group-hover:rotate-0 transition-all duration-500">
                                        {feature.icon}
                                    </div>
                                    <span className="font-medium">{feature.text}</span>
                                </div>
                            ))}
                        </div>
                        <a
                            href="#download"
                            className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-500"
                        >
                            <Download className="w-6 h-6" />
                            <span className="font-semibold">Download from Play Store</span>
                            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    <div className="relative mx-auto max-w-md px-4 sm:px-0">
                        <div className="relative z-20 transform transition-all duration-700 hover:scale-105 hover:rotate-1">
                            <div className="relative">
                                <img
                                    src={restroapp}
                                    alt="App Screenshot"
                                    className="mx-auto h-[300px] w-auto rounded-3xl shadow-2xl sm:h-[400px] md:h-[500px] lg:h-[600px]"
                                />
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 to-transparent opacity-50" />
                                <div className="absolute -left-4 top-8 hidden scale-90 sm:block sm:-left-6 sm:scale-100 md:-left-8 lg:-left-12">
                                    <div className="group transform transition-all duration-500 hover:translate-x-1 hover:translate-y-1">
                                        <div className="rounded-2xl bg-white p-3 shadow-lg transition-all duration-500 group-hover:shadow-2xl sm:p-4">
                                            <div className="flex items-center gap-2">
                                                <div className="rounded-full bg-orange-100 p-2">
                                                    <Download className="h-4 w-4 text-orange-500" />
                                                </div>
                                                <div className="space-y-1">
                                                    <p className="text-sm font-medium text-gray-900">50K+</p>
                                                    <p className="text-xs text-gray-500">Happy Users</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -right-4 bottom-8 hidden scale-90 sm:block sm:-right-6 sm:scale-100 md:-right-8 lg:-right-12">
                                    <div className="group transform transition-all duration-500 hover:translate-x-1 hover:translate-y-1">
                                        <div className="rounded-2xl bg-white p-3 shadow-lg transition-all duration-500 group-hover:shadow-2xl sm:p-4">
                                            <div className="flex items-center gap-2">
                                                <div className="rounded-full bg-orange-100 p-2">
                                                    <Star className="h-4 w-4 text-orange-500" />
                                                </div>
                                                <div className="space-y-1">
                                                    <p className="text-sm font-medium text-gray-900">4.8</p>
                                                    <p className="text-xs text-gray-500">Star Rating</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-[10%] right-0 z-10 w-full rounded-[2.5rem] bg-gradient-to-br from-orange-500/10 to-orange-300/10 transition-transform duration-700 group-hover:scale-105 -rotate-6" />
                        <div className="absolute inset-y-[15%] right-4 z-0 w-full rounded-[2.5rem] bg-gradient-to-br from-orange-400/5 to-orange-200/5 transition-transform duration-700 group-hover:scale-105 rotate-6" />
                        <div className="absolute -left-2 top-1/4 h-2 w-2 rounded-full bg-orange-400/30" />
                        <div className="absolute -right-2 bottom-1/4 h-2 w-2 rounded-full bg-orange-400/30" />
                        <div className="absolute left-1/4 top-1/3 h-3 w-3 rounded-full bg-orange-300/20" />
                        <div className="absolute right-1/4 bottom-1/3 h-3 w-3 rounded-full bg-orange-300/20" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product;