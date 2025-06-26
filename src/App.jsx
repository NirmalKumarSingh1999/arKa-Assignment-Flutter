import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import AccordionSection from './components/AccordionSection';
import ContactSection from './components/ContactSection';
import FluttersDawn from './components/FluttersDawn';
export default function App() {
  return (
    <div className="d-flex bg-dark text-white">
      <Sidebar />
      <div className="flex-grow-1">
        <Hero />
        <FluttersDawn/>
        <AccordionSection />
        <ContactSection />
      </div>
    </div>
  );
}
