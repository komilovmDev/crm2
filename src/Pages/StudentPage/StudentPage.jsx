import React, { useState } from 'react';

export default function StudentPage() {
    const [activeSection, setActiveSection] = useState('Profile');

    const renderContent = () => {
        switch (activeSection) {
            case 'Profile':
                return (
                    <div className='Profile'>
                        <div className="UserProfile">
                            <div className="UserProfileLeft">
                                <div className="UserProfileAvatars">
                                    <img src="" alt="" />
                                </div>
                                <div className="UserProfileNaming">
                                    <p>nice to meet you !</p>
                                    <h2>Alisher Atajanov</h2>
                                    <div className="UserProfileStatus">
                                        <button>Student</button>
                                        <button>Active</button>
                                    </div>
                                </div>
                            </div>
                            <div className="UserProfileCard">
                                <div className="CardId">
                                    <h2>Finance card</h2>
                                    <p>ID: <span>0989736</span></p>
                                </div>
                                <div className="CardBalance">
                                    <p>Current balance:</p>
                                    <h2>557 000 so’m</h2>
                                </div>
                            </div>
                        </div>
                        <div className="Userpoints">
                            <div className="UserPointsUp">
                                <div className="UserPointUpNav">
                                    <p>Points</p>
                                    <span>Added to system: 23.05.2024</span>
                                </div>
                                <div className="UserPointsBox">
                                    <div className="Points">
                                        <div className="Pointsava">
                                            <img src="" alt="" />
                                        </div>
                                        <div className="PointsText">
                                            <span>160</span>
                                            <p>Points</p>
                                        </div>
                                    </div>
                                    <div className="Avarage">
                                        <div className="Avarageava">
                                            <img src="" alt="" />
                                        </div>
                                        <div className="AvarageText">
                                            <span>4</span>
                                            <p>Average</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="UserPointsQR">

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
                        <button>back</button>
                    </div>
                    <div className="ButtonNavigationStud">
                        <button onClick={() => setActiveSection('Profile')}>Profile</button>
                        <button onClick={() => setActiveSection('Lesson & homework')}>Lesson & homework</button>
                        <button onClick={() => setActiveSection('Finance')}>Finance</button>
                        <button onClick={() => setActiveSection('History')}>History</button>
                    </div>
                </div>
                <div className="RightStudNav">
                    <button>Add to group</button>
                    <button>Individual lesson</button>
                    <button>...</button>
                </div>
            </div>
            <div className="StudentPageHome">
                {renderContent()}
            </div>
        </div>
    );
}
