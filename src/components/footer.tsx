import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import Link from 'next/link';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        viewBox="0 0 24 24" 
        height="24" 
        width="24" 
        preserveAspectRatio="xMidYMid meet" 
        version="1.1" 
        x="0px" 
        y="0px" 
        enable-background="new 0 0 24 24" 
        xmlSpace="preserve"
        fill="currentColor"
        {...props}
    >
        <path d="M12.04,2C6.58,2,2.13,6.45,2.13,11.91c0,1.75,0.46,3.45,1.32,4.95L2.07,22l5.25-1.38 c1.45,0.84,3.12,1.32,4.79,1.32h0.01c5.46,0,9.91-4.45,9.91-9.91S17.5,2,12.04,2z M17.5,14.3c-0.28-0.14-1.65-0.82-1.9-0.91 c-0.26-0.09-0.45-0.14-0.64,0.14c-0.19,0.28-0.72,0.91-0.88,1.1c-0.16,0.19-0.32,0.21-0.59,0.07c-0.27-0.14-1.14-0.42-2.17-1.34 c-0.81-0.72-1.35-1.61-1.57-1.89c-0.22-0.28-0.02-0.43,0.12-0.57c0.13-0.13,0.28-0.33,0.42-0.49c0.14-0.16,0.19-0.28,0.28-0.47 c0.09-0.19,0.05-0.36-0.02-0.5c-0.07-0.14-0.64-1.54-0.88-2.1c-0.24-0.56-0.48-0.48-0.64-0.48c-0.16,0-0.35-0.02-0.52-0.02 c-0.17,0-0.45,0.07-0.68,0.34c-0.24,0.28-0.92,0.9-1.12,2.16c-0.2,1.26,0.13,2.5,0.3,2.67c0.16,0.18,1.88,2.95,4.56,4.03 c0.65,0.26,1.16,0.42,1.57,0.53c0.51,0.13,0.97,0.11,1.34,0.07c0.42-0.05,1.65-0.68,1.88-1.32c0.24-0.63,0.24-1.17,0.16-1.32 C17.76,14.53,17.57,14.44,17.5,14.3z"></path>
    </svg>
);


const Footer = () => {
  const socialLinks = [
    { icon: WhatsAppIcon, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Mail, href: 'mailto:hello@aura.com' },
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
            <Link href="/" className="text-foreground hover:text-primary/80 transition-colors">Home</Link>
            <Link href="/collection" className="text-foreground hover:text-primary/80 transition-colors">Collection</Link>
            <Link href="/about" className="text-foreground hover:text-primary/80 transition-colors">About</Link>
            <Link href="/contact" className="text-foreground hover:text-primary/80 transition-colors">Contact</Link>
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
