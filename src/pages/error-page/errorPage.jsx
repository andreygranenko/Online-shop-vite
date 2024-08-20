import {motion} from "framer-motion";

const ErrorPage = () => {
  // const error = useRouteError();
  return (
    <>
      <motion.div
        className={'container text-xl font-black text-center my-5'}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
      >
        Chill out! {/*{error.message}*/}

      </motion.div>
    </>


  )
}

export default ErrorPage;