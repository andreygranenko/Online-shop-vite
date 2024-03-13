import {Button, Container} from "react-bootstrap";
import Laptop from '../../assets/imgs/laptops.png';
import './main-explore.sass';
const MainExplore = () => {
  return (
    <Container>
      <section className="explore">
        <div className="item more_section">
          <h1>Tech Heim</h1>
          <h3>&quot;Join the <span className='primary'>digital revolution</span>&quot;</h3>
          <Button>
            Explore More
          </Button>
        </div>
        <div className="item img_section">
          <img src={Laptop} alt="laptop"/>
        </div>
      </section>
    </Container>
  )
}

export default MainExplore;