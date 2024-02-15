import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const useView = (boolean) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: boolean, threshold: 0.2 });

  const variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };
  return { ref, variants, controls, inView };
};

export default useView;
