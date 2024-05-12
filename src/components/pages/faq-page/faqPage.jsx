import {motion} from "framer-motion";

const FaqPage = () => {
  return (
    <>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}

      >
        <h2>FAQ Page</h2>
      </motion.div>
    </>

  );
};

export default FaqPage;
