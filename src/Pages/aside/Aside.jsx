import React, { useState, useEffect, useRef } from 'react';
import "./Aside.css";
import logo from '../../Assets/logo.png';
import { IoChevronDownOutline } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FiFile } from "react-icons/fi";
import { RiGraduationCapLine } from "react-icons/ri";
import { BiGroup } from "react-icons/bi";
import { BsBank } from "react-icons/bs";
import { RiPieChartLine } from "react-icons/ri";
import profil from '../../Assets/teacher2.png';
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineDashboard } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoClipboardOutline } from "react-icons/io5";
import { HiOutlineBookOpen } from "react-icons/hi";
import { GoChecklist } from "react-icons/go";

export default function Aside() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeButton, setActiveButton] = useState(null);
    const menuRef = useRef(null);
    const dropdownRef = useRef(null);

    const handleButtonClick = (index) => {
        setActiveButton(prevActiveButton => prevActiveButton === index ? null : index);
    };

    const handleDropdownButtonClick = (index) => {
        setActiveButton(prevActiveButton => prevActiveButton === index ? null : index);
        setIsExpanded(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsExpanded(false);
                setActiveButton(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="Aside">
            <div className="MenuLeft" ref={menuRef}>
                <div className="MenuLeftLogo">
                    <img src={logo} alt="" />
                </div>
                <div className="MenuLeftUser">
                    <div className="MenuLeftUser-img">
                        <img src={profil} alt="img" />
                    </div>
                    <div className="MenuLeftText">
                        <h3>Main branch</h3>
                        <p>Nukus city</p>
                    </div>
                    <div className="MenuLefticon">
                        <IoChevronDownOutline />
                    </div>
                </div>
                <div className="MenuLeftButtons">
                    <Link to={'/'}><div className={`MenuButton ${activeButton === 1 ? 'active' : ''}`} onClick={() => handleButtonClick(1)}><div className="imgiconbox"><MdOutlineDashboard /></div> <p>Dashboard</p></div></Link>
                    <Link to={'/leads'}><div className={`MenuButton ${activeButton === 2 ? 'active' : ''}`} onClick={() => handleButtonClick(2)}><div className="imgiconbox"><IoClipboardOutline /></div> <p>Leads</p></div></Link> 
                    <Link to={'/Clients'}><div className={`MenuButton ${activeButton === 3 ? 'active' : ''}`} onClick={() => handleButtonClick(3)}><div className="imgiconbox"><FaRegUser /></div> <p>Clients</p></div></Link> 
                    <div className={`MenuButton ${activeButton === 4 ? 'active' : ''}`} onClick={() => handleButtonClick(4)}><div className="imgiconbox"><RiGraduationCapLine /></div> <p>Students</p></div>
                    <div className={`MenuButton ${activeButton === 5 ? 'active' : ''}`} onClick={() => handleButtonClick(5)}><div className="imgiconbox"><BiGroup /></div> <p>Groups</p></div>
                    <div className={`MenuButton ${activeButton === 6 ? 'active' : ''}`} onClick={() => handleButtonClick(6)}><div className="imgiconbox"><HiOutlineBookOpen /></div> <p>Lessons</p></div>
                    <div className={`MenuButton ${activeButton === 7 ? 'active' : ''}`} onClick={() => handleButtonClick(7)}><div className="imgiconbox"><GoChecklist /> </div> <p>Personnel</p></div>
                    <div className={`MenuButton ${activeButton === 8 ? 'active' : ''}`} onClick={() => handleButtonClick(8)}><div className="imgiconbox"><BsBank /></div> <p>Finance</p></div>
                    <div className={`MenuButton ${activeButton === 9 ? 'active' : ''}`} onClick={() => handleButtonClick(9)}><div className="imgiconbox"><RiPieChartLine /></div> <p>Reports</p></div>
                </div>
                <div className="settongButtonBox">
                    <div className={`MenuButton ${activeButton === 10 ? 'active' : ''}`} onClick={() => handleButtonClick(10)}><div className="imgiconbox"><HiOutlineDotsHorizontal /></div> <p>Settings</p></div>
                </div>
            </div>
            <div className="ContentRight">
                <div className="Navbar"></div>
            </div>
        </div>
    )
}
