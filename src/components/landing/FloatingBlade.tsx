import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { Scissors } from "lucide-react";

export function FloatingBlade() {
  const { scrollYProgress } = useScroll();
  const rotate = useSpring(useTransform(scrollYProgress, [0, 1], [0, 540]), {
    stiffness: 60,
    damping: 20,
  });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [-60, 60]), {
    stiffness: 60,
    damping: 20,
  });

  return (
    <div className="pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <motion.div
        style={{ rotate, y }}
        className="grid h-16 w-16 place-items-center rounded-full border border-primary/15 bg-card/70 shadow-glow backdrop-blur"
      >
        <Scissors className="h-7 w-7 text-primary" />
      </motion.div>
    </div>
  );
}
