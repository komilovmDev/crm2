import './Navbar.css';
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { PiClockClockwise } from "react-icons/pi";
import { HiLanguage } from "react-icons/hi2";
import { BsArrowsFullscreen } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoChevronDownOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import profilImg from '../../Assets/teacher.png'

export default function Navbar() {

    const [showContent, setShowContent] = useState(false);
    const [selectedContent, setSelectedContent] = useState('');

    const toggleContent = () => {
        setShowContent(!showContent);
    };

    const handleSelectContent = (content) => {
        setSelectedContent(content);
    };

    const [isActive, setIsActive] = useState({
        Khodjeyli: false,
        Main: false,
        Success: false
    });

    const toggleIsActive = (button) => {
        setIsActive(prevState => ({
            ...prevState,
            [button]: !prevState[button]
        }));
    };

    return (
        <div className="Navbar">
            <div className="BranchSelect">
                <div className="BranchButtonDrop">
                    <button onClick={toggleContent}>
                        Dashboard
                    </button>
                </div>
                {showContent && (
                    <div className="BranchSelectOption" onClick={(e) => e.stopPropagation()}>
                        <button className={`DropDownNavButton ${isActive.Khodjeyli ? 'activ' : ''}`} onClick={() => toggleIsActive('Khodjeyli')}>
                            Khodjeyli branch <div className="checkButton"><FaCheck /></div>
                        </button>
                        <button className={`DropDownNavButton ${isActive.Main ? 'activ' : ''}`} onClick={() => toggleIsActive('Main')}>
                            Main branch <div className="checkButton"><FaCheck /></div>
                        </button>
                        <button className={`DropDownNavButton ${isActive.Success ? 'activ' : ''}`} onClick={() => toggleIsActive('Success')}>
                            Success kids <div className="checkButton"><FaCheck /></div>
                        </button>
                    </div>
                )}
            </div>
            <div className="NavButtonBox">
                <button className='IoSearch'><IoSearchSharp /><p>Global search</p></button>
                <button className='GoPlus'><GoPlus /></button>
                {/* <button className='HiLang'><HiLanguage /></button> */}
                <button className='BsArrows'><BsArrowsFullscreen /></button>
                <button className='Notification'><IoIosNotificationsOutline /></button>
                <button className='Piclock'><PiClockClockwise /></button>
                <div className="Navprofil">
                    <img src={profilImg} alt="" />
                    <div className="profilInfo">
                        <p className="profilInfo_lastname">Baxtiyorov X</p>
                        <p className="profilInfo_frstname">Founder</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
