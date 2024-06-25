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
import { BiChalkboard } from "react-icons/bi";
import { FiLoader } from "react-icons/fi";
import { BiCoinStack } from "react-icons/bi";
import { CiCalendar } from "react-icons/ci";
import { PiHandCoins } from "react-icons/pi";
import { LuUserSquare2 } from "react-icons/lu";
import { LiaFileAltSolid } from "react-icons/lia";
import { CiBookmarkCheck } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { VscSend } from "react-icons/vsc";
import { FaChevronDown } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";


export default function StudentPage() {
    const [activeSection, setActiveSection] = useState('Profile');

    const renderContent = () => {
        switch (activeSection) {
            case 'Profile':
                return (
                    <div className="Profile">
                        <div className="USerProfileOne">
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
                        <div className="StatsCard">
                            <div className="Statsbox">
                                <div className="boardStats"><span><BiChalkboard /></span></div>
                                <div className="StatsBoxUp">
                                    <p>Active courses</p>
                                </div>
                                <div className="StatBoxText">
                                    <h2>2</h2>
                                    <p>Group and individual</p>
                                </div>
                                <div className="PropStats"></div>
                            </div>
                            <div id='Amount' className="Statsbox">
                                <div className="boardStats"><span><FiLoader /></span></div>
                                <div className="StatsBoxUp">
                                    <p>Amount to be paid monthly</p>
                                </div>
                                <div className="StatBoxText">
                                    <h2>1 218 000 <p>so’m</p></h2>
                                    <p>for this month</p>
                                </div>
                                <div className="PropStats"></div>
                            </div>
                            <div id='Amount' className="Statsbox">
                                <div className="boardStats"><span><BiCoinStack /></span></div>
                                <div className="StatsBoxUp">
                                    <p>Paid for this month</p>
                                </div>
                                <div className="StatBoxText">
                                    <h2>218 000 <p>so’m</p></h2>
                                    <p>from 1 218 000 so’m</p>
                                </div>
                                <div className="PropStats"></div>
                            </div>
                            <div id='Amount' className="Statsbox">
                                <div className="boardStats"><span><CiCalendar /></span></div>
                                <div className="StatsBoxUp">
                                    <p>Debt for this month</p>
                                </div>
                                <div id='Debt' className="StatBoxText">
                                    <h2>1 000 000 <p>so’m</p></h2>
                                    <p>from 1 218 000 so’m</p>
                                </div>
                                <div className="PropStats"></div>
                            </div>
                            <div id='Amount' className="Statsbox">
                                <div className="boardStats"><span><PiHandCoins /></span></div>
                                <div className="StatsBoxUp">
                                    <p>All debt</p>
                                </div>
                                <div id='Debt' className="StatBoxText">
                                    <h2>1 105 000 <p>so’m</p></h2>
                                    <p>from all periods</p>
                                </div>
                                <div className="PropStats"></div>
                            </div>
                        </div>
                        <div className="ContactsLeadImfo">
                            <div className="Contacts">
                                <div className="ContactsTitle">
                                    <span><LuUserSquare2 /></span>
                                    <p>Contacts</p>
                                </div>
                                <div className="ContactContant">
                                    <div className="ContactsLeft">
                                        <div className="ContactLeftPhone">
                                            <h3>Phone number:</h3>
                                            <p>+998 99 966 7363</p>
                                        </div>
                                        <div className="ContactLeftSecondary">
                                            <h3>Secondary number:</h3>
                                            <p>+998 91 914 65 50</p>
                                        </div>
                                        <div className="ContactLeftBirthday">
                                            <h3>Birthday:</h3>
                                            <p>28.02.2001</p>
                                        </div>
                                        <div className="ContactLeftGender">
                                            <h3>Gender:</h3>
                                            <p>Male</p>
                                        </div>
                                    </div>
                                    <div className="ContactsRight">
                                        <div className="ContactsRightAdress">
                                            <h3>Adress:</h3>
                                            <p> Adress name</p>
                                        </div>
                                        <div className="ContactsRightTelegram">
                                            <h3>Telegram profile:</h3>
                                            <p>username</p>
                                        </div>
                                        <div className="ContactsRightInstagram">
                                            <h3>Instagram profile:</h3>
                                            <p>username</p>
                                        </div>
                                        <div className="ContactsRightEmail">
                                            <h3>E-mail:</h3>
                                            <p>admin@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="LeadInfo">
                                <div className="ContactsTitle">
                                    <span><LiaFileAltSolid /> </span>
                                    <p>Lead informations</p>
                                </div>
                                <div className="LeacContant">
                                    <div className="ContactsLeft">
                                        <div className="ContactLeftPhone">
                                            <h3>Subject:</h3>
                                            <p>General English: Beginner level</p>
                                        </div>
                                        <div className="ContactLeftSecondary">
                                            <h3>Lesson type:</h3>
                                            <p>Group</p>
                                        </div>
                                        <div className="ContactLeftBirthday">
                                            <h3>Teacher:</h3>
                                            <p>Mr.Alibek</p>
                                        </div>
                                        <div className="ContactLeftGender">
                                            <h3>Lesson time:</h3>
                                            <p>08:00 - 09:00</p>
                                        </div>
                                    </div>
                                    <div className="ContactsRight">
                                        <div className="ContactsRightAdress">
                                            <h3>Added date:</h3>
                                            <p> 02.28.2023</p>
                                        </div>
                                        <div className="ContactsRightTelegram">
                                            <h3>Changed date :</h3>
                                            <p> 01.06.2024</p>
                                        </div>
                                        <div className="ContactsRightInstagram">
                                            <h3>Study dates:</h3>
                                            <p>not aviable</p>
                                        </div>
                                        <div className="ContactsRightEmail">
                                            <h3>Adversiting source: </h3>
                                            <p id='InfoWeb'>Web site</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="CommentsPayHistory">
                            <div className="UserComments">
                                <div className="UserComTitle">
                                    <span><CiBookmarkCheck /></span>
                                    <p>Comments</p>
                                </div>
                                <div className="UserCommentContant">
                                    <div className="UserCommentBox">
                                        <div className="UserComText">
                                            <div className="UserComUp">
                                                <p>John Smith</p>
                                                <span><BsThreeDotsVertical /></span>
                                            </div>
                                            <div className="USerComDuwn">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                                <span>02.04.2024  18:42 </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="UserCommentBox">
                                        <div className="UserComText">
                                            <div className="UserComUp">
                                                <p>John Smith</p>
                                                <span><BsThreeDotsVertical /></span>
                                            </div>
                                            <div className="USerComDuwn">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                                <span>02.04.2024  18:42 </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="UserCommentBox">
                                        <div className="UserComText">
                                            <div className="UserComUp">
                                                <p>John Smith</p>
                                                <span><BsThreeDotsVertical /></span>
                                            </div>
                                            <div className="USerComDuwn">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                                <span>02.04.2024  18:42 </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="UserCommentBox">
                                        <div className="UserComText">
                                            <div className="UserComUp">
                                                <p>John Smith</p>
                                                <span><BsThreeDotsVertical /></span>
                                            </div>
                                            <div className="USerComDuwn">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                                <span>02.04.2024  18:42 </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="CommentSend">
                                    <textarea name="" id="" placeholder="Enter your comment"></textarea>
                                    <button className="submit"><VscSend /></button>
                                </div>
                            </div>
                            <div className="PayHistory">
                                <div className="UserComTitle">
                                    <span><CiBookmarkCheck /></span>
                                    <p>Payments history</p>
                                </div>
                                <div className="PayHistoryContant">
                                    <div className="PayHistoryTitle">
                                        <p id='Transaction'>Transaction id</p>
                                        <p id='Amountp'>Amount</p>
                                        <p id='TypeP'>Type</p>
                                        <p id='CourseP'>Course</p>
                                        <p id='DateP'>Date</p>
                                    </div>
                                    <div className="PayContant">
                                        <div className="PayBox">
                                            <div className="Transaction">
                                                <span><IoMdCloseCircleOutline /></span>
                                                <p>125304539</p>
                                            </div>
                                            <div className="Abount">
                                                <p>+ 330 000 so’m</p>
                                            </div>
                                            <div className="TypeP">
                                                <p>Payme</p>
                                            </div>
                                            <div className="Cource">
                                                <p>TTS - 14:00 Mr.Aleksey</p>
                                            </div>
                                            <div className="DateP">
                                                <p>06.05.2024</p>
                                                <span><FaChevronDown /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'Lesson & homework':
                return <div>Lesson & Homework Content</div>;
            case 'Finance':
                return
                <div className='stPage_Finance'>
                    <div className="stPage_Finance_header">
                        <div className="stPage_Finance_header_box_1">
                            <div className="stPage_Finance_header_box_1_head">
                                <p>Profile</p>
                                <button>Actiive</button>
                            </div>
                            <div className="stPage_Finance_header_box_1_infos">
                                <div>
                                    <label htmlFor="">Full name</label>
                                </div>
                            </div>
                        </div>
                        <div className="stPage_Finance_header_box2">

                        </div>
                        <div className="stPage_Finance_header_box3">

                        </div>
                    </div>  
                </div>;
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
