import { useState } from "react";

export default function LeadCard({ closeModal }) {
    const [menuStatus, setMenuStatus] = useState(1);
    const [smsMenu, setSmsMenu] = useState(1);
    const [commentMenu, setCommentMenu] = useState(1);

    const handleModalContentClick = (e) => {
        e.stopPropagation(); // Prevent the modal content clicks from propagating to the modal background
    };

    return (
        <div className="LeadsCard" onClick={closeModal}>
            <div className="LeadsCardContent" onClick={handleModalContentClick}>
                <div className="LeadsCardNav">
                    <button onClick={closeModal} className="LeadsCardNav__closeBtn">X</button>
                    <div className="LeadsCardNavText">
                        <h2>Lead card</h2>
                        <p>Are you sure you want to edit the lead card?</p>
                    </div>
                </div>
                <div className="LeadsCard__menu">
                    <button onClick={() => setMenuStatus(1)}>Information</button>
                    <button onClick={() => setMenuStatus(2)}>Sms</button>
                    <button onClick={() => setMenuStatus(3)}>Comments</button>
                    <button onClick={() => setMenuStatus(4)}>History</button>
                </div>
                {menuStatus === 1 && (
                    <div className="menuChil_information">
                        <div className="menuChil_information__chil">
                            <label htmlFor="">First name*</label>
                            <input type="text" placeholder="john" />
                        </div>
                        <div className="menuChil_information__chil">
                            <label htmlFor="">Last name*</label>
                            <input type="text" placeholder="Anderson" />
                        </div>
                        <div className="menuChil_information__chil">
                            <label htmlFor="">Phone number*</label>
                            <input type="text" placeholder="+998" />
                        </div>
                        <div className="menuChil_information__chil">
                            <label htmlFor="">Select subject*</label>
                            <select name="" id="">
                                <option value="">Subject 1</option>
                                <option value="">Subject 2</option>
                            </select>
                        </div>
                        <div className="menuChil_information__chil">
                            <label htmlFor="">Select lesson type*</label>
                            <select name="" id="">
                                <option value="">Subject 1</option>
                                <option value="">Subject 2</option>
                            </select>
                        </div>
                        <div className="menuChil_information__chil">
                            <label htmlFor="">Select teacher*</label>
                            <select name="" id="">
                                <option value="">Subject 1</option>
                                <option value="">Subject 2</option>
                            </select>
                        </div>
                        <div className="menuChil_information__chil">
                            <label htmlFor="">Select lesson time*</label>
                            <select name="" id="">
                                <option value="">Subject 1</option>
                                <option value="">Subject 2</option>
                            </select>
                        </div>
                        <div className="menuChil_information__chil">
                            <label htmlFor="">Select lead source*</label>
                            <select name="" id="">
                                <option value="">Subject 1</option>
                                <option value="">Subject 2</option>
                            </select>
                        </div>
                    </div>
                )}
                {menuStatus === 2 && (
                    <div className="menuChil_sms">
                        {smsMenu === 1 ? (
                            <div className="menuChil_sms_messages">
                                <div className="menuChil_sms_message">
                                    <div className="sms_border_box">
                                        <div className="sms_box">
                                            <div className="sms_box_name">
                                                <h2>John Anderson</h2>
                                                <p>Sent</p>
                                            </div>
                                            <div className="sms_box_massage">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                                            </div>
                                            <div className="sms_box_sendtime">
                                                <p>02.04.2024  18:42 </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sms_border_box">
                                        <div className="sms_box">
                                            <div className="sms_box_name">
                                                <h2>John Anderson</h2>
                                                <p>Sent</p>
                                            </div>
                                            <div className="sms_box_massage">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                                            </div>
                                            <div className="sms_box_sendtime">
                                                <p>02.04.2024  18:42 </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sms_border_box">
                                        <div className="sms_box">
                                            <div className="sms_box_name">
                                                <h2>John Anderson</h2>
                                                <p>Sent</p>
                                            </div>
                                            <div className="sms_box_massage">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                                            </div>
                                            <div className="sms_box_sendtime">
                                                <p>02.04.2024  18:42 </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => setSmsMenu(2)} className="menuChil_sms_message_sendBtn">New sms</button>
                            </div>
                        ) : (
                            <div className="menuChil_sms_messagesSend">
                                <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur necessitatibus eos molestiae omnis consequuntur accusantium dolores id placeat. Mollitia, quasi?"></textarea>
                                <div className="menuChil_sms_messagesSend_menuBtns">
                                    <button>{'<'}</button>
                                    <button>Name Surname</button>
                                    <button>Subject name</button>
                                    <button>Teacher name</button>
                                    <button>{'>'}</button>
                                </div>
                                <div className="menuChil_sms_messagesSend_endBtns">
                                    <button onClick={() => setSmsMenu(1)}>Back to sms history</button>
                                    <button>Send</button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
                {menuStatus === 3 && (
                    <div className="menuChil_sms">
                        {commentMenu === 1 ? (
                            <div className="menuChil_sms_messages">
                                <div className="menuChil_sms_message">
                                    <div className="menuChil_sms_message_box">
                                        <h4 className="menuChil_sms_message_date">22.05.2024 02:33</h4>
                                        <div className="menuChil_sms_message_box_texts">
                                            <h4 className="menuChil_sms_message_box_title">Jhon Anderson</h4>
                                            <p className="menuChil_sms_message_box_desck">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quo laborum ipsum quasi pariatur qui possimus tempora esse quidem aliquid?</p>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => setCommentMenu(2)} className="menuChil_sms_message_sendBtn">Add new comment</button>
                            </div>
                        ) : (
                            <div className="menuChil_sms_messagesSend">
                                <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur necessitatibus eos molestiae omnis consequuntur accusantium dolores id placeat. Mollitia, quasi?"></textarea>
                                <div className="menuChil_sms_messagesSend_menuBtns">
                                    <button>{'<'}</button>
                                    <button>Name Surname</button>
                                    <button>Subject name</button>
                                    <button>Teacher name</button>
                                    <button>{'>'}</button>
                                </div>
                                <div className="menuChil_sms_messagesSend_endBtns">
                                    <button onClick={() => setCommentMenu(1)}>Back to comment history</button>
                                    <button>Submit</button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
                {menuStatus === 4 && (
                    <div className="menuChil_sms_message">
                        <div className="menuChil_sms_message_box">
                            <h4 className="menuChil_sms_message_status">Send</h4>
                            <h4 className="menuChil_sms_message_date">22.05.2024 02:33</h4>
                            <div className="menuChil_sms_message_box_texts">
                                <h4 className="menuChil_sms_message_box_title">Jhon Anderson</h4>
                                <p className="menuChil_sms_message_box_desck">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quo laborum ipsum quasi pariatur qui possimus tempora esse quidem aliquid?</p>
                            </div>
                        </div>
                    </div>
                )}
                <div className="LeadsCard_bottomBtns">
                    <button id="save">Save</button>
                    <button onClick={closeModal}>Cancel</button>
                </div>
            </div>
        </div>
    );

}
