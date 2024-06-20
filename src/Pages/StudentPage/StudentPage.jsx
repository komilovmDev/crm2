import React, { useState } from 'react';
import './Studentpage.css';

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
                                    <img src="path_to_avatar" alt="User Avatar" />
                                </div>
                                <div className="UserProfileNaming">
                                    <p>Nice to meet you!</p>
                                    <h2>Alisher Atajanov</h2>
                                    <div className="UserProfileStatus">
                                        <button>Student</button>
                                        <button>Active</button>
                                    </div>
                                </div>
                            </div>
                            <div className="UserProfileCard">
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
                        <button>Back</button>
                    </div>
                    <div className="ButtonNavigationStud">
                        <button onClick={() => setActiveSection('Profile')}>Profile</button>
                        <button onClick={() => setActiveSection('Lesson & homework')}>Lesson & Homework</button>
                        <button onClick={() => setActiveSection('Finance')}>Finance</button>
                        <button onClick={() => setActiveSection('History')}>History</button>
                    </div>
                </div>
                <div className="RightStudNav">
                    <button>Add to Group</button>
                    <button>Individual Lesson</button>
                    <button>...</button>
                </div>
            </div>
            <div className="StudentPageHome">
                {renderContent()}
            </div>
        </div>
    );
}
