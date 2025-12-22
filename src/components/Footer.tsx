import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="text-lg font-bold">
            <span className="text-primary">&lt;</span>
            YN
            <span className="text-primary">/&gt;</span>
          </a>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © {currentYear} Made with <Heart className="h-4 w-4 text-primary fill-primary" /> by Your Name
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
            >
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
            >
              <Mail className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;