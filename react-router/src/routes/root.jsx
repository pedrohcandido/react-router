import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Root() {
	const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div id="sidebar">
        <nav>
					<Link to={"/"} className="title">
					Home
					</Link>
					<div className="menu" onClick={() =>{
						setMenuOpen(!menuOpen)
					}}>
						<span></span>
						<span></span>
						<span></span>
					</div>
          <ul className={menuOpen ? "open" : ""}>
						<li>
								<NavLink to={"/slick"}>Carousel</NavLink>
            </li>
						<li>
								<NavLink to={"/form"}>Formulário</NavLink>
            </li>
						<li>
								<NavLink to={"/answerList"}>Formulário Enviados</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail" style={{backgroundColor: "darkgrey"}}>
				<Outlet />
			</div>
    </>
  );
}