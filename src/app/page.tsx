import { About } from "./_components/About";
import { Clients } from "./_components/Clients";
import { Hero } from "./_components/Hero";
import { Projects } from "./_components/Projects";
import { Services } from "./_components/Services";

export default function Home() {
  return(
    <div>
      <Hero />
      <About />
      <Services />

      <Clients />
    </div>
  )
}