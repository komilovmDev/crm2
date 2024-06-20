import { GrMoney } from "react-icons/gr";
import { IoSearchSharp } from "react-icons/io5";
import { RiGraduationCapLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { MdOutlineDateRange } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { TbUserUp } from "react-icons/tb";
import { HiChevronUpDown } from 'react-icons/hi2'
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function NewLeadCard({ plusModal, setPlusModal }) {

    const [isOpenSearchData, setIsOpenSearchData] = useState(false);
    const [openMenuStatus, setOpenMenuStatus] = useState(0);
    const [studentMenuStatus, setStudentMenuStatus] = useState(0)
    const [selectType, setSelectType] = useState(1)

    return (
        <div className="newLeaadCardCon">
            <div className="newLeaadCard">
                <div className="newLeaadCard__Head">
                    <button onClick={() => setPlusModal(!plusModal)}><IoClose /></button>
                    <p>What are we adding?</p>
                </div>
                <div className="newLeaadCard__MenuBoxs">
                    <div className={openMenuStatus == 1 ? "newLeaadCard__MenuBox active" : "newLeaadCard__MenuBox"} onClick={() => setOpenMenuStatus(1)}>
                        <GrMoney />
                        <p className="newLeaadCard__MenuBox_title">Payment</p>
                        <p className="newLeaadCard__MenuBox_text">Add a new payment</p>
                    </div>
                    <div className={openMenuStatus == 2 ? "newLeaadCard__MenuBox active" : "newLeaadCard__MenuBox"} onClick={() => setOpenMenuStatus(2)}>
                        <RiGraduationCapLine />
                        <p className="newLeaadCard__MenuBox_title">Student</p>
                        <p className="newLeaadCard__MenuBox_text">Add a new student</p>
                    </div>
                    <div className={openMenuStatus == 3 ? "newLeaadCard__MenuBox active" : "newLeaadCard__MenuBox"} onClick={() => setOpenMenuStatus(3)}>
                        <FiUser />
                        <p className="newLeaadCard__MenuBox_title">Lead</p>
                        <p className="newLeaadCard__MenuBox_text">Add a new lead</p>
                    </div>
                </div>
                {openMenuStatus === 1 && (
                    <div className="newLeaadCard_paymentMenu">
                        <div className="newLeaadCard_paymentMenu_title">
                            <h2>Add a new student fee</h2>
                            <p>Search for a student by phone number or name, surname</p>
                        </div>
                        <form action="">
                            <div className="serach">
                                <IoSearchSharp />
                                <input onClick={() => setIsOpenSearchData(!isOpenSearchData)} type="text" placeholder="Global search" />
                                <div className={isOpenSearchData ? "search_data" : "none"}>
                                    {[...Array(9)].map((_, index) => (
                                        <div key={index}>
                                            <p>Alisher Atajanov</p>
                                            <p>+998 99 966 73 63</p>
                                            <p>- 182 000 so'm</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="select">
                                <label htmlFor="">Lesson</label>
                                <select>
                                    <option value="" selected disabled hidden>Select</option>
                                    <option value="hello1">hello1</option>
                                    <option value="hello2">hello2</option>
                                    <option value="hello3">hello3</option>
                                    <option value="hello4">hello4</option>
                                </select>
                            </div>
                            <div className="dataSelect">
                                <div>
                                    <label htmlFor="">Payment amount</label>
                                    <div>
                                        <GrMoney />
                                        <input type="text" placeholder="Amount" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="">Select date</label>
                                    <div>
                                        <MdOutlineDateRange />
                                        <input type="date" defaultValue={"Payment date"} />
                                    </div>
                                </div>
                            </div>
                            <div className="paymentType">
                                <label>Payment type</label>
                                <div>
                                    <div>
                                        <label htmlFor="">Cash</label>
                                        <input type="radio" />
                                    </div>
                                    <div>
                                        <label htmlFor="">Payoneer</label>
                                        <input type="radio" />
                                    </div>
                                    <div>
                                        <label htmlFor="">Paypal</label>
                                        <input type="radio" />
                                    </div>
                                    <div>
                                        <label htmlFor="">MasterCard</label>
                                        <input type="radio" />
                                    </div>
                                </div>
                            </div>
                            <div className="comment">
                                <label htmlFor="">Comment (optional)</label>
                                <textarea placeholder="Note for payment"></textarea>
                            </div>
                            <div className="price">
                                <div>
                                    Current balance: <span style={{ color: 'red' }}>-$233.03</span>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <label htmlFor="">Print a check</label>
                                </div>
                            </div>
                            <div className="footerBtns">
                                <button type="button">Cancel</button>
                                <button type="button">Confirm</button>
                            </div>
                        </form>
                    </div>
                )}
                {openMenuStatus === 2 && (
                    <div className="newLeaadCard_studentMenu">
                        {
                            studentMenuStatus == 0 ? (
                                <div className="newLeaadCard_studentMenu1">
                                    <div className="newLeaadCard_studentMenu_title">
                                        <h2>Add a new student</h2>
                                        <p>How do yo want to create a new student?</p>
                                    </div>
                                    <div className="newLeaadCard_studentMenu_Menu">
                                        <div onClick={() => setStudentMenuStatus(1)} className="newLeaadCard_studentMenu_Menu_btn1">
                                            <FiUser />
                                            <div className="newLeaadCard_studentMenu_Menu_btn1_text">
                                                <p>Add new student</p>
                                                <span>Create new student</span>
                                            </div>
                                        </div>
                                        <div onClick={() => setStudentMenuStatus(4)} className="newLeaadCard_studentMenu_Menu_btn1">
                                            <TbUserUp />
                                            <div className="newLeaadCard_studentMenu_Menu_btn1_text">
                                                <p>From customer</p>
                                                <span>Convert customer to student</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : studentMenuStatus == 1 ? (
                                <div className="newLeaadCard_studentMenu1_chil">
                                    <div className="newLeaadCard_studentMenu_title">
                                        <h2>Add a new student</h2>
                                        <p>Fill in the requested information below</p>
                                    </div>
                                    <div className="newLeaadCard_studentMenu1_chil_form">
                                        <div>
                                            <label htmlFor="">First name*</label>
                                            <input placeholder="John" type="text" />
                                        </div>
                                        <div>
                                            <label htmlFor="">Last name*</label>
                                            <input placeholder="Anderson" type="text" />
                                        </div>
                                        <div>
                                            <label htmlFor="">Phone number*</label>
                                            <input placeholder="+998" type="text" />
                                        </div>
                                        <div>
                                            <label htmlFor="">Brihday*</label>
                                            <input placeholder="select" type="date" />
                                        </div>
                                        <div className="newLeaadCard_studentMenu1_chil_form_select">
                                            <label htmlFor="">Select tyoe of lesson*</label>
                                            <div className="newLeaadCard_studentMenu1_chil_form_select_inputs">
                                                <div>
                                                    <input
                                                        onChange={() => setSelectType(2)}
                                                        type="radio"
                                                        name="lessonType"
                                                    />
                                                    <label htmlFor="">Individual lesson</label>
                                                </div>
                                                <div>
                                                    <input
                                                        onChange={() => setSelectType(3)}
                                                        type="radio"
                                                        name="lessonType"
                                                    />
                                                    <label htmlFor="">Group lesson</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="newLeaadCard_studentMenu_Menu_footerBtn">
                                        <button onClick={() => setStudentMenuStatus(0)}>Go back</button>
                                        <button onClick={() => setStudentMenuStatus(selectType)}>Next</button>
                                    </div>
                                </div>
                            ) : studentMenuStatus == 2 ? (
                                <div className="newLeaadCard_studentMenu1_chil">
                                    <div className="newLeaadCard_studentMenu_title">
                                        <h2>Add a new student</h2>
                                        <p>Fill in the requested information below</p>
                                        <p>Create individual lesson for <b>Alisher Atajanov</b></p>
                                    </div>
                                    <div className="newLeaadCard_studentMenu1_chil_form">
                                        <div>
                                            <label htmlFor="">Select subject*</label>
                                            <select name="" id="">
                                                <option value="">test1</option>
                                                <option value="">test2</option>
                                                <option value="">test3</option>
                                                <option value="">test4</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="">Select subject*</label>
                                            <select name="" id="">
                                                <option value="">test1</option>
                                                <option value="">test2</option>
                                                <option value="">test3</option>
                                                <option value="">test4</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="">Select subject*</label>
                                            <select name="" id="">
                                                <option value="">test1</option>
                                                <option value="">test2</option>
                                                <option value="">test3</option>
                                                <option value="">test4</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="">Select subject*</label>
                                            <select name="" id="">
                                                <option value="">test1</option>
                                                <option value="">test2</option>
                                                <option value="">test3</option>
                                                <option value="">test4</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="">Select subject*</label>
                                            <select name="" id="">
                                                <option value="">test1</option>
                                                <option value="">test2</option>
                                                <option value="">test3</option>
                                                <option value="">test4</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="">Select subject*</label>
                                            <select name="" id="">
                                                <option value="">test1</option>
                                                <option value="">test2</option>
                                                <option value="">test3</option>
                                                <option value="">test4</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="">Select subject*</label>
                                            <select name="" id="">
                                                <option value="">test1</option>
                                                <option value="">test2</option>
                                                <option value="">test3</option>
                                                <option value="">test4</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="">Select subject*</label>
                                            <select name="" id="">
                                                <option value="">test1</option>
                                                <option value="">test2</option>
                                                <option value="">test3</option>
                                                <option value="">test4</option>
                                            </select>
                                        </div>
                                        <div className="newLeaadCard_studentMenu1_chil_form_select">
                                            <div className="newLeaadCard_studentMenu1_chil_form_select_check">
                                                <label htmlFor="">Select tyoe of lesson*</label>
                                                <input type="checkbox" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="addCardInfo">
                                        <div className="addCardInfo1">
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">Total number of lesson: </label>
                                                <span>165</span>
                                            </div>
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">Total study duration:</label>
                                                <span>6 months</span>
                                            </div>
                                        </div>
                                        <div className="addCardInfo1">
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">Start time: </label>
                                                <span>17:00</span>
                                            </div>
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">End time</label>
                                                <span>19:00</span>
                                            </div>
                                        </div>
                                        <div className="addCardInfo1">
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">Start day: </label>
                                                <span>May 15</span>
                                            </div>
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">End day</label>
                                                <span>deckaber 15</span>
                                            </div>
                                        </div>
                                        <div className="addCardInfo1">
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">Monthly payment: </label>
                                                <span>200 000 so'm</span>
                                            </div>
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">Monthly discount:</label>
                                                <span>28 000 so'm</span>
                                            </div>
                                        </div>
                                        <div className="addCardInfo1">
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">Monthly payment: </label>
                                                <span>200 000 so'm</span>
                                            </div>
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">Monthly discount:</label>
                                                <span>28 000 so'm</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="newLeaadCard_studentMenu_Menu_footerBtn">
                                        <button onClick={() => setStudentMenuStatus(1)}>Go back</button>
                                        <button onClick={() => setStudentMenuStatus(2)}>Confrim</button>
                                    </div>
                                </div>
                            ) : studentMenuStatus == 3 ? (
                                <div className="newLeaadCard_studentMenu1_chil">
                                    <div className="newLeaadCard_studentMenu_title">
                                        <h2>Add a new student</h2>
                                        <p>Fill in the requested information below</p>
                                        <p>Select group to add <b>Alisher Atajanov</b></p>
                                    </div>
                                    <div className="newLeaadCard_studentMenu1_chil_form">
                                        <div>
                                            <label htmlFor="">Select subject*</label>
                                            <select name="" id="">
                                                <option value="">test1</option>
                                                <option value="">test2</option>
                                                <option value="">test3</option>
                                                <option value="">test4</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="">Select subject*</label>
                                            <select name="" id="">
                                                <option value="">test1</option>
                                                <option value="">test2</option>
                                                <option value="">test3</option>
                                                <option value="">test4</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="">Select subject*</label>
                                            <select name="" id="">
                                                <option value="">test1</option>
                                                <option value="">test2</option>
                                                <option value="">test3</option>
                                                <option value="">test4</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="">Select subject*</label>
                                            <select name="" id="">
                                                <option value="">test1</option>
                                                <option value="">test2</option>
                                                <option value="">test3</option>
                                                <option value="">test4</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="serachGroup">
                                        <div className="serachGroupInput">
                                            <IoSearchSharp />
                                            <input type="text" placeholder="Type the name of the group" />
                                        </div>
                                        <div className="serachGroupMenu">
                                            <div className="serachGroupMenu_nav">
                                                <span>
                                                    <p>Group names</p>
                                                    <HiChevronUpDown />
                                                </span>
                                                <span>
                                                    <p>Teacher</p>
                                                    <HiChevronUpDown />
                                                </span>
                                                <span>
                                                    <p>Time</p>
                                                    <HiChevronUpDown />
                                                </span>
                                            </div>
                                            <div className="serachGroupMenu_menu">
                                                <div>
                                                    <span>
                                                        <input type="radio" />
                                                        <p>General English: Beginner level</p>
                                                    </span>
                                                    <span>
                                                        <p>Mr.Johnson</p>
                                                    </span>
                                                    <span>
                                                        <p>TTS - 14:00</p>
                                                        <IoIosInformationCircleOutline />
                                                    </span>
                                                </div>
                                                <div>
                                                    <span>
                                                        <input type="radio" />
                                                        <p>General English: Beginner level</p>
                                                    </span>
                                                    <span>
                                                        <p>Mr.Johnson</p>
                                                    </span>
                                                    <span>
                                                        <p>TTS - 14:00</p>
                                                        <IoIosInformationCircleOutline />
                                                    </span>
                                                </div>
                                                <div>
                                                    <span>
                                                        <input type="radio" />
                                                        <p>General English: Beginner level</p>
                                                    </span>
                                                    <span>
                                                        <p>Mr.Johnson</p>
                                                    </span>
                                                    <span>
                                                        <p>TTS - 14:00</p>
                                                        <IoIosInformationCircleOutline />
                                                    </span>
                                                </div>
                                                <div>
                                                    <span>
                                                        <input type="radio" />
                                                        <p>General English: Beginner level</p>
                                                    </span>
                                                    <span>
                                                        <p>Mr.Johnson</p>
                                                    </span>
                                                    <span>
                                                        <p>TTS - 14:00</p>
                                                        <IoIosInformationCircleOutline />
                                                    </span>
                                                </div>
                                                <div>
                                                    <span>
                                                        <input type="radio" />
                                                        <p>General English: Beginner level</p>
                                                    </span>
                                                    <span>
                                                        <p>Mr.Johnson</p>
                                                    </span>
                                                    <span>
                                                        <p>TTS - 14:00</p>
                                                        <IoIosInformationCircleOutline />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="newLeaadCard_studentMenu1_chil_form">
                                        <div>
                                            <label htmlFor="">Monthly discount*</label>
                                            <input type="text" placeholder="Amount" />
                                        </div>
                                        <div>
                                            <label htmlFor="">Select start day*</label>
                                            <input type="date" />
                                        </div>
                                    </div>
                                    <div className="newLeaadCard_studentMenu1_chil_form_select">
                                        <div className="newLeaadCard_studentMenu1_chil_form_select_check">
                                            <label htmlFor="">Select tyoe of lesson*</label>
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                    <div className="addCardInfo">
                                        <div className="addCardInfo1">
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">Total number of lesson: </label>
                                                <span>165</span>
                                            </div>
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">Total study duration:</label>
                                                <span>6 months</span>
                                            </div>
                                        </div>
                                        <div className="addCardInfo1">
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">Start time: </label>
                                                <span>17:00</span>
                                            </div>
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">End time</label>
                                                <span>19:00</span>
                                            </div>
                                        </div>
                                        <div className="addCardInfo1">
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">Start day: </label>
                                                <span>May 15</span>
                                            </div>
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">End day</label>
                                                <span>deckaber 15</span>
                                            </div>
                                        </div>
                                        <div className="addCardInfo1">
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">Monthly payment: </label>
                                                <span>200 000 so'm</span>
                                            </div>
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">Monthly discount:</label>
                                                <span>28 000 so'm</span>
                                            </div>
                                        </div>
                                        <div className="addCardInfo1">
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">Monthly payment: </label>
                                                <span>200 000 so'm</span>
                                            </div>
                                            <div className="addCardInfo1_chil">
                                                <label htmlFor="">Monthly discount:</label>
                                                <span>28 000 so'm</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="newLeaadCard_studentMenu_Menu_footerBtn">
                                        <button onClick={() => setStudentMenuStatus(1)}>Go back</button>
                                        <button onClick={() => setStudentMenuStatus(3)}>Confrim</button>
                                    </div>
                                </div>
                            ) : studentMenuStatus == 4 ? (
                                <div className="newLeaadCard_studentMenu1_chil">
                                    <div className="newLeaadCard_studentMenu_title">
                                        <h2>Convert customer to student</h2>
                                        <p>Search for a customer by phone number or name, surname</p>
                                    </div>
                                    <div className="serach">
                                        <IoSearchSharp />
                                        <input onClick={() => setIsOpenSearchData(!isOpenSearchData)} type="text" placeholder="Global search" />
                                        <div className={isOpenSearchData ? "search_data" : "none"}>
                                            {[...Array(9)].map((_, index) => (
                                                <div key={index}>
                                                    <p>Alisher Atajanov</p>
                                                    <p>+998 99 966 73 63</p>
                                                    <p>- 182 000 so'm</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="newLeaadCard_studentMenu1_chil_form_select">
                                        <label htmlFor="">Select tyoe of lesson*</label>
                                        <div className="newLeaadCard_studentMenu1_chil_form_select_inputs">
                                            <div>
                                                <input
                                                    onChange={() => setSelectType(2)}
                                                    type="radio"
                                                    name="lessonType"
                                                />
                                                <label htmlFor="">Individual lesson</label>
                                            </div>
                                            <div>
                                                <input
                                                    onChange={() => setSelectType(3)}
                                                    type="radio"
                                                    name="lessonType"
                                                />
                                                <label htmlFor="">Group lesson</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="newLeaadCard_studentMenu_Menu_footerBtn">
                                        <button onClick={() => setStudentMenuStatus(0)}>Go back</button>
                                        <button onClick={() => setStudentMenuStatus(5)}>Next</button>
                                    </div>
                                </div>
                            ) : null
                        }
                    </div>
                )}{
                    openMenuStatus === 3 && (
                        <div className="newLeaadCard_studentMenu1_chil" style={{width: '80%', margin: '0 auto', marginLeft:'10%'}}>
                            <div className="newLeaadCard_studentMenu_title">
                                <h2>Add a new lead</h2>
                                <p>By creating a new laed , you will also be adding a new customer to customer base</p>
                            </div>
                            <div className="newLeaadCard_studentMenu1_chil_form">
                                <div>
                                    <label htmlFor="">Select subject*</label>
                                    <select name="" id="">
                                        <option value="">test1</option>
                                        <option value="">test2</option>
                                        <option value="">test3</option>
                                        <option value="">test4</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="">Select subject*</label>
                                    <select name="" id="">
                                        <option value="">test1</option>
                                        <option value="">test2</option>
                                        <option value="">test3</option>
                                        <option value="">test4</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="">Select subject*</label>
                                    <select name="" id="">
                                        <option value="">test1</option>
                                        <option value="">test2</option>
                                        <option value="">test3</option>
                                        <option value="">test4</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="">Select subject*</label>
                                    <select name="" id="">
                                        <option value="">test1</option>
                                        <option value="">test2</option>
                                        <option value="">test3</option>
                                        <option value="">test4</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="">Select subject*</label>
                                    <select name="" id="">
                                        <option value="">test1</option>
                                        <option value="">test2</option>
                                        <option value="">test3</option>
                                        <option value="">test4</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="">Select subject*</label>
                                    <select name="" id="">
                                        <option value="">test1</option>
                                        <option value="">test2</option>
                                        <option value="">test3</option>
                                        <option value="">test4</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="">Select subject*</label>
                                    <select name="" id="">
                                        <option value="">test1</option>
                                        <option value="">test2</option>
                                        <option value="">test3</option>
                                        <option value="">test4</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="">Select subject*</label>
                                    <select name="" id="">
                                        <option value="">test1</option>
                                        <option value="">test2</option>
                                        <option value="">test3</option>
                                        <option value="">test4</option>
                                    </select>
                                </div>
                            </div>
                            <div className="newLeaadCard_studentMenu_Menu_footerBtn">
                                <button onClick={() => setStudentMenuStatus(null)}>Canel</button>
                                <button onClick={() => setStudentMenuStatus(null)}>Confirm</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}
