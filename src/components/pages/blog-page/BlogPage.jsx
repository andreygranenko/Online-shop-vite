import {motion} from "framer-motion";
const BlogPage = () => {
  return (
    <>
      <motion.div
        className={'container'}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
      >
        <h2>Blog Page</h2>
      </motion.div>
    </>

    )
}

export default BlogPage;