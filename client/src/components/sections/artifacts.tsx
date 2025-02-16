import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const artifacts = [
  {
    image: "https://images.unsplash.com/photo-1721884486403-e18ad5535876",
    title: "Ancient Katana",
    description: "Traditional Japanese sword crafted by master artisans"
  },
  {
    image: "https://images.unsplash.com/photo-1721884486292-9cc1983e1e26",
    title: "Ceramic Art",
    description: "Exquisite pottery showcasing Japanese craftsmanship"
  },
  {
    image: "https://images.unsplash.com/photo-1721884487025-e3e222fda389",
    title: "Traditional Masks",
    description: "Ceremonial masks used in Noh theater performances"
  }
];

export function Artifacts() {
  return (
    <section id="artifacts" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Traditional Artifacts</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the craftsmanship and artistry of Japan's historical treasures
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artifacts.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
