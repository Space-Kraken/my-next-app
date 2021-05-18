import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auton">
            <li className="nav-item">
              <Link href="/">
                {router.asPath === "/" ? (
                  <a className="nav-link active">Home</a>
                ) : (
                  <a className="nav-link">Home</a>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Ships">
                {router.asPath === "/Ships" ? (
                  <a className="nav-link active">Ships</a>
                ) : (
                  <a className="nav-link">Ships</a>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/R&M">
                {router.asPath === "/R&M" ? (
                  <a className="nav-link active">R&M</a>
                ) : (
                  <a className="nav-link">R&M</a>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/About">
                {router.asPath === "/About" ? (
                  <a className="nav-link active">About</a>
                ) : (
                  <a className="nav-link">About</a>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
