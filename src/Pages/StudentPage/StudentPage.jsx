import React, { useState } from 'react';
import './Studentpage.css';
import { IoChevronBack } from "react-icons/io5";
import { TbUserPlus } from "react-icons/tb";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { LuPlusSquare } from "react-icons/lu";
import { Link } from 'react-router-dom';
import imgs from './../../Assets/e207b97fee7d4c7d854fff1fc5e81cee.jpg';
import bgimage1 from './../../Assets/Clients/OBJECTSONe.png';
import bgimage2 from './../../Assets/Clients/OBJECTS.png';
import piont from './../../Assets/Clients/Frame 366.png';
import avarage from './../../Assets/Clients/Frame 367.png';
import { RiFileCopyLine } from "react-icons/ri";
import userprofilfile from './../../Assets/Clients/Group 313.png';
import twitterqr from './../../Assets/Clients/twitterLogotype.png';

export default function StudentPage() {
    const [activeSection, setActiveSection] = useState('Profile');

    const renderContent = () => {
        switch (activeSection) {
            case 'Profile':
                return (
                    <div className="Profile">
                        <div className="UserProfile">
                            <div className="UserProfilRight">
                                <img src={userprofilfile} alt="" />
                            </div>
                            <div className="UserProfileLeft">
                                <div className="UserProfileAvatars">
                                    <img src={imgs} alt="User Avatar" />
                                </div>
                                <div className="UserProfileNaming">
                                    <p>Nice to meet you!</p>
                                    <h2>Alisher Atajanov</h2>
                                    <div className="UserProfileStatus">
                                        <button id='Student'>Student</button>
                                        <button id='Active'>Active</button>
                                    </div>
                                </div>
                            </div>
                            <div className="UserProfileCard">
                                <div className="bguserprofilcard"></div>
                                <div className="bgimage1"><img src={bgimage1} alt="" /></div>
                                <div className="bgimage2"><img src={bgimage2} alt="" /></div>

                                <div className="UserTextProfile">
                                    <div className="CardId">
                                        <h2>Finance Card</h2>
                                        <p>ID: <span>0989736</span></p>
                                    </div>
                                    <div className="CardBalance">
                                        <p>Current balance:</p>
                                        <h2>557,000 so’m</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="UserPoints">
                            <div className="UserPointsUp">
                                <div className="UserPointUpNav">
                                    <p>Points</p>
                                    <div className="Pointss">
                                        <div className="PointsAva">
                                            <img src={piont} alt="Points Avatar" />
                                        </div>
                                        <div className="PointsText">
                                            <span>160</span>
                                            <p>Points</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="UserPointsBox">
                                    <p>Added to system: 23.05.2024</p>
                                    <div className="Average">
                                        <div className="AverageAva">
                                            <img src={avarage} alt="Average Avatar" />
                                        </div>
                                        <div className="AverageText">
                                            <span>4</span>
                                            <p>Average</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="UserPointsQR">
                                <div className="Qrbox">
                                    <img src={twitterqr} alt="" />
                                </div>
                                <div className="QrTextbox">
                                    <div className="QrCopy">
                                        <p>Qr code</p>
                                        <span><RiFileCopyLine /></span>
                                    </div>
                                    <div className="QrAbout">
                                        <p>Change qr code</p>
                                        <p>Share with sms</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'Lesson & homework':
                return <div>Lesson & Homework Content</div>;
            case 'Finance':
                return <div>Finance Content</div>;
            case 'History':
                return <div>History Content</div>;
            default:
                return <div>Profile Content</div>;
        }
    };

    return (
        <div className="StudentPage">
            <div className="StudentsNav">
                <div className="LeftStudNav">
                    <div className="ButtonBack">
                        <Link to={'/Clients'}><button><IoChevronBack /></button></Link>
                    </div>
                    <div className="ButtonNavigationStud">
                        <button
                            id='Profile'
                            className={activeSection === 'Profile' ? 'active' : ''}
                            onClick={() => setActiveSection('Profile')}
                        >
                            Profile
                        </button>
                        <button
                            id='Lesson'
                            className={activeSection === 'Lesson & homework' ? 'active' : ''}
                            onClick={() => setActiveSection('Lesson & homework')}
                        >
                            Lesson & Homework
                        </button>
                        <button
                            id='Finance'
                            className={activeSection === 'Finance' ? 'active' : ''}
                            onClick={() => setActiveSection('Finance')}
                        >
                            Finance
                        </button>
                        <button
                            id='History'
                            className={activeSection === 'History' ? 'active' : ''}
                            onClick={() => setActiveSection('History')}
                        >
                            History
                        </button>
                    </div>
                </div>
                <div className="RightStudNav">
                    <button id='Add'><span><TbUserPlus /></span>Add to Group</button>
                    <button id='Individual'><span><LuPlusSquare /></span>Individual Lesson</button>
                    <button id='dot'><HiOutlineDotsHorizontal /></button>
                </div>
            </div>
            <div className="StudentPageHome">
                {renderContent()}
            </div>
        </div>
    );
}
