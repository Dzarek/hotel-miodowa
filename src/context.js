import React, { useState, useContext } from "react";
import { RoomContext } from "./roomContext";
import { sublinks, sublinksEN } from "./data";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const context = useContext(RoomContext);
  const { polish } = context;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [page, setPage] = useState({ pageOne: "", links: [] });
  const [location, setLocation] = useState({});
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSubmenu = (text, coordinates) => {
    let page;
    if (polish) {
      page = sublinks.find((link) => link.pageOne === text);
    } else {
      page = sublinksEN.find((link) => link.pageOne === text);
    }
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        page,
        location,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
