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
import NewLeadCard from '../../Pages/leads/NewLeadCard';
import { FaChevronRight } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { FiUser } from "react-icons/fi";
import { TbMessageQuestion } from "react-icons/tb";
import { LuSettings2 } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";


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

    const [plusModal, setPlusModal] = useState(false)
    const [notficetion, setNotficetion] = useState(false)
    const [history, setHistory] = useState(false)
    const [profil, setProfil] = useState(false)

    return (
        <div className="Navbar">
            {
                plusModal ? (
                    <NewLeadCard setPlusModal={setPlusModal} plusModal={plusModal} />
                ) : null
            }
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
                <button onClick={() => setPlusModal(!plusModal)} className='GoPlus'><GoPlus /></button>
                {/* <button className='HiLang'><HiLanguage /></button> */}
                <button className='BsArrows'><BsArrowsFullscreen /></button>
                <button className='Notification'><IoIosNotificationsOutline onClick={() => setNotficetion(!notficetion)} />
                    {
                        notficetion && (
                            <div className="notficationDrop">
                                <p className="notficationDrop_title">Notfications</p>
                                <div className="notficationDrop_Messege">
                                    <div className="notficationDrop_Messege_box">
                                        <div className="notficationDrop_Messege_box_top">
                                            <h3>Say hello to new update</h3>
                                            <button>Click to open <FaChevronRight /></button>
                                        </div>
                                        <div className="notficationDrop_Messege_box_min">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        </div>
                                        <p className="notficationDrop_Messege_box_time">02.04.2024 18:42</p>
                                    </div>
                                    <div className="notficationDrop_Messege_box">
                                        <div className="notficationDrop_Messege_box_top">
                                            <h3>Sey hello to new update</h3>
                                            <button>Click to open <FaChevronRight /></button>
                                        </div>
                                        <div className="notficationDrop_Messege_box_min">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                                        </div>
                                        <p className='notficationDrop_Messege_box_time'>02.04.2024  18:42 </p>
                                    </div>
                                    <div className="notficationDrop_Messege_box">
                                        <div className="notficationDrop_Messege_box_top">
                                            <h3>Sey hello to new update</h3>
                                            <button>Click to open <FaChevronRight /></button>
                                        </div>
                                        <div className="notficationDrop_Messege_box_min">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                                        </div>
                                        <p className='notficationDrop_Messege_box_time'>02.04.2024  18:42 </p>
                                    </div>
                                    <div className="notficationDrop_Messege_box">
                                        <div className="notficationDrop_Messege_box_top">
                                            <h3>Sey hello to new update</h3>
                                            <button>Click to open <FaChevronRight /></button>
                                        </div>
                                        <div className="notficationDrop_Messege_box_min">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                                        </div>
                                        <p className='notficationDrop_Messege_box_time'>02.04.2024  18:42 </p>
                                    </div>
                                    <div className="notficationDrop_Messege_box">
                                        <div className="notficationDrop_Messege_box_top">
                                            <h3>Sey hello to new update</h3>
                                            <button>Click to open <FaChevronRight /></button>
                                        </div>
                                        <div className="notficationDrop_Messege_box_min">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                                        </div>
                                        <p className='notficationDrop_Messege_box_time'>02.04.2024  18:42 </p>
                                    </div>
                                    <div className="notficationDrop_Messege_box">
                                        <div className="notficationDrop_Messege_box_top">
                                            <h3>Sey hello to new update</h3>
                                            <button>Click to open <FaChevronRight /></button>
                                        </div>
                                        <div className="notficationDrop_Messege_box_min">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                                        </div>
                                        <p className='notficationDrop_Messege_box_time'>02.04.2024  18:42 </p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </button>
                <button className='Piclock'><PiClockClockwise onClick={() => setHistory(!history)} />
                    {
                        history && (
                            <div className="notficationDrop">
                                <p className="notficationDrop_title">History of operations</p>
                                <div className="notficationDrop_Messege">
                                    <div className="notficationDrop_Messege_box">
                                        <div className="notficationDrop_Messege_box_top">
                                            <h3>Say hello to new update</h3>
                                            <button style={{ color: '#C2CFE0' }}>John Anderson</button>
                                        </div>
                                        <div className="notficationDrop_Messege_box_min">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        </div>
                                        <p className="notficationDrop_Messege_box_time">02.04.2024 18:42</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </button>
                <div className="Navprofil" onClick={() => setProfil(!profil)}>
            <img src={profilImg} alt="Profile" />
            <div className="profilInfo">
                <p className="profilInfo_lastname">Baxtiyorov X</p>
                <p className="profilInfo_frstname">Founder</p>
            </div>
            {
                profil && (
                    <div className="Navprofil_drop" onClick={(e) => e.stopPropagation()}>
                        <button><FiUser />My profil</button>
                        <button><GrMoney />Billing</button>
                        <button><TbMessageQuestion />Technique support</button>
                        <button><LuSettings2 />Settings</button>
                        <button><IoIosLogOut />Log out</button>
                    </div>
                )
            }
        </div>
            </div>
        </div>
    )
}
