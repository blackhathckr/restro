import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Check, ChevronRight, Truck, Shield, Clock, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsAndConditionsPage = () => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  
  return (
    <div className="min-h-screen bg-orange-50 text-gray-900 p-4 md:p-8">
      
      {/* Back to Home Button */}
      <div className="max-w-5xl mx-auto mb-4">
        <Link to="/">
          <Button variant="outline" className="text-orange-600 border-orange-600 hover:bg-orange-50">
            Back to Home
          </Button>
        </Link>
      </div>
      
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">Terms & Policies</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about using our food delivery service
        </p>
      </div>
      
      {/* Main Content */}
      <div className="max-w-5xl mx-auto">
        <Tabs defaultValue="terms" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="terms" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
              Terms & Conditions
            </TabsTrigger>
            <TabsTrigger value="refund" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
              Refund Policy
            </TabsTrigger>
            <TabsTrigger value="shipping" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
              Delivery Policy
            </TabsTrigger>
            <TabsTrigger value="privacy" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
              Privacy Policy
            </TabsTrigger>
          </TabsList>
          
          {/* Terms and Conditions Tab */}
          <TabsContent value="terms" className="space-y-4">
            <Card>
              <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <CardTitle className="text-xl md:text-2xl">Terms & Conditions</CardTitle>
                <CardDescription className="text-orange-100">Last Updated: March 11, 2025</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p>
                    Welcome to our Food Delivery App. By accessing or using our service, you agree to be bound by these Terms and Conditions.
                  </p>
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="account">
                      <AccordionTrigger className="text-lg font-medium">
                        1. Account Registration
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 space-y-2">
                        <p>You must create an account to use our services. You agree to provide accurate information and are responsible for maintaining the confidentiality of your account.</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>You must be at least 18 years old to create an account</li>
                          <li>You are responsible for all activities that occur under your account</li>
                          <li>You agree to notify us immediately of any unauthorized use of your account</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="service">
                      <AccordionTrigger className="text-lg font-medium">
                        2. Service Description
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 space-y-2">
                        <p>Our app provides a platform for users to browse restaurant menus, place food orders, and arrange for delivery.</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>We do not prepare food, we facilitate ordering and delivery</li>
                          <li>Menu items, prices, and availability are set by partner restaurants</li>
                          <li>Delivery times are estimates and may vary based on factors outside our control</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="payment">
                      <AccordionTrigger className="text-lg font-medium">
                        3. Payment Terms
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 space-y-2">
                        <p>By placing an order, you agree to pay the full amount specified including food costs, delivery fees, taxes, and any applicable service charges.</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Prices may change without notice</li>
                          <li>Payment processing is secure and encrypted</li>
                          <li>We accept major credit cards, digital wallets, and other payment methods specified in the app</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="limitations">
                      <AccordionTrigger className="text-lg font-medium">
                        4. Limitations of Liability
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 space-y-2">
                        <p>We strive to provide reliable service but cannot guarantee uninterrupted access to our platform. We are not liable for:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Food quality issues from partner restaurants</li>
                          <li>Delivery delays due to traffic, weather, or other unforeseen circumstances</li>
                          <li>Service interruptions due to technical issues beyond our control</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="termination">
                      <AccordionTrigger className="text-lg font-medium">
                        5. Termination
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        <p>We reserve the right to terminate or suspend your account at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row justify-between gap-4 bg-gray-50 p-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-2 text-orange-600" />
                  <p>Last revised: March 11, 2025</p>
                </div>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                  Print Terms
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          {/* Refund Policy Tab */}
          <TabsContent value="refund" className="space-y-4">
            <Card>
              <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <CardTitle className="text-xl md:text-2xl">Refund & Return Policy</CardTitle>
                <CardDescription className="text-orange-100">Our commitment to customer satisfaction</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-100 p-3 rounded-full mr-4">
                      <RefreshCw className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Easy Refund Process</h3>
                      <p className="text-gray-600">We aim to make the refund process as simple as possible</p>
                    </div>
                  </div>
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="eligible">
                      <AccordionTrigger className="text-lg font-medium">
                        Eligible Refund Scenarios
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 space-y-2">
                        <p>You may be eligible for a refund in the following situations:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Order not delivered within our guaranteed delivery time</li>
                          <li>Items missing from your order</li>
                          <li>Food quality issues (reported within 30 minutes of delivery)</li>
                          <li>Incorrect items delivered</li>
                          <li>Order cancellation before the restaurant begins preparing your food</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="process">
                      <AccordionTrigger className="text-lg font-medium">
                        Refund Process
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 space-y-2">
                        <p>To request a refund:</p>
                        <ol className="list-decimal pl-5 space-y-1">
                          <li>Go to "Order History" in the app</li>
                          <li>Select the order with issues</li>
                          <li>Tap "Report a Problem" and select the appropriate reason</li>
                          <li>Submit any requested evidence (photos if applicable)</li>
                          <li>Our customer service team will review your request within 24 hours</li>
                        </ol>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="timeline">
                      <AccordionTrigger className="text-lg font-medium">
                        Refund Timeline
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        <p>Once approved, refunds are processed within 3-5 business days. The actual time to see the funds in your account depends on your payment method:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Credit/Debit Cards: 2-7 business days</li>
                          <li>Digital Wallets: 1-3 business days</li>
                          <li>App Credits: Immediately available for future orders</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="non-refundable">
                      <AccordionTrigger className="text-lg font-medium">
                        Non-Refundable Situations
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        <p>Refunds may not be available in these cases:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Customer-initiated delays in receiving the order</li>
                          <li>Quality issues reported more than 30 minutes after delivery</li>
                          <li>Personal taste preferences that don't indicate quality issues</li>
                          <li>Delivery address errors provided by the customer</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 p-6">
                <div className="w-full flex flex-col gap-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 mr-2 text-green-600" />
                    <p>We aim to resolve all refund requests within 24 hours</p>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-500">For urgent refund assistance, please contact our customer service at <span className="text-orange-600 font-medium">support@fooddeliveryapp.com</span></p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
          
          {/* Shipping/Delivery Policy Tab */}
          <TabsContent value="shipping" className="space-y-4">
            <Card>
              <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <CardTitle className="text-xl md:text-2xl">Delivery Policy</CardTitle>
                <CardDescription className="text-orange-100">How we deliver your food fresh and on time</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-100 p-3 rounded-full mr-4">
                      <Truck className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Delivery Excellence</h3>
                      <p className="text-gray-600">Our commitment to timely and quality deliveries</p>
                    </div>
                  </div>
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="delivery-areas">
                      <AccordionTrigger className="text-lg font-medium">
                        Delivery Areas
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        <p>We deliver to most urban and suburban areas within our operating cities. Delivery availability is determined by:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Your delivery address</li>
                          <li>Restaurant location and delivery radius</li>
                          <li>Current delivery partner availability</li>
                        </ul>
                        <p className="mt-2">You can check if delivery is available to your location by entering your address in the app before placing an order.</p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="delivery-times">
                      <AccordionTrigger className="text-lg font-medium">
                        Delivery Times
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 space-y-2">
                        <p>Estimated delivery times are provided before you place your order and are based on:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Current restaurant preparation times</li>
                          <li>Distance between restaurant and delivery location</li>
                          <li>Traffic conditions</li>
                          <li>Weather conditions</li>
                          <li>Overall demand and delivery partner availability</li>
                        </ul>
                        <p>Standard delivery times range from 25-45 minutes. During peak hours, holidays, or adverse weather conditions, delivery times may be extended.</p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="delivery-fees">
                      <AccordionTrigger className="text-lg font-medium">
                        Delivery Fees
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        <p>Delivery fees are calculated based on:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Distance from restaurant to delivery location</li>
                          <li>Current demand and weather conditions</li>
                          <li>Order value (minimum order requirements may apply)</li>
                        </ul>
                        <p className="mt-2">Delivery fees are shown clearly before checkout. Subscription members may receive free or discounted delivery on eligible orders.</p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="tracking">
                      <AccordionTrigger className="text-lg font-medium">
                        Order Tracking
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        <p>Once your order is placed, you can track it in real-time through our app:</p>
                        <ol className="list-decimal pl-5 space-y-1">
                          <li>Order received by restaurant</li>
                          <li>Food preparation in progress</li>
                          <li>Delivery partner assigned</li>
                          <li>Food picked up by delivery partner</li>
                          <li>Delivery in progress with real-time map tracking</li>
                        </ol>
                        <p className="mt-2">You'll receive notifications at each step of the delivery process.</p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="late-deliveries">
                      <AccordionTrigger className="text-lg font-medium">
                        Late Deliveries
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        <p>For orders that exceed our estimated delivery time by more than 15 minutes, you may be eligible for:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Partial or full refund of delivery fees</li>
                          <li>Discount vouchers for future orders</li>
                          <li>App credits as compensation</li>
                        </ul>
                        <p className="mt-2">Exceptions apply during severe weather conditions, major traffic incidents, or other force majeure events.</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 p-6">
                <div className="w-full flex flex-col gap-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 mr-2 text-green-600" />
                    <p>Our average delivery time is 32 minutes across all orders</p>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-4 border-t pt-4">
                    <Button className="bg-orange-600 hover:bg-orange-700 text-white">View Delivery Zones</Button>
                    <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                      Delivery FAQ
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
          
          {/* Privacy Policy Tab */}
          <TabsContent value="privacy" className="space-y-4">
            <Card>
              <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <CardTitle className="text-xl md:text-2xl">Privacy Policy</CardTitle>
                <CardDescription className="text-orange-100">How we collect, use, and protect your data</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-100 p-3 rounded-full mr-4">
                      <Shield className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Data Protection</h3>
                      <p className="text-gray-600">We take your privacy seriously</p>
                    </div>
                  </div>
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="data-collection">
                      <AccordionTrigger className="text-lg font-medium">
                        Information We Collect
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 space-y-2">
                        <p>We collect the following types of information:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li><span className="font-medium">Account Information:</span> Name, email, phone number, delivery addresses</li>
                          <li><span className="font-medium">Order Information:</span> Order history, preferred restaurants, favorite items</li>
                          <li><span className="font-medium">Payment Information:</span> Card details (encrypted), billing addresses</li>
                          <li><span className="font-medium">Location Data:</span> Delivery address, current location (with permission)</li>
                          <li><span className="font-medium">Device Information:</span> Device type, operating system, unique device identifiers</li>
                          <li><span className="font-medium">Usage Information:</span> How you interact with our app, browsing patterns</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="data-use">
                      <AccordionTrigger className="text-lg font-medium">
                        How We Use Your Information
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        <p>We use your information to:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Process and deliver your food orders</li>
                          <li>Manage your account and provide customer support</li>
                          <li>Improve our services and develop new features</li>
                          <li>Personalize your experience with relevant recommendations</li>
                          <li>Send important updates about your orders</li>
                          <li>Communicate promotions and offers (if you opt-in)</li>
                          <li>Ensure security and prevent fraud</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="data-sharing">
                      <AccordionTrigger className="text-lg font-medium">
                        Information Sharing
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        <p>We share your information with:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li><span className="font-medium">Restaurant Partners:</span> To fulfill your orders</li>
                          <li><span className="font-medium">Delivery Partners:</span> To deliver your food</li>
                          <li><span className="font-medium">Payment Processors:</span> To process transactions</li>
                          <li><span className="font-medium">Service Providers:</span> Who help us operate our business</li>
                        </ul>
                        <p className="mt-2">We do not sell your personal information to third parties for marketing purposes.</p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="data-security">
                      <AccordionTrigger className="text-lg font-medium">
                        Data Security
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        <p>We implement appropriate technical and organizational measures to protect your personal information, including:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Encryption of sensitive data</li>
                          <li>Secure network architecture</li>
                          <li>Regular security assessments</li>
                          <li>Employee training on data protection</li>
                          <li>Strict access controls</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="your-rights">
                      <AccordionTrigger className="text-lg font-medium">
                        Your Privacy Rights
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        <p>Depending on your location, you may have the right to:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Access your personal information</li>
                          <li>Correct inaccurate information</li>
                          <li>Delete your personal information</li>
                          <li>Object to or restrict certain processing</li>
                          <li>Data portability</li>
                          <li>Withdraw consent at any time</li>
                        </ul>
                        <p className="mt-2">To exercise these rights, please contact our Privacy Team through the app or email privacy@fooddeliveryapp.com.</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 p-6">
                <div className="w-full flex flex-col gap-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Shield className="h-4 w-4 mr-2 text-green-600" />
                    <p>Last updated: March 11, 2025</p>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-center border-t pt-4">
                    <p className="text-sm text-gray-500 mb-4 sm:mb-0">For privacy concerns, please contact our Privacy Officer at <span className="text-orange-600 font-medium">privacy@fooddeliveryapp.com</span></p>
                    <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                      Download Full Policy
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
        
        {/* Accept Terms Section */}
        <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-900">Ready to proceed?</h3>
              <p className="text-gray-600">Please review and accept our terms and policies</p>
            </div>
            <Button 
              onClick={() => setAcceptedTerms(!acceptedTerms)} 
              className={`${
                acceptedTerms 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : 'bg-orange-600 hover:bg-orange-700'
              } text-white min-w-40`}
            >
              {acceptedTerms ? 'Terms Accepted' : 'Accept Terms'}
              {acceptedTerms && <Check className="ml-2 h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
