import {motion} from "framer-motion";
import './faq-page.sass';
const FaqPage = () => {
  return (
    <>
      <motion.div
        className={'container faq-page '}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}

      >
        <img src="https://i.ibb.co/NsWWJkf/Frame-26086945.png" alt="faq"/>
        <aside>
          Table of Contents
          <ul>
            <li><a href="#">General</a></li>
            <li><a href="#">Trusts & Safety</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Billing</a></li>
          </ul>
        </aside>
      </motion.div>
    </>

  );
};

export default FaqPage;
