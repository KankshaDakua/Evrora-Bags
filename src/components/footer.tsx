import { Github, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Github, href: '#' },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <h3 className="font-headline text-2xl font-bold text-primary">LuminoBag</h3>
            <p className="text-sm text-background/60">&copy; {new Date().getFullYear()} LuminoBag. All Rights Reserved.</p>
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <Link key={index} href={link.href} target="_blank" rel="noopener noreferrer" 
                className="text-background/80 hover:text-primary hover:scale-125 transition-all duration-300 transform-gpu">
                <link.icon className="w-6 h-6" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
