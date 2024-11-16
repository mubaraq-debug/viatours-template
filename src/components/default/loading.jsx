import { motion } from "framer-motion";

function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <motion.div
        className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
      />
      <p className="text-primary text-lg pt-5 font-semibold">please wait...</p>
    </div>
  );
}

export default LoadingSpinner;
