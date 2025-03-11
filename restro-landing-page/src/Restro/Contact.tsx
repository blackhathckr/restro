import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {Phone, Mail, MapPin, Instagram, Facebook, Twitter, Clock, ArrowRight} from "lucide-react";

const Contact = () =>
{
    return (
        <section className="bg-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-50 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-medium">Contact & Hours</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">Let's Stay Connected</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our culinary community for exclusive offers, seasonal specials, and gastronomic updates
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            <div className="space-y-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 space-y-6">
                  <div className="grid gap-6">
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-all duration-500">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-600">Call Us</p>
                        <p className="text-lg font-semibold">+91 9980287730</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-all duration-500">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-600">Email Us</p>
                        <p className="text-lg font-semibold">vasugadegihotel@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-all duration-500">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-600">Location</p>
                        <p className="text-lg font-semibold">Sharanabasaveshwar camp, Jangamarkalgudi, Gangawati, Koppal, Karnataka, India -583227</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t">
                    <p className="font-medium text-gray-600 mb-4">Follow Us</p>
                    <div className="flex gap-4">
                      <Button variant="outline" size="lg" className="border-orange-200 text-orange-500 hover:bg-orange-50 hover:scale-110 transition-transform duration-300 rounded-xl">
                        <Instagram className="h-5 w-5" />
                      </Button>
                      <Button variant="outline" size="lg" className="border-orange-200 text-orange-500 hover:bg-orange-50 hover:scale-110 transition-transform duration-300 rounded-xl">
                        <Facebook className="h-5 w-5" />
                      </Button>
                      <Button variant="outline" size="lg" className="border-orange-200 text-orange-500 hover:bg-orange-50 hover:scale-110 transition-transform duration-300 rounded-xl">
                        <Twitter className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-8 relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Opening Hours</h3>
                </div>

                <div className="space-y-6">
                  <div className="group/item hover:bg-orange-50 p-4 rounded-xl transition-colors duration-300">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-semibold text-gray-800">Monday - Friday</span>
                        <p className="text-gray-600">Serving fresh delights</p>
                      </div>
                      <span className="text-orange-500 font-medium">10:00 AM - 10:00 PM</span>
                    </div>
                  </div>

                  <div className="group/item hover:bg-orange-50 p-4 rounded-xl transition-colors duration-300">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-semibold text-gray-800">Saturday - Sunday</span>
                        <p className="text-gray-600">Weekend specials</p>
                      </div>
                      <span className="text-orange-500 font-medium">11:00 AM - 11:00 PM</span>
                    </div>
                  </div>
                  <div className="mt-6 bg-orange-50 p-4 rounded-xl">
                    <p className="text-orange-600 font-medium text-sm">
                      ✨ Happy Hours: 4 PM - 7 PM Daily
                    </p>
                  </div>
                </div>

                <Button className="w-full mt-8 bg-gradient-to-r from-orange-500 to-orange-400 text-white hover:shadow-lg group rounded-xl">
                  Reserve a Table
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
}

export default Contact;