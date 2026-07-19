import Hero from "../components/home/Hero";
import Destinations from "../components/home/Destinations";
import Packages from "../components/home/Packages";
import Services from "../components/home/Services";

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <Destinations />
      <Packages />
      <Services />
    </div>
  );
}