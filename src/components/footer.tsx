import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import Link from 'next/link';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        viewBox="0 0 24 24" 
        height="24" 
        width="24" 
        fill="currentColor"
        {...props}
    >
       <path d="M16.75 13.96c.25.13.41.2.52.34.14.18.22.42.22.69 0 .23-.06.44-.17.63s-.27.34-.47.45c-.21.1-.44.16-.72.16-.22,0-.47-.03-.75-.1-.42-.11-.87-.29-1.34-.52s-.93-.54-1.35-.89c-.43-.35-.78-.74-1.04-1.16s-.44-.89-.52-1.39c-.04-.26-.06-.5-.06-.73s.03-.43.09-.61c.06-.18.16-.35.29-.49.13-.14.28-.24.45-.31.17-.07.35-.1.52-.1.17,0,.33.02.48.06.15.04.3.13.44.25.14.12.27.29.39.49s.19.42.22.66c.02.2-.02.39-.12.55-.1.16-.24.3-.41.42s-.36.21-.54.26c-.18.05-.34.1-.48.15-.14.05-.28.1-.41.15-.12.04-.21.06-.27.06-.06,0-.1,0-.11-.02s-.07-.05-.09-.09-.07-.12-.08-.22c-.01-.09-.02-.2,0-.34.01-.14.05-.3.1-.45.05-.15.13-.31.22-.47.1-.16.21-.32.34-.49.13-.17.28-.31.45-.43.17-.12.36-.2.56-.24.2-.04.4-.06.59-.06s.38.03.54.09c.16.06.31.15.43.28s.22.28.3.46c.08.18.12.37.12.57Z M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18.13A8.13 8.13 0 1 1 20.13 12 8.13 8.13 0 0 1 12 20.13Z"/>
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
