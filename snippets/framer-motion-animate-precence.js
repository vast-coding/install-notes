import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";

const MagicComponent = () => {
  const [hidden, setHidden] = React.useState(false);
  const toggleHidden = () => setHidden((open) => !open);
  return (
    <div className="relative border-red-500 border-2">
      <AnimatePresence>
        {!hidden && (
          <motion.div
            className="border border-black absolute top-0 left-0 right-0"
            transition={{ ease: "easeInOut" }}
            initial={{ x: "100%" }}
            exit={{ x: 0 }}
            onClick={toggleHidden}
          >
            Panel 1
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {hidden && (
          <motion.div
            className="absolute top-0 left-0 right-0"
            transition={{ ease: "easeInOut" }}
            initial={{ x: 0 }}
            exit={{ x: "100%" }}
            onClick={toggleHidden}
          >
            Panel 2
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
