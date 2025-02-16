import { Hero } from "@/components/sections/hero";
import { Culture } from "@/components/sections/culture";
import { Nature } from "@/components/sections/nature";
import { Artifacts } from "@/components/sections/artifacts";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <div className="relative">
      <Navigation />
      <Hero />
      <Culture />
      <Nature />
      <Artifacts />
    </div>
  );
}
