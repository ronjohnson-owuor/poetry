import { Link } from "react-router-dom";
function Navigation() {
    return (
      <div className="navigation">
        <h1>jollypoem</h1>
        <div id="links">
            <Link to=""> <span>post</span></Link>
            <Link to=""><span>create</span></Link>
            <Link to=""> <span>og in</span></Link>
        </div>
      </div>
    );
  }
  
  export default Navigation;