import {Outlet, Link} from "react-router-dom";
export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>router for bday music</h1>
        <nav>
          <Outlet />
          <ul>
            <li>
              <Link to={`/new_user`}>New User?</Link>
            </li>
            <li>
              <Link to={`/existing_user`}>Existing User?</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
