import {Button, Container} from "react-bootstrap";
import Laptop from '../../assets/imgs/laptops.png';
import './main-explore.sass';
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

const MainExplore = () => {
  return (
    <Container>
      <motion.section
        className="explore flex lg:flex-row lg:items-center flex-col-reverse gap-4"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
      >
        <div className="item more_section  gap-3 flex flex-col">
          <h1>Vai tev to vajag?</h1>
          <h3>&quot;Apskati produktus un atbildi uz šo jautājumu <span className='primary'>pats</span>&quot;</h3>
          <Link to={'/produkti'}>
            <Button>
              Apskatīt
            </Button>
          </Link>
        </div>
        <div className="item img_section">
          <img src={Laptop} alt="laptop"/>
        </div>
      </motion.section>
    </Container>
  )
}

export default MainExplore;