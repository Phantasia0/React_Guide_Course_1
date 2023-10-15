import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const Root = (props) => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
