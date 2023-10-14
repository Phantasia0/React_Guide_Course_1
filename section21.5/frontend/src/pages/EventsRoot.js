import EventsNavigation from "../components/EventsNavigation";
import { Outlet } from "react-router-dom";

const EventsRootLayout = (props) => {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
};

export default EventsRootLayout;
