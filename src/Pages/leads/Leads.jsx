import React, { useState, useRef, useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { TbFilter } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa6";
import { RiMoreFill } from "react-icons/ri";
import { IoMdRefresh } from "react-icons/io";
import { SlGraduation } from "react-icons/sl";
import { PiTelevisionSimple } from "react-icons/pi";
import { RiLinkUnlinkM } from "react-icons/ri";
import { RxPinRight } from "react-icons/rx";
import { TfiTime } from "react-icons/tfi";
import './leads.css'
import img from '../../Assets/teacher.png'
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import DeleteModal from '../../components/DeleteModal/DeleteModal';
import ModalMake from './../../components/ModalMake/ModalMake';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import LeadCard from './LeadCard';



const Leads = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [showButtons, setShowButtons] = useState(false); // State to control visibility of buttons
    const [data, setData] = useState([
        { No: 1, id: '015862', name: 'John Smith', phoneNumber: '+998 99 966 73 63', subjectType: 'General English', lessonType: 'Individual', applicationSource: 'Web site' },
        { No: 2, id: '015862', name: 'John Smith', phoneNumber: '+998 99 966 73 63', subjectType: 'General English', lessonType: 'Individual', applicationSource: 'Web site' },
        { No: 3, id: '015862', name: 'John Smith', phoneNumber: '+998 99 966 73 63', subjectType: 'General English', lessonType: 'Individual', applicationSource: 'Web site' },
        { No: 4, id: '015862', name: 'John Smith', phoneNumber: '+998 99 966 73 63', subjectType: 'General English', lessonType: 'Individual', applicationSource: 'Web site' },
        { No: 5, id: '015862', name: 'John Smith', phoneNumber: '+998 99 966 73 63', subjectType: 'General English', lessonType: 'Individual', applicationSource: 'Web site' },
        { No: 6, id: '015862', name: 'John Smith', phoneNumber: '+998 99 966 73 63', subjectType: 'General English', lessonType: 'Individual', applicationSource: 'Web site' },
        { No: 7, id: '015862', name: 'John Smith', phoneNumber: '+998 99 966 73 63', subjectType: 'General English', lessonType: 'Individual', applicationSource: 'Web site' },
        { No: 8, id: '015862', name: 'John Smith', phoneNumber: '+998 99 966 73 63', subjectType: 'General English', lessonType: 'Individual', applicationSource: 'Web site' },
        { No: 9, id: '015862', name: 'John Smith', phoneNumber: '+998 99 966 73 63', subjectType: 'General English', lessonType: 'Individual', applicationSource: 'Web site' },
        { No: 10, id: '015862', name: 'John Smith', phoneNumber: '+998 99 966 73 63', subjectType: 'General English', lessonType: 'Individual', applicationSource: 'Web site' },
        { No: 11, id: '015862', name: 'John Smith', phoneNumber: '+998 99 966 73 63', subjectType: 'General English', lessonType: 'Individual', applicationSource: 'Web site' },
        { No: 12, id: '015862', name: 'John Smith', phoneNumber: '+998 99 966 73 63', subjectType: 'General English', lessonType: 'Individual', applicationSource: 'Web site' },
        { No: 13, id: '015862', name: 'John Smith', phoneNumber: '+998 99 966 73 63', subjectType: 'General English', lessonType: 'Individual', applicationSource: 'Web site' },
        { No: 14, id: '015862', name: 'John Smith', phoneNumber: '+998 99 966 73 63', subjectType: 'General English', lessonType: 'Individual', applicationSource: 'Web site' },
        { No: 15, id: '015862', name: 'John Smith', phoneNumber: '+998 99 966 73 63', subjectType: 'General English', lessonType: 'Individual', applicationSource: 'Web site' },
        // Your data here
    ]);
    const [active, setActive] = useState(false); // Assuming `active` is defined elsewhere
    const [isOpenFilter, setIsOpenFilter] = useState(false);
    const [isOpenSelect, setIsOpenSelect] = useState(null);
    const [isNewLeadVisible, setIsNewLeadVisible] = useState(true);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showModal, setShowModal] = useState(false); // State for showing/hiding the modal window

    useEffect(() => {
        // Check if any items are selected
        const anySelected = selectedItems.length > 0;
        // Show buttons if at least one item is selected
        setShowButtons(anySelected);
    }, [selectedItems]);

    const toggleCheckbox = (index) => {
        const selectedIndex = selectedItems.indexOf(index);
        if (selectedIndex === -1) {
            setSelectedItems([...selectedItems, index]);
        } else {
            const updatedSelectedItems = [...selectedItems];
            updatedSelectedItems.splice(selectedIndex, 1);
            setSelectedItems(updatedSelectedItems);
        }
        setShowButtons(selectedItems.length > 0); // Show buttons if any checkbox is selected

        // Remove the selected item from the data array if it's active
        if (active && selectedIndex !== -1) {
            const updatedData = [...data];
            updatedData.splice(index, 1);
            setData(updatedData);
        }
    };

    const toggleSelectAll = () => {
        if (selectAll) {
            setSelectedItems([]);
            setShowButtons(false); // Hide buttons when deselecting all checkboxes
        } else {
            const allIndexes = Array.from({ length: data.length }, (_, i) => i);
            setSelectedItems(allIndexes);
            setShowButtons(true); // Show buttons when selecting all checkboxes
        }
        setSelectAll(!selectAll);
        setShowButtons(selectedItems.length > 0);
    };

    useEffect(() => {
        setShowButtons(active && (selectedItems.length > 0 || selectAll)); // Show buttons only in the "Applications" section and if at least one item is selected or all items are selected
    }, [active, selectedItems, selectAll]);

    // Function to delete selected items
    const handleDelete = () => {
        // Here you can add logic to delete selected items
        // For example, you can filter the data, leaving only unselected items
        const updatedData = data.filter((_, index) => !selectedItems.includes(index));
        setData(updatedData);
        // Reset selected items and "select all" state
        setSelectedItems([]);
        setSelectAll(false);
    };

    // Handler to open the modal window
    const handleOpenModal = () => {
        setShowModal(true);
    };

    // Handler to close the modal window
    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleYesModal = () => {
        setShowModal(false);
    };

    const handleDeleteClick = () => {
        setShowDeleteModal(true);
    };

    const handleDeleteConfirm = () => {
        // Here should be logic to delete selected items
        // After deletion, close the modal window
        setShowDeleteModal(false);
    };

    const handleDeleteCancel = () => {
        setShowDeleteModal(false);
    };

    const handleApplicationsClick = () => {
        setActive(true);
        setIsNewLeadVisible(false); // Hide the "New lead" button
    };

    const handleLeadsClick = () => {
        setActive(false);
        setIsNewLeadVisible(true); // Show the "New lead" button
        setShowButtons(false); // Hide buttons
    };

    const [isOpenModal, setIsOpenModal] = useState(false)

    const closeModalOnOff = () => {
        setIsOpenModal(!isOpenModal);
    };


    const content = !active ? (
        <div className="LeadsMain">
            <div className="LeadsMain_table">
                <button className='topBtn'>New leads</button>
                <div className="LeadsMain_table_lists">
                    <div className="LeadsMain_table_list" onClick={closeModalOnOff}>
                        {isOpenModal && <LeadCard closeModal={closeModalOnOff} />}
                        <div className="LeadsMain_table_list_top">
                            <p>Alisher Atajanov</p>
                            <button><RiMoreFill /></button>
                        </div>
                        <div className="LeadsMain_table_list_phone">
                            <p>+998 99 966 73 63</p>
                        </div>
                        <div className="LeadsMain_table_list_menu">
                            <div>
                                <button><SlGraduation />General english</button>
                                <button><PiTelevisionSimple />Type: Individual</button>
                                <button><img src={img} alt="" />Mr. Alibek</button>
                            </div>
                            <div>
                                <button><RiLinkUnlinkM />Instagram</button>
                                <button><RxPinRight />Room 2-2</button>
                                <button><TfiTime />08:00 - 09:00</button>
                            </div>
                        </div>
                    </div>
                    <div className="LeadsMain_table_list">
                        <div className="LeadsMain_table_list_top">
                            <p>Alisher Atajanov</p>
                            <button><RiMoreFill /></button>
                        </div>
                        <div className="LeadsMain_table_list_phone">
                            <p>+998 99 966 73 63</p>
                        </div>
                        <div className="LeadsMain_table_list_menu">
                            <div>
                                <button><SlGraduation />General english</button>
                                <button><PiTelevisionSimple />Type: Individual</button>
                                <button><img src={img} alt="" />Mr. Alibek</button>
                            </div>
                            <div>
                                <button><RiLinkUnlinkM />Instagram</button>
                                <button><RxPinRight />Room 2-2</button>
                                <button><TfiTime />08:00 - 09:00</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="LeadsMain_table">
                <button className='topBtn'>Contacted</button>
                <div className="LeadsMain_table_lists">
                    <div className="LeadsMain_table_list">
                        <div className="LeadsMain_table_list_top">
                            <p>Alisher Atajanov</p>
                            <button><RiMoreFill /></button>
                        </div>
                        <div className="LeadsMain_table_list_phone">
                            <p>+998 99 966 73 63</p>
                        </div>
                        <div className="LeadsMain_table_list_menu">
                            <div>
                                <button><SlGraduation />General english</button>
                                <button><PiTelevisionSimple />Type: Individual</button>
                                <button><img src={img} alt="" />Mr. Alibek</button>
                            </div>
                            <div>
                                <button><RiLinkUnlinkM />Instagram</button>
                                <button><RxPinRight />Room 2-2</button>
                                <button><TfiTime />08:00 - 09:00</button>
                            </div>
                        </div>
                    </div>
                    <div className="LeadsMain_table_list">
                        <div className="LeadsMain_table_list_top">
                            <p>Alisher Atajanov</p>
                            <button><RiMoreFill /></button>
                        </div>
                        <div className="LeadsMain_table_list_phone">
                            <p>+998 99 966 73 63</p>
                        </div>
                        <div className="LeadsMain_table_list_menu">
                            <div>
                                <button><SlGraduation />General english</button>
                                <button><PiTelevisionSimple />Type: Individual</button>
                                <button><img src={img} alt="" />Mr. Alibek</button>
                            </div>
                            <div>
                                <button><RiLinkUnlinkM />Instagram</button>
                                <button><RxPinRight />Room 2-2</button>
                                <button><TfiTime />08:00 - 09:00</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="LeadsMain_table">
                <button className='topBtn'>Trial lesson</button>
                <div className="LeadsMain_table_lists">
                    <div className="LeadsMain_table_list">
                        <div className="LeadsMain_table_list_top">
                            <p>Alisher Atajanov</p>
                            <button><RiMoreFill /></button>
                        </div>
                        <div className="LeadsMain_table_list_phone">
                            <p>+998 99 966 73 63</p>
                        </div>
                        <div className="LeadsMain_table_list_menu">
                            <div>
                                <button><SlGraduation />General english</button>
                                <button><PiTelevisionSimple />Type: Individual</button>
                                <button><img src={img} alt="" />Mr. Alibek</button>
                            </div>
                            <div>
                                <button><RiLinkUnlinkM />Instagram</button>
                                <button><RxPinRight />Room 2-2</button>
                                <button><TfiTime />08:00 - 09:00</button>
                            </div>
                        </div>
                    </div>
                    <div className="LeadsMain_table_list">
                        <div className="LeadsMain_table_list_top">
                            <p>Alisher Atajanov</p>
                            <button><RiMoreFill /></button>
                        </div>
                        <div className="LeadsMain_table_list_phone">
                            <p>+998 99 966 73 63</p>
                        </div>
                        <div className="LeadsMain_table_list_menu">
                            <div>
                                <button><SlGraduation />General english</button>
                                <button><PiTelevisionSimple />Type: Individual</button>
                                <button><img src={img} alt="" />Mr. Alibek</button>
                            </div>
                            <div>
                                <button><RiLinkUnlinkM />Instagram</button>
                                <button><RxPinRight />Room 2-2</button>
                                <button><TfiTime />08:00 - 09:00</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="LeadsMain_table">
                <button className='topBtn' id='summary'>Summary</button>
                <div className="LeadsMain_table_lists">
                    <div className="LeadsMain_table_list">
                        <div className="LeadsMain_table_list_top">
                            <p>Alisher Atajanov</p>
                            <button><RiMoreFill /></button>
                        </div>
                        <div className="LeadsMain_table_list_phone">
                            <p>+998 99 966 73 63</p>
                        </div>
                        <div className="LeadsMain_table_list_menu">
                            <div>
                                <button><SlGraduation />General english</button>
                                <button><PiTelevisionSimple />Type: Individual</button>
                                <button><img src={img} alt="" />Mr. Alibek</button>
                            </div>
                            <div>
                                <button><RiLinkUnlinkM />Instagram</button>
                                <button><RxPinRight />Room 2-2</button>
                                <button><TfiTime />08:00 - 09:00</button>
                            </div>
                        </div>
                    </div>
                    <div className="LeadsMain_table_list">
                        <div className="LeadsMain_table_list_top">
                            <p>Alisher Atajanov</p>
                            <button><RiMoreFill /></button>
                        </div>
                        <div className="LeadsMain_table_list_phone">
                            <p>+998 99 966 73 63</p>
                        </div>
                        <div className="LeadsMain_table_list_menu">
                            <div>
                                <button><SlGraduation />General english</button>
                                <button><PiTelevisionSimple />Type: Individual</button>
                                <button><img src={img} alt="" />Mr. Alibek</button>
                            </div>
                            <div>
                                <button><RiLinkUnlinkM />Instagram</button>
                                <button><RxPinRight />Room 2-2</button>
                                <button><TfiTime />08:00 - 09:00</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div>
            <div className="LeadsTable">
                <table>
                    <thead>
                        <tr>
                            <th>
                                <input
                                    type="checkbox"
                                    checked={selectAll}
                                    onChange={toggleSelectAll}
                                />
                            </th>
                            <th><span>#</span></th>
                            <th><span>Id</span></th>
                            <th><span>Name</span></th>
                            <th><span>Subject type</span></th>
                            <th><span>Lesson type</span></th>
                            <th><span>Application source</span></th>
                            <th><span></span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr id='content_Application' key={index} className={selectedItems.includes(index) ? "selected" : ""}>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={selectedItems.includes(index)}
                                        onChange={() => toggleCheckbox(index)}
                                    />
                                </td>
                                <td><span>{index + 1}</span></td>
                                <td><span>{item.id}</span></td>
                                <td><span>{item.name}</span></td>
                                <td><span>{item.subjectType}</span></td>
                                <td><span>{item.lessonType}</span></td>
                                <td><span>{item.applicationSource}</span></td>
                                <td><span>...</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {showButtons && (
                <div className="Bottom_Button">
                    <div className="selected">
                        <p>Selected: {selectedItems.length}</p>
                    </div>
                    <div className="Selected_button">
                        <button><FaAngleLeft /> Previous page</button>
                        <div className="Selected_number_buttom">
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>4</button>
                            <button>5</button>
                        </div>
                        <button><FaAngleRight /> Next page</button>
                    </div>
                </div>
            )}
        </div>
    );

    return (
        <div className="LeadsBox">
            <div className="LeadsNav">
                <div className="LeadsNav_chill">
                    <div className="LeadsNav_chill_menuSelect">
                        <button onClick={() => setActive(false)} className={!active ? 'active' : null}>Leads</button>
                        <button onClick={() => setActive(true)} className={active ? 'active' : null}>Applications</button>
                    </div>
                    <div className="LeadsNav_chill_menuBar">
                        <button className="search"><IoSearchSharp /></button>
                        <button className="filter" onClick={() => setIsOpenFilter(!isOpenFilter)}><TbFilter />Filters</button>
                        {!active && <button className="creted"><FiUser />New lead</button>}
                        {showButtons && (
                            <div className='ShowButtons'>
                                <button className="Make" onClick={handleOpenModal}><IoMdCheckmarkCircleOutline />Make a lead</button>
                                <button className="Delete" onClick={handleDeleteClick}><RiDeleteBin6Line />Delete</button>
                            </div>
                        )}
                        {showDeleteModal && (
                            <DeleteModal
                                onCancel={handleDeleteCancel}
                                onDelete={handleDeleteConfirm}
                            />
                        )}
                        {showModal && (
                            <ModalMake
                                onClose={handleCloseModal}
                                onYes={handleYesModal}
                            >
                                <h2>Modal Content</h2>
                                <p>This is the content of the modal.</p>
                            </ModalMake>
                        )}

                    </div>
                </div>
                {
                    isOpenFilter ? (
                        <div className="filter">
                            <div className="select">
                                <button onClick={() => setIsOpenSelect(!isOpenSelect)}>Date <FaChevronDown /></button>
                                {
                                    isOpenSelect ? (
                                        <ul>
                                            <li>Hello 1</li>
                                            <li>Hello 2</li>
                                            <li>Hello 3</li>
                                            <li>Hello 4</li>
                                            <li>Hello 5</li>
                                        </ul>
                                    ) : null
                                }
                            </div>
                            <div className="select">
                                <button onClick={() => setIsOpenSelect(!isOpenSelect)}>Room <FaChevronDown /></button>
                                {
                                    isOpenSelect ? (
                                        <ul>
                                            <li>Hello 1</li>
                                            <li>Hello 2</li>
                                            <li>Hello 3</li>
                                            <li>Hello 4</li>
                                            <li>Hello 5</li>
                                        </ul>
                                    ) : null
                                }
                            </div>

                            <button className="search"><IoMdRefresh /></button>
                        </div>
                    ) : null
                }
            </div>
            <div className="LeadsContent">
                {content}
            </div>
        </div>

    );
};

export default Leads;
