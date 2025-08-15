import { Github, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Github, href: '#' },
  ];

  return (
    <footer id="contact" className="bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold font-serif text-primary">
              AURA
            </Link>
            <p className="text-xs text-muted-foreground mt-1">&copy; {new Date().getFullYear()} AURA. All Rights Reserved.</p>
          </div>
          <nav className="flex gap-x-6 mb-4 md:mb-0 text-sm">
            <Link href="#home" className="text-foreground hover:text-primary/80 transition-colors">Home</Link>
            <Link href="#products" className="text-foreground hover:text-primary/80 transition-colors">Collection</Link>
            <Link href="#features" className="text-foreground hover:text-primary/80 transition-colors">About</Link>
          </nav>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <Link key={index} href={link.href} target="_blank" rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors">
                <link.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
