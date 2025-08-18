
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "framer-motion";


const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <path d="M16.5 12.5c-.3-.2-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.2-.2.2-.5.7-.6.8-.1.1-.2.2-.4.1-.2 0-.9-.3-1.7-1-.6-.6-1-1.3-1.2-1.5-.1-.2 0-.3.1-.4l.2-.2c.1 0 .2-.1.3-.2.1-.1.1-.2.2-.3.1-.1 0-.2 0-.3s-.6-1.4-.8-1.9c-.2-.5-.4-.4-.5-.4h-.4c-.1 0-.3.1-.5.3-.2.2-.7.7-.7 1.6s.7 1.9.8 2c.1.1 1.4 2.1 3.5 2.9.5.2.9.3 1.2.4.5.1.9.1 1.2-.1.4-.2 1.2-.5 1.4-1 .2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3z" />
    </svg>
  );

const ContactPage = () => {
    return (
        <div className="bg-background text-foreground">
            <Header />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-4xl sm:text-5xl font-bold font-serif text-primary">Contact Us</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        We'd love to hear from you. Whether you have a question, feedback, or just want to say hello, feel free to reach out.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                         <Card>
                            <CardHeader>
                                <CardTitle className="font-serif flex items-center gap-3">
                                    <Mail className="w-6 h-6 text-primary" />
                                    Email Us
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">For general inquiries, support, or feedback, please email us at:</p>
                                <a href="mailto:Sahilkhan9321754868@gmail.com" className="text-primary font-medium hover:underline">Sahilkhan9321754868@gmail.com</a>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader>
                                <CardTitle className="font-serif flex items-center gap-3">
                                    <WhatsAppIcon className="w-6 h-6 text-primary" />
                                    Chat on WhatsApp
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">Click the number below to start a chat with us instantly.</p>
                                <a href="https://wa.me/919321754868" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">+91 9321754868</a>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-serif flex items-center gap-3">
                                    <MapPin className="w-6 h-6 text-primary" />
                                    Address
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Shop no.18, Merchant Center, Plot no.14-D, APMC Masala Market, APMC Market, Sector 19, Vashi, Navi Mumbai, Maharashtra 400705
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                   
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                         <Card>
                            <CardHeader>
                                <CardTitle className="font-serif flex items-center gap-3">
                                    <MapPin className="w-6 h-6 text-primary" />
                                    Our Store
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="!p-0">
                                <div className="aspect-video w-full rounded-b-lg overflow-hidden">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m0!4v1722421718055!6m8!1m7!1sZB3cNhwHpvl3kx8tBgdaJA!2m2!1d19.0785777!2d73.0075568!3f93.18!4f-1.12!5f0.7820865974627469"
                                        width="100%"
                                        height="100%"
                                        style={{border:0}}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Evrora Bags Store Street View"
                                    ></iframe>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        className="lg:col-span-2"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Card>
                           <CardHeader>
                               <CardTitle className="font-serif">Send a Message</CardTitle>
                           </CardHeader>
                           <CardContent>
                               <form className="space-y-4">
                                   <Input type="text" placeholder="Your Name" />
                                   <Input type="email" placeholder="Your Email" />
                                   <Textarea placeholder="Your Message" rows={6} />
                                   <Button type="submit" className="w-full">Send Message</Button>
                               </form>
                           </CardContent>
                       </Card>
                    </motion.div>
                </div>

            </main>
            <Footer />
        </div>
    );
};

export default ContactPage;
