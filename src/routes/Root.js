import {Outlet, Link} from "react-router-dom";
export default function Root() {
  return (
    <div
      id="sidebar"
      className="ml-5">
      <nav>
        <Outlet />
        <ul>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`/new_user`}>New User</Link>
          </li>
          <li>
            <Link to={`/existing_user`}>Existing User</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
