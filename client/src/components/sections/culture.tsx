import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const culturalElements = [
  {
    image: "https://images.unsplash.com/photo-1528164344705-47542687000d",
    title: "Tea Ceremony",
    description: "The art of mindful preparation"
  },
  {
    image: "https://images.unsplash.com/photo-1613257125720-c2f8a783416a",
    title: "Zen Gardens",
    description: "Finding peace in simplicity"
  },
  {
    image: "https://images.unsplash.com/photo-1445067041505-b53988974abd",
    title: "Temples",
    description: "Sacred spaces of reflection"
  },
  {
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186",
    title: "Arts",
    description: "Preserving ancient traditions"
  }
];

export function Culture() {
  return (
    <section id="culture" className="py-20 bg-[#F5F5DC]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif text-[#8B7355] mb-4">Cultural Heritage</h2>
          <p className="text-[#6B605C] max-w-2xl mx-auto font-light">
            Immerse yourself in Japan's timeless traditions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {culturalElements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden hover:shadow-md transition-shadow bg-white/80 border-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-serif text-[#8B7355] text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-[#6B605C] font-light">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}