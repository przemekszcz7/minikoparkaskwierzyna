import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Check, 
  Calendar, 
  Award, 
  Shield, 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Menu, 
  Wrench, 
  Copy, 
  Compass, 
  CheckCircle2, 
  ChevronDown
} from 'lucide-react';

// Data types
interface Project {
  id: string;
  title: string;
  description: string;
  area?: string;
  duration: string;
  images: string[];
}

export default function App() {
  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Sticky nav state
  const [isScrolled, setIsScrolled] = useState(false);
  // Lightbox state
  const [activeGallery, setActiveGallery] = useState<string[] | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const [lightboxTitle, setLightboxTitle] = useState<string>('');
  
  // Contact Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'Niwelacja terenu',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  // Scroll animations observer
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Form submit handler
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        serviceType: 'Niwelacja terenu',
        message: ''
      });
      // Clear success message after 10s
      setTimeout(() => setFormSuccess(false), 10000);
    }, 1200);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeGallery) return;
      if (e.key === 'Escape') {
        setActiveGallery(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % activeGallery.length);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + activeGallery.length) % activeGallery.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeGallery]);

  const projects: Project[] = [
    {
      id: 'road',
      title: 'Budowa drogi tymczasowej',
      description: 'Realizacja budowy drogi tymczasowej dla Pana Sebastiana',
      area: '320 m²',
      duration: '187 200 s (52 godziny)',
      images: [
        'https://i.ibb.co/tp45pWtg/720571920-122120624090954926-6887877073173352045-n-1.jpg',
        'https://i.ibb.co/93SMSCfr/721209266-122120624144954926-696378332577837577-n.jpg',
        'https://i.ibb.co/sJWJHCRS/721349031-122120624168954926-2794062729240256122-n.jpg',
        'https://i.ibb.co/DgsvGHyN/721310531-122120624132954926-7549766676322610166-n.jpg',
        'https://i.ibb.co/TDPYMtJ6/721051720-122120624102954926-1552929982338374066-n.jpg',
        'https://i.ibb.co/pvrn6cLf/721135960-122120624156954926-200422630846975026-n.jpg'
      ]
    },
    {
      id: 'sewage',
      title: 'Przydomowa oczyszczalnia ścieków',
      description: 'Przydomowa oczyszczalnia ścieków z rozsączaniem tunelowym.',
      duration: '43 200 s (12 godzin)',
      images: [
        'https://i.ibb.co/0yH1YtWY/718277959-122119738328954926-8117529431519553750-n.jpg',
        'https://i.ibb.co/dss1K4ry/719233139-122119738280954926-2490264358433170420-n.jpg',
        'https://i.ibb.co/pBLQcR9b/718907167-122119738316954926-6836889493258303500-n.jpg',
        'https://i.ibb.co/9388PWxj/719099817-122119738268954926-5594735290852910515-n.jpg'
      ]
    },
    {
      id: 'garage',
      title: 'Przygotowanie terenu pod garaż',
      description: 'Przygotowanie terenu pod garaż lekkiej konstrukcji.',
      duration: '2 godziny wraz z dojazdem.',
      images: [
        'https://i.ibb.co/YK4Dfqn/691563668-122114181338954926-1199743753633478965-n.jpg'
      ]
    }
  ];

  const services = [
    { title: 'Niwelacja terenu', desc: 'Precyzyjne wyrównywanie i profilowanie działki pod budowę, ogród lub parking.' },
    { title: 'Kształtowanie terenu', desc: 'Aranżowanie skarp, wzniesień i ozdobne ukształtowanie gruntów ogrodowych.' },
    { title: 'Wykopy pod fundamenty', desc: 'Bezpieczne i dokładne wykopy pod budynki jednorodzinne, garaże oraz ogrodzenia.' },
    { title: 'Przyłącza techniczne', desc: 'Kompleksowe wykopy liniowe pod instalacje prądowe, wodne oraz gazowe.' },
    { title: 'Oczyszczalnie ścieków', desc: 'Profesjonalne wykopy i montaż przydomowych oczyszczalni ścieków z drenażem.' },
    { title: 'Zbiorniki na deszczówkę', desc: 'Instalacja ekologicznych zbiorników retencyjnych wraz z systemami rozsączania.' },
    { title: 'Odwożenie urobku', desc: 'Szybki wywóz nadmiaru ziemi, gliny lub gruzu z placu budowy naszą wywrotką.' },
    { title: 'Prace ziemne ogólne', desc: 'Wszelkie niestandardowe zlecenia ziemne dostosowane do indywidualnych potrzeb.' }
  ];

  const whyUs = [
    { title: 'Nowoczesny sprzęt', desc: 'Wydajne maszyny gwarantujące szybkie i precyzyjne wykonanie każdego zadania.' },
    { title: 'Terminowość', desc: 'Szanujemy Twój czas. Zawsze pojawiamy się na placu budowy w ustalonym terminie.' },
    { title: 'Dokładność', desc: 'Każdy wykop i niwelacja są mierzone i realizowane zgodnie z projektem.' },
    { title: 'Kompleksowa obsługa', desc: 'Od wykopu, przez montaż zbiorników, po wywóz nadmiaru ziemi wywrotką.' },
    { title: 'Doświadczenie', desc: 'Lata pracy za sterami maszyn pozwalają nam sprawnie omijać podziemne przeszkody.' },
    { title: 'Szybkie realizacje', desc: 'Zoptymalizowany proces pracy pozwala nam dotrzymywać nawet najkrótszych terminów.' },
    { title: 'Dojazd do klienta', desc: 'Zapewniamy transport maszyn i materiałów w promieniu 60 km od Skwierzyny.' },
    { title: 'Dla osób i firm', desc: 'Wystawiamy faktury, współpracujemy z deweloperami oraz klientami indywidualnymi.' }
  ];

  const openLightbox = (gallery: string[], index: number, title: string) => {
    setActiveGallery(gallery);
    setLightboxIndex(index);
    setLightboxTitle(title);
  };

  return (
    <div className="min-h-screen bg-[#111111] text-gray-100 flex flex-col font-sans selection:bg-[#d32f2f] selection:text-white">
      
      {/* Sticky Navigation */}
      <nav className={`w-full z-40 transition-all duration-300 ${isScrolled ? 'fixed top-0 bg-[#111111]/90 backdrop-blur-md shadow-2xl border-b border-white/5 py-3' : 'absolute top-0 bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <a href="#hero" className="flex items-center gap-3 group">
            <img 
              src="https://i.ibb.co/WNMZVsfs/669763260-122108823956954926-8129804684380492949-n.jpg" 
              alt="Mini Koparka Skwierzyna Logo" 
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-brand-red/30 object-cover group-hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-base md:text-lg tracking-wider text-white uppercase group-hover:text-brand-red transition-colors">
                Mini Koparka
              </span>
              <span className="font-mono text-[10px] md:text-xs text-gray-400 tracking-widest uppercase">Skwierzyna</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8 font-medium">
            <a href="#o-firmie" className="text-gray-300 hover:text-white transition-colors text-sm hover:border-b-2 hover:border-brand-red pb-1">O firmie</a>
            <a href="#uslugi" className="text-gray-300 hover:text-white transition-colors text-sm hover:border-b-2 hover:border-brand-red pb-1">Zakres usług</a>
            <a href="#sprzet" className="text-gray-300 hover:text-white transition-colors text-sm hover:border-b-2 hover:border-brand-red pb-1">Sprzęt</a>
            <a href="#dlaczego-warto" className="text-gray-300 hover:text-white transition-colors text-sm hover:border-b-2 hover:border-brand-red pb-1">Dlaczego warto?</a>
            <a href="#realizacje" className="text-gray-300 hover:text-white transition-colors text-sm hover:border-b-2 hover:border-brand-red pb-1">Realizacje</a>
            <a href="#obszar" className="text-gray-300 hover:text-white transition-colors text-sm hover:border-b-2 hover:border-brand-red pb-1">Obszar działania</a>
            <a href="#kontakt" className="text-gray-300 hover:text-white transition-colors text-sm hover:border-b-2 hover:border-brand-red pb-1">Kontakt</a>
          </div>

          {/* Desktop Direct Call Action */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="tel:787153620" 
              className="flex items-center gap-2 bg-brand-red hover:bg-[#b52626] text-white px-5 py-2.5 rounded-lg font-bold text-sm tracking-wider uppercase shadow-lg shadow-brand-red/20 transition-all transform hover:-translate-y-0.5"
            >
              <Phone size={15} className="animate-pulse" />
              <span>787 153 620</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/5 rounded-lg transition"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#111111]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-6 px-4 flex flex-col gap-4 animate-fadeIn">
            <a 
              href="#o-firmie" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-white text-lg py-1 border-b border-white/5 transition"
            >
              O firmie
            </a>
            <a 
              href="#uslugi" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-white text-lg py-1 border-b border-white/5 transition"
            >
              Zakres usług
            </a>
            <a 
              href="#sprzet" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-white text-lg py-1 border-b border-white/5 transition"
            >
              Sprzęt
            </a>
            <a 
              href="#dlaczego-warto" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-white text-lg py-1 border-b border-white/5 transition"
            >
              Dlaczego warto?
            </a>
            <a 
              href="#realizacje" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-white text-lg py-1 border-b border-white/5 transition"
            >
              Realizacje
            </a>
            <a 
              href="#obszar" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-white text-lg py-1 border-b border-white/5 transition"
            >
              Obszar działania
            </a>
            <a 
              href="#kontakt" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-white text-lg py-1 border-b border-white/5 transition"
            >
              Kontakt
            </a>
            <a 
              href="tel:787153620" 
              className="flex items-center justify-center gap-3 bg-brand-red hover:bg-[#b52626] text-white py-3.5 rounded-lg font-bold tracking-wider uppercase mt-4 transition"
            >
              <Phone size={18} />
              <span>Zadzwoń: 787 153 620</span>
            </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section 
        id="hero" 
        className="relative min-h-[95vh] flex items-center justify-center bg-cover bg-center pt-32 pb-20 px-4 overflow-hidden"
        style={{ 
          backgroundImage: `url('https://i.ibb.co/g0XYmwS/681232589-122110851746954926-3493901843434870529-n.jpg')`
        }}
      >
        {/* Dark overlay with linear gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/75 to-black/60 z-0"></div>
        
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 z-0"></div>

        {/* Content Box */}
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Logo Badge with Ripple */}
          <div className="relative mb-6 animate-pulse-slow">
            <div className="absolute inset-0 rounded-full bg-brand-red/20 blur-xl scale-125"></div>
            <img 
              src="https://i.ibb.co/WNMZVsfs/669763260-122108823956954926-8129804684380492949-n.jpg" 
              alt="Mini Koparka Skwierzyna Logo" 
              className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-brand-red/50 shadow-2xl object-cover relative z-10"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Slogan */}
          <span className="inline-block bg-brand-red/90 text-white font-mono text-xs md:text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 shadow-lg border border-white/10">
            🚜 Żadnej pracy się nie boimy!
          </span>

          {/* Title */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-7xl tracking-tight text-white uppercase drop-shadow-2xl mb-2">
            Mini Koparka <span className="text-brand-red">Skwierzyna</span>
          </h1>

          {/* Subheading */}
          <p className="font-display text-xl sm:text-2xl md:text-3xl text-gray-200 font-semibold tracking-wide mb-6">
            Minikoparka <span className="text-brand-red font-mono">2,6T</span> • Wywrotka <span className="text-brand-red font-mono">3,5T</span>
          </p>

          {/* Paragraph */}
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-10 drop-shadow-md">
            Świadczymy profesjonalne usługi ziemne minikoparką oraz wywrotką. Obsługujemy klientów prywatnych i firmy, realizując zarówno niewielkie prace ogrodowe, jak i kompleksowe roboty ziemne.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0">
            <a 
              href="tel:787153620" 
              className="flex items-center justify-center gap-3 bg-brand-red hover:bg-[#b52626] text-white px-8 py-4 rounded-xl font-bold tracking-wider uppercase text-base shadow-xl shadow-brand-red/30 transition-all transform hover:-translate-y-1 hover:scale-[1.02]"
            >
              <Phone size={18} />
              <span>Zadzwoń teraz</span>
            </a>
            <a 
              href="#kontakt" 
              className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold tracking-wider uppercase text-base transition-all transform hover:-translate-y-1"
            >
              <Mail size={18} />
              <span>Dane kontaktowe</span>
            </a>
          </div>

        </div>

        {/* Floating Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition cursor-pointer">
          <span className="text-[10px] font-mono tracking-widest uppercase">Przewiń</span>
          <ChevronDown size={16} className="animate-bounce" />
        </div>
      </section>

      {/* O FIRMIE SECTION */}
      <section id="o-firmie" className="py-24 bg-[#111111] relative overflow-hidden">
        
        {/* Geometric Accent Line */}
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Heading */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 text-brand-red mb-3">
                <span className="w-8 h-[2px] bg-brand-red"></span>
                <span className="font-mono text-xs uppercase tracking-widest font-bold">Poznaj nas bliżej</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase text-white leading-tight mb-6">
                O Naszej <br />
                <span className="text-brand-red">Działalności</span>
              </h2>
              <div className="h-1.5 w-20 bg-brand-red rounded mb-8"></div>
            </div>

            {/* Right side: Paragraph content + fast statistics card */}
            <div className="lg:col-span-7">
              <div className="glass-panel p-8 md:p-10 rounded-2xl relative overflow-hidden group hover:border-brand-red/20 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 rounded-full blur-2xl group-hover:bg-brand-red/15 transition-colors"></div>
                
                <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-8">
                  Działamy w promieniu <strong className="text-white border-b-2 border-brand-red/30 pb-0.5">60 km od Skwierzyny</strong>, oferując kompleksowe usługi ziemne z wykorzystaniem nowoczesnej minikoparki o masie <strong className="text-white">2,6 t</strong> oraz wywrotki <strong className="text-white">3,5 t</strong>. Stawiamy na terminowość, dokładność i indywidualne podejście do każdego zlecenia.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 border-t border-white/5">
                  <div className="flex flex-col">
                    <span className="font-display font-extrabold text-3xl md:text-4xl text-brand-red font-mono">60 km</span>
                    <span className="text-xs text-gray-400 font-mono tracking-wider uppercase mt-1">Zasięg dojazdu</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-extrabold text-3xl md:text-4xl text-white font-mono">2.6 T</span>
                    <span className="text-xs text-gray-400 font-mono tracking-wider uppercase mt-1">Masa koparki</span>
                  </div>
                  <div className="flex flex-col col-span-2 sm:col-span-1">
                    <span className="font-display font-extrabold text-3xl md:text-4xl text-white font-mono">3.5 T</span>
                    <span className="text-xs text-gray-400 font-mono tracking-wider uppercase mt-1">Wywrotka DMC</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ZAKRES USŁUG SECTION */}
      <section id="uslugi" className="py-24 bg-[#f5f5f5] text-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-red font-mono text-xs uppercase tracking-widest font-extrabold block mb-2">Szerokie możliwości</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase text-brand-dark mb-4">
              Zakres <span className="text-brand-red">Usług</span>
            </h2>
            <div className="h-1 w-24 bg-brand-red mx-auto mb-6"></div>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Dzięki doświadczeniu oraz sprawnej flocie, realizujemy szerokie spektrum robót ziemnych. Dbamy o nienaganny ład i porządek podczas prac.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:border-brand-red/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Decorative Icon Wrapper */}
                  <div className="w-12 h-12 rounded-xl bg-brand-red/5 flex items-center justify-center text-brand-red mb-5 shadow-sm">
                    {/* Specialized SVG designs for a professional visual look */}
                    {idx === 0 && (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    )}
                    {idx === 1 && (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l92-7-9-7-9 7V9M3 12l9-7 9 7-9 7-9-7z" />
                      </svg>
                    )}
                    {idx === 2 && (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    )}
                    {idx === 3 && (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )}
                    {idx === 4 && (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    )}
                    {idx === 5 && (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    )}
                    {idx === 6 && (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9h4l3 3v5h-2M1 1h12v12H1z" />
                      </svg>
                    )}
                    {idx === 7 && (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    )}
                  </div>
                  <h3 className="font-display font-extrabold text-lg text-brand-dark mb-2 tracking-wide uppercase flex items-center gap-1.5">
                    <span className="text-brand-red font-semibold text-sm">✔</span> {svc.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SPRZĘT SECTION */}
      <section id="sprzet" className="py-24 bg-[#111111] relative overflow-hidden">
        
        {/* Abstract design elements */}
        <div className="absolute left-1/4 bottom-10 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-red font-mono text-xs uppercase tracking-widest font-extrabold block mb-2">Zaplecze techniczne</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase text-white mb-4">
              Nasz <span className="text-brand-red">Sprzęt</span>
            </h2>
            <div className="h-1 w-24 bg-brand-red mx-auto mb-6"></div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Działamy wyłącznie na sprawdzonym i wydajnym sprzęcie. Pozwala nam to realizować prace szybko, terminowo i całkowicie bezpiecznie. Nasze maszyny docierają w ciasne i trudnodostępne miejsca.
            </p>
          </div>

          {/* Hardware cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Card 1: Excavator */}
            <div className="glass-panel p-8 rounded-2xl relative group hover:border-brand-red/30 transition-all duration-300">
              <div className="absolute top-4 right-4 text-brand-red/20 group-hover:text-brand-red/30 transition-colors">
                {/* Large Excavator Icon */}
                <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                  <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2" />
                </svg>
              </div>

              <span className="text-xs font-mono text-brand-red font-bold tracking-widest uppercase mb-2 block">Ciężki sprzęt</span>
              <h3 className="font-display font-extrabold text-2xl text-white tracking-wide uppercase mb-3">Minikoparka</h3>
              
              {/* Parameter highlight */}
              <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/30 text-white font-mono text-sm px-4 py-1.5 rounded-lg mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
                <span>Masa operacyjna: <strong>2,6 T</strong></span>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Nowoczesna minikoparka gąsienicowa o dużej sile kopania i doskonałej stabilności. Idealna do precyzyjnych wykopów fundamentowych, przyłączy oraz prac niwelacyjnych na każdym podłożu. Gąsienice chronią grunt przed nadmiernym ugnieceniem.
              </p>

              <ul className="space-y-2 border-t border-white/5 pt-4">
                <li className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="text-brand-red">✔</span> Różne szerokości łyżek w zestawie
                </li>
                <li className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="text-brand-red">✔</span> Możliwość pracy w ciasnej zabudowie
                </li>
              </ul>
            </div>

            {/* Card 2: Truck */}
            <div className="glass-panel p-8 rounded-2xl relative group hover:border-brand-red/30 transition-all duration-300">
              <div className="absolute top-4 right-4 text-brand-red/20 group-hover:text-brand-red/30 transition-colors">
                {/* Large Truck Icon */}
                <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                  <path d="M13 9h4l3 3v5h-2M1 1h12v12H1z" />
                </svg>
              </div>

              <span className="text-xs font-mono text-brand-red font-bold tracking-widest uppercase mb-2 block">Wywóz i transport</span>
              <h3 className="font-display font-extrabold text-2xl text-white tracking-wide uppercase mb-3">Wywrotka</h3>
              
              {/* Parameter highlight */}
              <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/30 text-white font-mono text-sm px-4 py-1.5 rounded-lg mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
                <span>Dopuszczalna masa całkowita: <strong>3,5 T</strong></span>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Lekki i zwrotny samochód ciężarowy o ładowności dostosowanej do transportu kruszyw, ziemi oraz gruzu. Dzięki kompaktowym wymiarom jest w stanie wjechać bezpośrednio na posesje prywatne i ogrody bez niszczenia bram czy podjazdów.
              </p>

              <ul className="space-y-2 border-t border-white/5 pt-4">
                <li className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="text-brand-red">✔</span> Trójstronny wywrót skrzyni ładunkowej
                </li>
                <li className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="text-brand-red">✔</span> Szybkie odwożenie i dowóz urobku/kruszyw
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Statement */}
          <div className="text-center mt-12 bg-white/5 max-w-2xl mx-auto py-4 px-6 rounded-xl border border-white/5">
            <p className="text-xs md:text-sm text-gray-300 italic">
              💪 Wykorzystywany przez nas sprzęt pozwala na wykonywanie zarówno małych prac przydomowych, jak i bardziej wymagających inwestycji budowlanych.
            </p>
          </div>

        </div>
      </section>

      {/* DLACZEGO WARTO SECTION */}
      <section id="dlaczego-warto" className="py-24 bg-[#f5f5f5] text-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-red font-mono text-xs uppercase tracking-widest font-extrabold block mb-2">Gwarancja jakości</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase text-brand-dark mb-4">
              Dlaczego <span className="text-brand-red">Warto?</span>
            </h2>
            <div className="h-1 w-24 bg-brand-red mx-auto mb-6"></div>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Zbudowaliśmy zaufanie na rzetelności, profesjonalizmie i pasji. Zobacz, co zyskujesz wybierając naszą firmę do realizacji prac ziemnych.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#d32f2f]/5 text-brand-red flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {idx === 0 && <Wrench size={24} />}
                  {idx === 1 && <Clock size={24} />}
                  {idx === 2 && <Compass size={24} />}
                  {idx === 3 && <CheckCircle2 size={24} />}
                  {idx === 4 && <Award size={24} />}
                  {idx === 5 && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                  {idx === 6 && <MapPin size={24} />}
                  {idx === 7 && <Shield size={24} />}
                </div>
                <h3 className="font-display font-extrabold text-base text-brand-dark uppercase tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* REALIZACJE SECTION (GALLERY WITH LIGHTBOX) */}
      <section id="realizacje" className="py-24 bg-[#111111] relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-red font-mono text-xs uppercase tracking-widest font-extrabold block mb-2">Nasze portfolio</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase text-white mb-4">
              Nasze <span className="text-brand-red">Realizacje</span>
            </h2>
            <div className="h-1 w-24 bg-brand-red mx-auto mb-6"></div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Przejrzyj galerię naszych wybranych, ukończonych prac. Kliknij na dowolne zdjęcie, aby otworzyć je w trybie pełnoekranowym.
            </p>
          </div>

          {/* Three Folders of Projects */}
          <div className="space-y-20">
            {projects.map((proj, pIdx) => (
              <div 
                key={proj.id} 
                className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 md:p-10 relative overflow-hidden"
              >
                {/* Project Header and Meta */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-white/5">
                  <div>
                    <span className="text-xs font-mono text-brand-red font-bold tracking-widest uppercase mb-1.5 block">
                      Projekt {pIdx + 1}
                    </span>
                    <h3 className="font-display font-extrabold text-2xl md:text-3xl text-white uppercase tracking-wide">
                      {proj.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">{proj.description}</p>
                  </div>
                  
                  {/* Technical Metadata badglets */}
                  <div className="flex flex-wrap gap-3">
                    {proj.area && (
                      <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs flex items-center gap-2">
                        <span className="text-brand-red font-bold">Obszar:</span>
                        <span className="font-mono text-gray-200">{proj.area}</span>
                      </div>
                    )}
                    <div className="bg-[#d32f2f]/10 border border-[#d32f2f]/30 px-4 py-2 rounded-xl text-xs flex items-center gap-2">
                      <Clock size={14} className="text-brand-red" />
                      <span className="text-brand-red font-bold">Czas realizacji:</span>
                      <span className="font-mono text-gray-200">{proj.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Grid of Images */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {proj.images.map((imgUrl, imgIdx) => (
                    <div 
                      key={imgIdx}
                      onClick={() => openLightbox(proj.images, imgIdx, proj.title)}
                      className="group aspect-square relative rounded-xl overflow-hidden cursor-zoom-in bg-black border border-white/5 hover:border-brand-red/40 transition-all duration-300"
                    >
                      <img 
                        src={imgUrl} 
                        alt={`${proj.title} - zdjęcie ${imgIdx + 1}`} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="bg-[#d32f2f] text-white p-2.5 rounded-full transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3H6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* OBSZAR DZIAŁANIA (WITH INTERACTIVE RADAR MAP) */}
      <section id="obszar" className="py-24 bg-[#111111] relative overflow-hidden border-t border-b border-white/5">
        
        {/* Animated radar effect on background */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-brand-red/5 rounded-full animate-ping-slow pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Description & Radius Indicator */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-brand-red mb-3">
                <span className="w-8 h-[2px] bg-brand-red"></span>
                <span className="font-mono text-xs uppercase tracking-widest font-bold">Lokalizacja</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase text-white leading-tight mb-6">
                Obszar <br />
                <span className="text-brand-red">Działania</span>
              </h2>
              <div className="h-1.5 w-20 bg-brand-red rounded mb-8"></div>

              {/* Action Radius Block */}
              <div className="glass-panel p-6 rounded-2xl border-l-4 border-brand-red mb-6 flex gap-4 items-start">
                <div className="p-3 bg-brand-red/10 rounded-xl text-brand-red mt-1">
                  <MapPin size={24} className="animate-bounce" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-lg text-white uppercase tracking-wide mb-1">
                    📍 Promień do 60 kilometrów
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Siedziba naszej firmy znajduje się w Skwierzynie. Dojeżdżamy do klientów i na place budowy w promieniu 60 km, obejmując całe województwo lubuskie i tereny ościenne.
                  </p>
                </div>
              </div>

              {/* Location list */}
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 font-mono tracking-wider uppercase bg-white/5 p-4 rounded-xl">
                <div>• Skwierzyna</div>
                <div>• Gorzów Wlkp.</div>
                <div>• Międzyrzecz</div>
                <div>• Bledzew</div>
                <div>• Przytoczna</div>
                <div>• Lubniewice</div>
                <div>• Trzciel</div>
                <div>• Sulęcin</div>
              </div>
            </div>

            {/* Right Column: High-End Custom Radar Map Graphic */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="w-full max-w-lg aspect-square bg-[#1a1a1a] rounded-full border border-white/10 p-6 shadow-2xl relative flex items-center justify-center">
                
                {/* SVG Radial Radar Grid */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <defs>
                    <radialGradient id="radarGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#d32f2f" stopOpacity="0.25" />
                      <stop offset="60%" stopColor="#d32f2f" stopOpacity="0.05" />
                      <stop offset="100%" stopColor="#d32f2f" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Concentric circles */}
                  <circle cx="200" cy="200" r="180" fill="url(#radarGlow)" stroke="#333333" strokeWidth="1" strokeDasharray="4,4" />
                  <circle cx="200" cy="200" r="120" stroke="#444444" strokeWidth="1" strokeDasharray="3,3" />
                  <circle cx="200" cy="200" r="60" stroke="#555555" strokeWidth="1" />
                  
                  {/* Scope lines */}
                  <line x1="20" y1="200" x2="380" y2="200" stroke="#333" strokeWidth="1" />
                  <line x1="200" y1="20" x2="200" y2="380" stroke="#333" strokeWidth="1" />

                  {/* Radar sweep path */}
                  <path d="M200 200 L200 20 A180 180 0 0 1 327 73 Z" fill="rgba(211, 47, 47, 0.05)" />

                  {/* Municipality dots and labels */}
                  {/* Gorzów Wlkp (North) */}
                  <circle cx="200" cy="70" r="4" fill="#888" />
                  <text x="200" y="58" fill="#aaa" fontSize="10" fontFamily="monospace" textAnchor="middle">GORZÓW WLKP.</text>

                  {/* Międzyrzecz (South) */}
                  <circle cx="200" cy="310" r="4" fill="#888" />
                  <text x="200" y="328" fill="#aaa" fontSize="10" fontFamily="monospace" textAnchor="middle">MIĘDZYRZECZ</text>

                  {/* Przytoczna (East) */}
                  <circle cx="300" cy="180" r="4" fill="#888" />
                  <text x="308" y="184" fill="#aaa" fontSize="10" fontFamily="monospace" textAnchor="start">PRZYTOCZNA</text>

                  {/* Bledzew (West) */}
                  <circle cx="100" cy="210" r="4" fill="#888" />
                  <text x="92" y="214" fill="#aaa" fontSize="10" fontFamily="monospace" textAnchor="end">BLEDZEW</text>

                  {/* Lubniewice */}
                  <circle cx="130" cy="140" r="4" fill="#888" />
                  <text x="122" y="136" fill="#aaa" fontSize="9" fontFamily="monospace" textAnchor="end">LUBNIEWICE</text>

                  {/* Trzciel */}
                  <circle cx="290" cy="270" r="4" fill="#888" />
                  <text x="298" y="274" fill="#aaa" fontSize="9" fontFamily="monospace" textAnchor="start">TRZCIEL</text>

                  {/* Center Dot (Skwierzyna) with blinking pulse */}
                  <circle cx="200" cy="200" r="6" fill="#d32f2f" />
                </svg>

                {/* Animated overlay circle for pulsing core */}
                <div className="absolute w-8 h-8 rounded-full border border-brand-red bg-brand-red/10 animate-ping pointer-events-none"></div>

                {/* Pulsating Center Tag */}
                <div className="absolute top-[46%] left-[45%] md:left-[46%] bg-brand-red text-white text-[10px] font-mono font-bold uppercase tracking-wider py-1 px-2.5 rounded shadow-lg z-20 pointer-events-none flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  <span>Skwierzyna</span>
                </div>

                {/* Scope marker display */}
                <div className="absolute bottom-6 bg-black/80 backdrop-blur border border-white/10 px-4 py-1.5 rounded-full text-[11px] font-mono text-gray-300">
                  Zasięg operacyjny: <span className="text-brand-red font-bold">60 KM</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* KONTAKT SECTION & INFO */}
      <section id="kontakt" className="py-24 bg-[#f5f5f5] text-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-red font-mono text-xs uppercase tracking-widest font-extrabold block mb-2">Zapraszamy do kontaktu</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase text-brand-dark mb-4">
              Kontakt i <span className="text-brand-red">Wycena</span>
            </h2>
            <div className="h-1 w-24 bg-brand-red mx-auto mb-6"></div>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Skontaktuj się z nami bezpośrednio przez telefon lub e-mail. Odpowiemy na wszystkie pytania i przygotujemy dla Ciebie darmową, niezobowiązującą wycenę prac.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
            
            {/* Card 1: Phone */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-red/10 transition-all flex flex-col justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-brand-red/5 text-brand-red rounded-xl shrink-0">
                  <Phone size={24} className="animate-pulse" />
                </div>
                <div>
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block mb-0.5">Szybki kontakt</span>
                  <h4 className="font-display font-extrabold text-lg text-brand-dark uppercase">Telefon</h4>
                  <p className="text-xl font-mono font-black text-brand-red mt-1 hover:underline">
                    <a href="tel:787153620">787 153 620</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Email */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-red/10 transition-all flex flex-col justify-between gap-4">
              <div className="flex items-start gap-4 overflow-hidden">
                <div className="p-4 bg-brand-red/5 text-brand-red rounded-xl shrink-0">
                  <Mail size={24} />
                </div>
                <div className="overflow-hidden">
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block mb-0.5">Zapytania ofertowe</span>
                  <h4 className="font-display font-extrabold text-lg text-brand-dark uppercase">Napisz e-mail</h4>
                  <p className="text-sm font-mono font-bold text-gray-800 mt-1 hover:underline truncate">
                    <a href="mailto:przemekszewczyk86@gmail.com">przemekszewczyk86@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Location scope summary */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-red/10 transition-all flex flex-col justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-brand-red/5 text-brand-red rounded-xl shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block mb-0.5">Siedziba</span>
                  <h4 className="font-display font-extrabold text-lg text-brand-dark uppercase">Obszar działania</h4>
                  <p className="text-sm text-gray-700 mt-1 leading-relaxed">
                    Skwierzyna i okolice (do 60 km). Gwarantujemy dojazd własnym transportem maszynowym.
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className="max-w-md mx-auto mt-10">
            <a 
              href="tel:787153620" 
              className="w-full flex items-center justify-center gap-3 bg-brand-red hover:bg-[#b52626] text-white py-5 rounded-2xl font-display font-black text-lg tracking-wider uppercase shadow-xl shadow-brand-red/25 transition-all transform hover:-translate-y-1"
            >
              <Phone size={22} />
              <span>Zadzwoń teraz</span>
            </a>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111111] text-gray-400 pt-16 pb-12 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Column 1: Brand details */}
            <div className="space-y-4">
              <a href="#hero" className="flex items-center gap-3">
                <img 
                  src="https://i.ibb.co/WNMZVsfs/669763260-122108823956954926-8129804684380492949-n.jpg" 
                  alt="Mini Koparka Skwierzyna Logo" 
                  className="w-12 h-12 rounded-full border border-brand-red/30 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="flex flex-col">
                  <span className="font-display font-black text-white text-lg tracking-wider uppercase">
                    Mini Koparka
                  </span>
                  <span className="font-mono text-xs text-brand-red font-bold tracking-widest uppercase">Skwierzyna</span>
                </div>
              </a>
              <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
                Świadczymy najwyższej klasy usługi ziemne minikoparką o masie 2,6T oraz wywrotką 3,5T na terenie Skwierzyny i okolic. Stawiamy na czystość placu roboczego i pełną terminowość.
              </p>
              <div className="text-white text-xs font-mono font-bold tracking-wider uppercase">
                🚜 Żadnej pracy się nie boimy!
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div>
              <h4 className="text-white font-display font-bold text-sm uppercase tracking-wider mb-4 border-b border-white/5 pb-2">
                Skróty Menu
              </h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#o-firmie" className="hover:text-white transition">O firmie</a></li>
                <li><a href="#uslugi" className="hover:text-white transition">Zakres usług</a></li>
                <li><a href="#sprzet" className="hover:text-white transition">Nasza flota maszynowa</a></li>
                <li><a href="#dlaczego-warto" className="hover:text-white transition">Dlaczego warto nas wybrać</a></li>
                <li><a href="#realizacje" className="hover:text-white transition">Nasze wybrane realizacje</a></li>
                <li><a href="#obszar" className="hover:text-white transition">Obszar działania</a></li>
              </ul>
            </div>

            {/* Column 3: Contacts */}
            <div>
              <h4 className="text-white font-display font-bold text-sm uppercase tracking-wider mb-4 border-b border-white/5 pb-2">
                Szybki Kontakt
              </h4>
              <ul className="space-y-3 text-xs">
                <li className="flex items-center gap-2">
                  <Phone size={14} className="text-brand-red shrink-0" />
                  <a href="tel:787153620" className="hover:text-white transition font-mono">787 153 620</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={14} className="text-brand-red shrink-0" />
                  <a href="mailto:przemekszewczyk86@gmail.com" className="hover:text-white transition font-mono truncate">przemekszewczyk86@gmail.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={14} className="text-brand-red shrink-0" />
                  <span>Skwierzyna i okolice (do 60 km)</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Quality Standard */}
            <div>
              <h4 className="text-white font-display font-bold text-sm uppercase tracking-wider mb-4 border-b border-white/5 pb-2">
                Standard Jakości
              </h4>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-xs text-white font-bold">
                  <Check size={14} className="text-brand-red" />
                  <span>Darmowa i szybka wycena</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white font-bold">
                  <Check size={14} className="text-brand-red" />
                  <span>Czystość i porządek</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white font-bold">
                  <Check size={14} className="text-brand-red" />
                  <span>Pełne faktury VAT dla firm</span>
                </div>
              </div>
            </div>

          </div>

          {/* Copyright Bar */}
          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <span>&copy; {new Date().getFullYear()} Mini Koparka Skwierzyna. Wszelkie prawa zastrzeżone.</span>
            <div className="flex gap-4">
              <a href="#o-firmie" className="hover:text-white transition">O nas</a>
              <span>•</span>
              <a href="#kontakt" className="hover:text-white transition font-bold text-brand-red">Zamów darmową wycenę</a>
            </div>
          </div>

        </div>
      </footer>

      {/* FULLSCREEN MODERN LIGHTBOX GALLERY */}
      {activeGallery && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center animate-fadeIn p-4 sm:p-6 select-none">
          
          {/* Header Controls */}
          <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-black/80 to-transparent p-4 flex items-center justify-between z-10">
            <div>
              <h4 className="text-white text-sm sm:text-base font-display font-bold uppercase tracking-wide">
                {lightboxTitle}
              </h4>
              <span className="text-[11px] font-mono text-gray-400 uppercase tracking-widest mt-0.5 block">
                Zdjęcie {lightboxIndex + 1} z {activeGallery.length}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              {/* Keyboard tip */}
              <span className="hidden md:inline bg-white/5 border border-white/10 px-2.5 py-1 rounded text-[10px] font-mono text-gray-400">
                ESC by zamknąć • Strzałki ← →
              </span>
              <button 
                onClick={() => setActiveGallery(null)}
                className="bg-brand-red text-white hover:bg-[#b52626] p-2 rounded-lg transition"
                aria-label="Zamknij"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Core Image Showcase Container */}
          <div className="relative w-full max-w-5xl flex items-center justify-center grow py-12">
            
            {/* Left Button */}
            {activeGallery.length > 1 && (
              <button 
                onClick={() => setLightboxIndex((prev) => (prev - 1 + activeGallery.length) % activeGallery.length)}
                className="absolute left-2 sm:left-4 bg-black/50 hover:bg-[#d32f2f] text-white p-3 rounded-full transition-all border border-white/10 hover:border-transparent z-10"
                aria-label="Poprzednie"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {/* The Image */}
            <div className="max-w-full max-h-[75vh] flex items-center justify-center">
              <img 
                src={activeGallery[lightboxIndex]} 
                alt="Wybrana realizacja" 
                className="max-w-full max-h-[75vh] rounded-lg shadow-2xl object-contain border border-white/10 select-none pointer-events-none animate-zoomIn"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Right Button */}
            {activeGallery.length > 1 && (
              <button 
                onClick={() => setLightboxIndex((prev) => (prev + 1) % activeGallery.length)}
                className="absolute right-2 sm:right-4 bg-black/50 hover:bg-[#d32f2f] text-white p-3 rounded-full transition-all border border-white/10 hover:border-transparent z-10"
                aria-label="Następne"
              >
                <ChevronRight size={24} />
              </button>
            )}

          </div>

          {/* Footer dots selector */}
          {activeGallery.length > 1 && (
            <div className="absolute bottom-6 flex justify-center gap-1.5 z-10 max-w-full overflow-x-auto py-2">
              {activeGallery.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setLightboxIndex(dotIdx)}
                  className={`h-2 rounded-full transition-all shrink-0 ${dotIdx === lightboxIndex ? 'w-8 bg-brand-red' : 'w-2 bg-white/30 hover:bg-white/50'}`}
                  aria-label={`Przejdź do zdjęcia ${dotIdx + 1}`}
                />
              ))}
            </div>
          )}

        </div>
      )}

    </div>
  );
}
