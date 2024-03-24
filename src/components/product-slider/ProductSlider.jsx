import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";

export default () => (
  <Flicking
    align="prev"
    circular={true}
    onMoveEnd={e => {
      console.log(e);
    }}>
    <div className="panel">
      <div className="categories-item">
        <img src={img} alt={alt}/>
        <h3>{title}</h3>
      </div>
    </div>
    <div className="panel">
      <div className="categories-item">
        <img src={""} alt={alt}/>
        <h3>{title}</h3>
      </div>
    </div>
    <div className="panel">
      <div className="categories-item">
        <img src={img} alt={alt}/>
        <h3>{title}</h3>
      </div>
    </div>
  </Flicking>
)