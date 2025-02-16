import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const landscapes = [
  {
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
    title: "Mount Fuji",
    location: "Shizuoka Prefecture"
  },
  {
    image: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054",
    title: "Bamboo Forest",
    location: "Arashiyama, Kyoto"
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Cherry Blossoms",
    location: "Ueno Park, Tokyo"
  }
];

export function Nature() {
  return (
    <section id="nature" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Natural Beauty</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the breathtaking landscapes that have inspired artists and poets for centuries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {landscapes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="overflow-hidden rounded-lg">
                <AspectRatio ratio={16/9}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </AspectRatio>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
