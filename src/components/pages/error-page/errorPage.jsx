import {useRouteError} from "react-router-dom";
import NavBar from "../../nav-bar/NavBar.jsx";
import {motion} from "framer-motion";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar/>
      <motion.div
        className={'container'}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
      >
        Chill out! {error.message}
      </motion.div>
    </>


  )
}

export default ErrorPage;