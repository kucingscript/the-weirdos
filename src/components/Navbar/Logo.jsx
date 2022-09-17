import { Link } from "react-scroll";

function Logo() {
  return (
    <Link to={"home"} duration={500} smooth={true}>
      <div className="logo-font text-5xl font-bold text-primary hover:scale-110 transition duration-200 ease-in cursor-pointer md:text-6xl">
        W.
      </div>
    </Link>
  );
}

export default Logo;
