import { FaRegCalendar } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";

import "./index.css";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Header = () => {
  const currentDate = new Date();
  const todayDate = currentDate.getDate();
  const month = currentDate.getMonth();
  const monthName = months[month];
  const hours = currentDate.getHours();
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const minutes = currentDate.getMinutes();
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  const time = `${formattedHours}:${formattedMinutes}`;
  const getGreeting = (hour) => {
    if (hour >= 5 && hour < 12) {
      return "Good morning";
    } else if (hour >= 12 && hour < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };
  const greeting = getGreeting(hours);
  return (
    <header className="header">
      <div className="container-1">
        <h3 className="greeting">{`${greeting}, Akshay`}</h3>
        <p>You are subscribed to Retail Plan</p>
      </div>
      <div className="container-2">
        <FaRegCalendar size={20} color="#ffffff" />
        <p className="date-time">{`Today, ${todayDate} ${monthName}`}</p>
        <MdOutlineAccessTime size={20} color="#ffffff" />
        <p className="date-time">{time}</p>
        <IoIosNotificationsOutline size={20} color="#ffffff" />
      </div>
    </header>
  );
};

export default Header;
