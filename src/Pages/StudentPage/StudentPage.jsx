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

export default function StudentPage() {
    const [activeSection, setActiveSection] = useState('Profile');

    const renderContent = () => {
        switch (activeSection) {
            case 'Profile':
                return (
                    <div className="Profile">
                        <div className="UserProfile">
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
                        <div className="UserPoints">
                            <div className="UserPointsUp">
                                <div className="UserPointUpNav">
                                    <p>Points</p>
                                    <span>Added to system: 23.05.2024</span>
                                </div>
                                <div className="UserPointsBox">
                                    <div className="Points">
                                        <div className="PointsAva">
                                            <img src="path_to_points_avatar" alt="Points Avatar" />
                                        </div>
                                        <div className="PointsText">
                                            <span>160</span>
                                            <p>Points</p>
                                        </div>
                                    </div>
                                    <div className="Average">
                                        <div className="AverageAva">
                                            <img src="path_to_average_avatar" alt="Average Avatar" />
                                        </div>
                                        <div className="AverageText">
                                            <span>4</span>
                                            <p>Average</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="UserPointsQR">
                                {/* Add QR code content or image here */}
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
