import {Button, Container} from "react-bootstrap";
import Laptop from '../../assets/imgs/laptops.png';
import './main-explore.sass';
import {Link} from "react-router-dom";
const MainExplore = () => {
  return (
    <Container>
      <section className="explore">
        <div className="item more_section">
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
      </section>
    </Container>
  )
}

export default MainExplore;