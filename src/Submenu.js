import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "./context";
import styled from "styled-components";

const Submenu = () => {
  const {
    isSubmenuOpen,
    page: { pageOne, links },
    location,
  } = useGlobalContext();
  const container = useRef(null);
  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [pageOne, location, links]);
  console.log(pageOne);
  return (
    <Wrapper
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <section>
        <div className={`submenu-center`}>
          {links.map((link, index) => {
            const { url, icon, label } = link;
            return (
              <a key={index} href={url}>
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Submenu;
