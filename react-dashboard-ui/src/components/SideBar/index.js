import { IoMdSearch } from "react-icons/io";

import { RiComputerLine } from "react-icons/ri";

import { GoQuestion } from "react-icons/go";

import { BiSolidDollarCircle } from "react-icons/bi";

import { IoMdHeadset } from "react-icons/io";

import { FaRegCalendar } from "react-icons/fa";
import { CgOrganisation } from "react-icons/cg";

import "./index.css";

const SideBar = (props) => {
  const {isSideBarOpen,toggleSideBarView} = props
  
  const sideBarClassName = isSideBarOpen
    ? "opened-side-bar"
    : "closed-side-bar";

  return (
    <div className={sideBarClassName}>
      <button
        type="button"
        onClick={toggleSideBarView}
        className="toggle-button"
      >
        d
      </button>
      {isSideBarOpen ? (
        <ul className="side-bar-items">
          <li className="side-bar-item">
            <IoMdSearch size={20} color="#737373" />{" "}
            <p className="item-name">Search</p>
          </li>
          <li className="side-bar-item">
            <RiComputerLine size={20} color="#737373" />{" "}
            <p className="item-name">Dashboard</p>
          </li>
          <li className="side-bar-item">
            <GoQuestion size={20} color="#737373" />{" "}
            <p className="item-name">Help</p>
          </li>
          <li className="side-bar-item">
            <BiSolidDollarCircle size={20} color="#737373" />{" "}
            <p className="item-name">Payments</p>
          </li>
          <li className="side-bar-item">
            <FaRegCalendar size={20} color="#737373" />{" "}
            <p className="item-name">Calendar</p>
          </li>
          <li className="side-bar-item">
            <CgOrganisation size={20} color="#737373" />{" "}
            <p className="item-name">Statistics</p>
          </li>
          <li className="side-bar-item">
            <IoMdHeadset size={20} color="#737373" />{" "}
            <p className="item-name">Notifications</p>
          </li>
        </ul>
      ) : (
        <ul className="side-bar-items">
          <li className="side-bar-item">
            <IoMdSearch size={20} color="#737373" />
          </li>
          <li className="side-bar-item">
            <RiComputerLine size={20} color="#737373" />
          </li>
          <li className="side-bar-item">
            <GoQuestion size={20} color="#737373" />
          </li>
          <li className="side-bar-item">
            <BiSolidDollarCircle size={20} color="#737373" />
          </li>
          <li className="side-bar-item">
            <FaRegCalendar size={20} color="#737373" />
          </li>
          <li className="side-bar-item">
            <CgOrganisation size={20} color="#737373" />
          </li>
          <li className="side-bar-item">
            <IoMdHeadset size={20} color="#737373" />
          </li>
        </ul>
      )}
    </div>
  );
};

export default SideBar;
