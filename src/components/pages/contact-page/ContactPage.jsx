import {motion} from "framer-motion";

const ContactPage = () => {
  return (
    <>
      <motion.div
        className={'container'}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
      >
        <h2>Contact Page</h2>
      </motion.div>
    </>
  )
}

export default ContactPage;