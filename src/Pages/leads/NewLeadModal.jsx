import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";


export default function NewLeadModal({setNewLeadModal}) {

    const [showSelect, setShowSelect] = useState(false)

    return (
        <div className="newLeaadCardCon">
            <div className="newLeaadCard2">
                <button onClick={() => setNewLeadModal(false)}><IoClose /></button>
                <div className="AddLeadModal_title">
                    <p>Add new lead</p>
                    <p>By creating a new lead, you will also be adding a new customer to customer base</p>
                </div>
                <div className="newLeaadCard_studentMenu1_chil_form one1">
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
                </div>
                <div className="showMore" onClick={() => setShowSelect(!showSelect)}>
                    <p>Show more</p>
                    <div></div>
                    {
                        showSelect ? (
                            <IoIosArrowUp />
                        ) : (
                            <IoIosArrowDown />
                        )
                    }
                </div>
                {
                    showSelect && (
                        <div className="newLeaadCard_studentMenu1_chil_form one1">
                            <div>
                                <label htmlFor="">First name*</label>
                                <select name="" id="">
                                    <option value="">test1</option>
                                    <option value="">test2</option>
                                    <option value="">test3</option>
                                    <option value="">test4</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="">Last name*</label>
                                <select name="" id="">
                                    <option value="">test1</option>
                                    <option value="">test2</option>
                                    <option value="">test3</option>
                                    <option value="">test4</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="">Phone number*</label>
                                <select name="" id="">
                                    <option value="">test1</option>
                                    <option value="">test2</option>
                                    <option value="">test3</option>
                                    <option value="">test4</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="">Brihday*</label>
                                <select name="" id="">
                                    <option value="">test1</option>
                                    <option value="">test2</option>
                                    <option value="">test3</option>
                                    <option value="">test4</option>
                                </select>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}