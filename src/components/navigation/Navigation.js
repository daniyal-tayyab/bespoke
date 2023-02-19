import React, { useState } from "react";

import {
  Nav,
  LogoContainer,
  Menu,
  MenuItem,
  ButtonSection,
  MenuIcon,
  Drawer,
  DrawerMenu,
  DrawerMenuItem,
  SearchBarContainer,
  SearchBarWrapper,
} from "./Navigation.styles";

import Logo from "../../assets/icons/logo.png";

import { AiFillCaretDown } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { IoMenuOutline } from "react-icons/io5";

import Button from "../button/Button";
import { ImCross } from "react-icons/im";
import Company from "../nav-dropdown-lists/company/Company";
import Services from "../nav-dropdown-lists/services/Services";
import Solutions from "../nav-dropdown-lists/solution/Solutions";
import Resources from "../nav-dropdown-lists/resources/Resources";

import { Link } from "react-router-dom";

const Navigation = () => {
  const [hidden, setHidden] = useState(false);
  const [searchBar, setSearchBar] = useState(false);

  const [company, setCompany] = useState(false);
  const [services, setServices] = useState(false);
  const [solutions, setSolutions] = useState(false);
  const [resources, setResources] = useState(false);

  const toggleDrawer = () => {
    setHidden((prevState) => !prevState);
  };

  const toggleSearchBar = () => setSearchBar(!searchBar);

  const toggleComapany = () => setCompany((prevState) => !prevState);
  const toggleServices = () => setServices((prevState) => !prevState);
  const toggleSolutions = () => setSolutions((prevState) => !prevState);
  const toggleResources = () => setResources((prevState) => !prevState);

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Nav>
      <Drawer hidden={hidden}>
        <DrawerMenu>
          <DrawerMenuItem
          // onClick={
          //   (toggleComapany,
          //   () => openInNewTab(" http://techilab.com/about/"))
          // }
          >
            Company <AiFillCaretDown />
          </DrawerMenuItem>
          <DrawerMenuItem>
            Services <AiFillCaretDown />
          </DrawerMenuItem>
          <DrawerMenuItem>
            Solution <AiFillCaretDown />
          </DrawerMenuItem>
          <DrawerMenuItem>
            IT Blog <AiFillCaretDown />
          </DrawerMenuItem>
        </DrawerMenu>
      </Drawer>
      <LogoContainer>
        <Link to="/">
          <img src={Logo} alt="Daniyal" />
        </Link>
      </LogoContainer>
      <Menu>
        <MenuItem
          // onClick={
          //   (toggleComapany, () => openInNewTab(" http://techilab.com/about/"))
          // }
          onClick={toggleComapany}
        >
          <span>Company</span> <AiFillCaretDown />
        </MenuItem>
        <MenuItem onClick={toggleServices}>
          <span>Services</span> <AiFillCaretDown />
        </MenuItem>
        <MenuItem onClick={toggleSolutions}>
          <span>Solution</span> <AiFillCaretDown />
        </MenuItem>
        <MenuItem onClick={toggleResources}>
          <span>IT Blog</span> <AiFillCaretDown />
        </MenuItem>
      </Menu>
      <ButtonSection>
        <Link to="/contact-us">
          <Button>Contact</Button>
        </Link>

        <MenuIcon>
          <IoMenuOutline
            onClick={toggleDrawer}
            style={{ fontSize: "2.5rem" }}
          />
        </MenuIcon>
        <BsSearch onClick={toggleSearchBar} style={{ fontSize: "1.7rem" }} />
        <SearchBarContainer hidden={searchBar}>
          <SearchBarWrapper>
            <input placeholder="Search insights, services and case studies" />
            <ImCross
              onClick={toggleSearchBar}
              style={{ color: "red", fontSize: "2rem", cursor: "pointer" }}
            />
          </SearchBarWrapper>
        </SearchBarContainer>
      </ButtonSection>

      {/* submenues */}
      <Company hidden={company} />
      <Services hidden={services} />
      <Solutions hidden={solutions} />
      <Resources hidden={resources} />
    </Nav>
  );
};

export default Navigation;
