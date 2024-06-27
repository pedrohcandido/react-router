import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
						<li>
								<Link to={"/slick"}>Carousel</Link>
            </li>
						<li>
								<Link to={"/form"}>Formulário</Link>
            </li>
						<li>
								<Link to={"/answerList"}>Formulário Enviados</Link>
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