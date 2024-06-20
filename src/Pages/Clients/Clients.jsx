import './Clients.css'
import { useState, useEffect } from 'react';
import { GoSearch } from "react-icons/go";
import { CiFilter } from "react-icons/ci";
import { LuUser } from "react-icons/lu";
import { HiChevronUpDown } from "react-icons/hi2";
import { FaStar } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FiChevronDown, FiUser } from "react-icons/fi";
import { VscDebugRestart } from "react-icons/vsc";
import { GoPlus } from "react-icons/go";
import { TbUser } from "react-icons/tb";
import { TbUserUp } from "react-icons/tb";
import { IoCloseOutline, IoSearchSharp, } from "react-icons/io5";
import { IoIosInformationCircleOutline } from 'react-icons/io'
import React from 'react';
import LeadCard from '../leads/LeadCard';
import { FaAngleDown } from "react-icons/fa6";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CustomSelect from '../../components/Seleect/Select';
import { Link } from 'react-router-dom';
import { CiShare1 } from "react-icons/ci";

export default function Client() {

    const options1 = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
    const options2 = ['Choice A', 'Choice B', 'Choice C'];
    const options3 = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

    const [clients, setClients] = useState([
        {
            number: 1,
            id: "000001",
            name: "Alisher Atajanov",
            age: "28 y.o",
            dob: "28.02.1996",
            points: 160,
            lesson: "Group 45",
            lessonDetail: "General English: Intermediate",
            status: "Active",
            studyStart: "02.03.2024",
            studyEnd: "03.09.2024",
            phoneNumber: "+998 99 966 73 63",
            balance: "- 180 000 so’m",
            lessonDglav: "General English",
            LessonDmain: "Intermediate level",
            sourcew: "Web site",
            sourceo: "Outdoor advertising",
        },
        {
            number: 1,
            id: "000002",
            name: "Alisher Atajanov",
            age: "28 y.o",
            dob: "28.02.1996",
            points: 160,
            lesson: "Group 45",
            lessonDetail: "General English: Intermediate",
            status: "Active",
            studyStart: "02.03.2024",
            studyEnd: "03.09.2024",
            phoneNumber: "+998 99 966 73 63",
            balance: "- 180 000 so’m",
            lessonDglav: "General English",
            LessonDmain: "Intermediate level",
            sourcew: "Web site",
            sourceo: "Outdoor advertising",
        },
        {
            number: 1,
            id: "000003",
            name: "Alisher Atajanov",
            age: "28 y.o",
            dob: "28.02.1996",
            points: 160,
            lesson: "Group 45",
            lessonDetail: "General English: Intermediate",
            status: "Active",
            studyStart: "02.03.2024",
            studyEnd: "03.09.2024",
            phoneNumber: "+998 99 966 73 63",
            balance: "- 180 000 so’m",
            lessonDglav: "General English",
            LessonDmain: "Intermediate level",
            sourcew: "Web site",
            sourceo: "Outdoor advertising",
        },
        {
            number: 1,
            id: "000004",
            name: "Alisher Atajanov",
            age: "28 y.o",
            dob: "28.02.1996",
            points: 160,
            lesson: "Group 45",
            lessonDetail: "General English: Intermediate",
            status: "Active",
            studyStart: "02.03.2024",
            studyEnd: "03.09.2024",
            phoneNumber: "+998 99 966 73 63",
            balance: "- 180 000 so’m",
            lessonDglav: "General English",
            LessonDmain: "Intermediate level",
            sourcew: "Web site",
            sourceo: "Outdoor advertising",
        },
        {
            number: 1,
            id: "000005",
            name: "Alisher Atajanov",
            age: "28 y.o",
            dob: "28.02.1996",
            points: 160,
            lesson: "Group 45",
            lessonDetail: "General English: Intermediate",
            status: "Active",
            studyStart: "02.03.2024",
            studyEnd: "03.09.2024",
            phoneNumber: "+998 99 966 73 63",
            balance: "- 180 000 so’m",
            lessonDglav: "General English",
            LessonDmain: "Intermediate level",
            sourcew: "Web site",
            sourceo: "Outdoor advertising",
        },
        {
            number: 1,
            id: "000006",
            name: "Alisher Atajanov",
            age: "28 y.o",
            dob: "28.02.1996",
            points: 160,
            lesson: "Group 45",
            lessonDetail: "General English: Intermediate",
            status: "Active",
            studyStart: "02.03.2024",
            studyEnd: "03.09.2024",
            phoneNumber: "+998 99 966 73 63",
            balance: "- 180 000 so’m",
            lessonDglav: "General English",
            LessonDmain: "Intermediate level",
            sourcew: "Web site",
            sourceo: "Outdoor advertising",
        },
        {
            number: 1,
            id: "000007",
            name: "Alisher Atajanov",
            age: "28 y.o",
            dob: "28.02.1996",
            points: 160,
            lesson: "Group 45",
            lessonDetail: "General English: Intermediate",
            status: "Active",
            studyStart: "02.03.2024",
            studyEnd: "03.09.2024",
            phoneNumber: "+998 99 966 73 63",
            balance: "- 180 000 so’m",
            lessonDglav: "General English",
            LessonDmain: "Intermediate level",
            sourcew: "Web site",
            sourceo: "Outdoor advertising",
        },
        {
            number: 1,
            id: "000008",
            name: "Alisher Atajanov",
            age: "28 y.o",
            dob: "28.02.1996",
            points: 160,
            lesson: "Group 45",
            lessonDetail: "General English: Intermediate",
            status: "Active",
            studyStart: "02.03.2024",
            studyEnd: "03.09.2024",
            phoneNumber: "+998 99 966 73 63",
            balance: "- 180 000 so’m",
            lessonDglav: "General English",
            LessonDmain: "Intermediate level",
            sourcew: "Web site",
            sourceo: "Outdoor advertising",
        },
        {
            number: 1,
            id: "000009",
            name: "Alisher Atajanov",
            age: "28 y.o",
            dob: "28.02.1996",
            points: 160,
            lesson: "Group 45",
            lessonDetail: "General English: Intermediate",
            status: "Active",
            studyStart: "02.03.2024",
            studyEnd: "03.09.2024",
            phoneNumber: "+998 99 966 73 63",
            balance: "- 180 000 so’m",
            lessonDglav: "General English",
            LessonDmain: "Intermediate level",
            sourcew: "Web site",
            sourceo: "Outdoor advertising",
        },
        {
            number: 1,
            id: "000010",
            name: "Alisher Atajanov",
            age: "28 y.o",
            dob: "28.02.1996",
            points: 160,
            lesson: "Group 45",
            lessonDetail: "General English: Intermediate",
            status: "Active",
            studyStart: "02.03.2024",
            studyEnd: "03.09.2024",
            phoneNumber: "+998 99 966 73 63",
            balance: "- 180 000 so’m",
            lessonDglav: "General English",
            LessonDmain: "Intermediate level",
            sourcew: "Web site",
            sourceo: "Outdoor advertising",
        },
    ]);


    const [activeRows, setActiveRows] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(10);
    const [view, setView] = useState('All Students');
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [modalContent, setModalContent] = useState('initial');
    const [activeDiv, setActiveDiv] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFiltersActive, setIsFiltersActive] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [formData, setFormData] = useState({ firstName: '', lastName: '', phoneNumber: '' });

    const handleDropdownSelection = (selection) => {
        setFormData(prevState => ({ ...prevState, dropdownSelection: selection }));
        setDropdownVisible(false);
    };

    const handleFormCheckboxChange = (e) => {
        const { name } = e.target;
        setFormData(prevState => ({
            ...prevState,
            individualLessons: name === 'individualLessons',
            groupLessons: name === 'groupLessons',
        }));
    };

    const handlePreviousPage = () => {
        setCurrentPage(prev => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage(prev => prev + 1);
    };

    useEffect(() => {
        setSelectAll(activeRows.length === clients.length);
    }, [activeRows, clients.length]);

    const handleSelectAllChange = () => {
        if (selectAll) {
            setActiveRows([]);
        } else {
            setActiveRows(clients.map(client => client.id));
        }
    };

    const handleRowCheckboxChange = (event, clientId) => {
        event.stopPropagation();
        const updatedActiveRows = activeRows.includes(clientId)
            ? activeRows.filter(id => id !== clientId)
            : [...activeRows, clientId];
        setActiveRows(updatedActiveRows);
    };

    const handleRowClick = (clientId) => {
        handleRowCheckboxChange({ stopPropagation: () => { } }, clientId);
    };

    const currentClients = clients.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
    const totalPages = Math.ceil(clients.length / rowsPerPage);

    const handleAddNewStudent = () => {
        setActiveDiv('addNewStudent');
        setModalContent('addNewStudent');
    };

    const handleAddNewCustomer = () => {
        setActiveDiv('addNewCustomer');
        setModalContent('addNewCustomer');
    };

    const handleNextButtonClick = () => {
        if (formData.individualLessons) {
            setModalContent('individualLesson');
        } else if (formData.groupLessons) {
            setModalContent('groupLesson');
        }
    };

    const handleGoBack = () => {
        if (modalContent === 'individualLesson' || modalContent === 'groupLesson') {
            setModalContent('addNewStudent');
        } else {
            setModalContent('initial');
        }
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    const [studentMenuStatus, setStudentMenuStatus] = useState(0)
    const [selectType, setSelectType] = useState(1)
    const [isOpenSearchData, setIsOpenSearchData] = useState(false);

    const renderContent = () => {
        switch (view) {
            case 'All Students':
                return (
                    <div className="CliensTables" style={{ display: 'flex', flexDirection: 'column', border: '1px solid #C2CFE0', borderRadius: '14px', background: '#fff', overflow: 'hidden', height: '100%' }}>
                        <div className="GlavTable" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '60px', borderBottom: '1px solid #C2CFE0', marginBottom: '4px' }}>
                            <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '32px', height: '32px' }}><input type="checkbox" checked={selectAll} onChange={handleSelectAllChange} onClick={(e) => e.stopPropagation()} />  </span>
                            <span className='Nomber'><p>#</p></span>
                            <span className='Id'><p>Id</p><div className="chervon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><HiChevronUpDown /></div></span>
                            <span className='Name'><p>Name</p><div className="chervon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><HiChevronUpDown /></div></span>
                            <span className='Points'><p>Points</p><div className="chervon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><HiChevronUpDown /></div></span>
                            <span className='Lesson'><p>Lesson</p><div className="chervon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><HiChevronUpDown /></div></span>
                            <span className='Status'><p>Status</p><div className="chervon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><HiChevronUpDown /></div></span>
                            <span className='Study'><p>Study date</p><div className="chervon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><HiChevronUpDown /></div></span>
                            <span className='Phone'><p>Phone number</p><div className="chervon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><HiChevronUpDown /></div></span>
                            <span className='Balance'><p>Balance</p><div className="chervon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><HiChevronUpDown /></div></span>
                        </div>
                        <div className="ClientTable">
                            {clients.map((client, index) => (
                                <div key={client.id} className={`GlavTable ${activeRows.includes(client.id) ? 'active' : ''}`} onClick={() => handleRowClick(client.id)} style={{ width: '99%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '60px', border: '1px solid #F8FAFC', borderRight: 'none', borderLeft: 'none', cursor: 'pointer', borderRadius: '6px' }}>
                                    <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '32px', height: '32px' }}><input type="checkbox" checked={activeRows.includes(client.id)} onChange={(e) => handleRowCheckboxChange(e, client.id)} /> < readOnly /></span>
                                    <span className='Nomber'><p style={{ fontSize: '14px', color: '#707683' }}>{client.number}</p></span>
                                    <span className='Id'><p style={{ fontSize: '14px', color: '#707683' }}>{client.id}</p></span>
                                    <span className='Name' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}><p className='Name_P' style={{ fontSize: '14px', display: 'flex ', flexDirection: 'row', alignItems: 'center', gap: '5px' }}>{client.name}<Link className='linktoStudpage' to={'/Student-Page'}><span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CiShare1 /></span></Link></p><div className="chervon"><p style={{ fontSize: '10px', color: '#707683' }}>{client.age} ({client.dob})</p></div></span>
                                    <span className='Points' style={{ justifyContent: 'flex-start', gap: '5px' }}><p style={{ fontSize: '14px', color: '#FFB946', width: '16px' }}><FaStar /></p><div className="chervon"><p style={{ fontSize: '12px', color: '#707683' }}>{client.points}</p></div></span>
                                    <span className='Lesson' style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}><p style={{ fontSize: '14px', color: '#707683' }}>{client.lesson}</p><div className="chervon"><p style={{ fontSize: '10px', color: '#707683' }}>{client.lessonDetail}</p></div></span>
                                    <span className='Status' ><p style={{ width: '47px', height: '19px', borderRadius: '4px', backgroundColor: '#2ED47A', fontSize: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#FFFFFF' }}>{client.status}</p></span>
                                    <span className='Study' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}><p style={{ fontSize: '14px', color: '#707683' }}>{client.studyStart}</p><div className="chervon"><p style={{ fontSize: '10px', color: '#707683' }}>{client.studyEnd}</p></div></span>
                                    <span className='Phone' style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }} ><p style={{ fontSize: '14px', color: '#707683' }}>{client.phoneNumber}</p></span>
                                    <span className='Balance'><p style={{ fontSize: '14px', color: '#707683' }}>{client.balance}</p><p style={{ width: 'auto', color: '#C2CFE0', fontSize: '18px' }}><HiDotsVertical /></p></span>
                                </div>
                            ))}
                        </div>
                        <div className="NavigationTool" style={{ width: '100%', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div className="Bottom_Button">
                                <div className="Selected_button">
                                    <button className='Previus' onClick={handlePreviousPage} disabled={currentPage === 1}><FaAngleLeft /> Previous page</button>
                                    {Array.from({ length: totalPages }, (_, i) => (
                                        <button className='number_button' key={i + 1} onClick={() => setCurrentPage(i + 1)} disabled={currentPage === i + 1}>
                                            {i + 1}
                                        </button>
                                    ))}
                                    <button className='Next' onClick={handleNextPage} disabled={currentPage === totalPages}> Next page <FaAngleRight /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'Customer Base':
                return <div className="CliensTables" style={{ display: 'flex', flexDirection: 'column', border: '1px solid #C2CFE0', borderRadius: '14px', background: '#fff', overflow: 'hidden', height: '100%' }}>
                    <div className="GlavTable" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '60px', borderBottom: '1px solid #C2CFE0', marginBottom: '4px' }}>
                        <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '32px', height: '32px' }}><input type="checkbox" checked={selectAll} onChange={handleSelectAllChange} onClick={(e) => e.stopPropagation()} /> </span>
                        <span className='Nomber'><p>#</p></span>
                        <span className='Id'><p>Id</p><div className="chervon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><HiChevronUpDown /></div></span>
                        <span className='Name' style={{ width: '185px', }}><p>Name</p><div className="chervon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><HiChevronUpDown /></div></span>
                        <span className='Phone'><p>Phone number</p><div className="chervon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><HiChevronUpDown /></div></span>
                        <span className='Lesson'><p>Lesson</p><div className="chervon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><HiChevronUpDown /></div></span>
                        <span className='Status' style={{ width: '120px' }}><p>Status</p><div className="chervon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><HiChevronUpDown /></div></span>
                        <span className='Study' style={{ width: '120px' }}><p>Changed date</p><div className="chervon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><HiChevronUpDown /></div></span>
                        <span className='Balance'><p>Source</p><div className="chervon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><HiChevronUpDown /></div></span>
                    </div>
                    <div className="ClientTable">
                        {clients.map((client, index) => (
                            <div key={client.id} className={`GlavTable ${activeRows.includes(client.id) ? 'active' : ''}`} onClick={() => handleRowClick(client.id)} style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '60px', border: '1px solid #F8FAFC', borderRight: 'none', borderLeft: 'none', cursor: 'pointer', }}>
                                <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '32px', height: '32px' }}><input type="checkbox" checked={activeRows.includes(client.id)} onChange={(e) => handleRowCheckboxChange(e, client.id)} /> < readOnly /></span>
                                <span className='Nomber'><p style={{ fontSize: '14px', color: '#707683' }}>{client.number}</p></span>
                                <span className='Id'><p style={{ fontSize: '14px', color: '#707683' }}>{client.id}</p></span>
                                <span className='Name' style={{ width: '185px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}><p style={{ fontSize: '14px', color: '#707683' }}>{client.name}</p><div className="chervon"><p style={{ fontSize: '10px', color: '#707683' }}>{client.age} ({client.dob})</p></div></span>
                                <span className='Phone' style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }} ><p style={{ fontSize: '14px', color: '#707683' }}>{client.phoneNumber}</p></span>
                                <span className='Lesson' style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}><p style={{ fontSize: '14px', color: '#707683' }}>{client.lessonDglav}</p><div className="chervon"><p style={{ fontSize: '10px', color: '#707683' }}>{client.LessonDmain}</p></div></span>
                                <span className='Status' style={{ width: '120px' }}><p style={{ width: '51px', padding: '0 6px', height: '19px', borderRadius: '4px', backgroundColor: '#2ED47A', fontSize: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#FFFFFF' }}>{client.status}</p></span>
                                <span className='Study' style={{ width: '120px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}><p style={{ fontSize: '14px', color: '#707683' }}>{client.studyStart}</p></span>
                                <span className='Balance' style={{ justifyContent: 'space-between' }}><p style={{ width: '60px', fontSize: '12px', color: '#2ED47A', border: '.5px solid #2ED47A', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '4px' }}>{client.sourcew}</p><p style={{ width: 'auto', color: '#C2CFE0', fontSize: '18px' }}><HiDotsVertical /></p></span>
                            </div>
                        ))}
                    </div>
                    <div className="NavigationTool" style={{ width: '100%', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div className="Bottom_Button">
                            <div className="Selected_button">
                                <button className='Previus' onClick={handlePreviousPage} disabled={currentPage === 1}><FaAngleLeft /> Previous page</button>
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <button className='number_button' key={i + 1} onClick={() => setCurrentPage(i + 1)} disabled={currentPage === i + 1}>
                                        {i + 1}
                                    </button>
                                ))}
                                <button className='Next' onClick={handleNextPage} disabled={currentPage === totalPages}> Next page <FaAngleRight /></button>
                            </div>
                        </div>
                    </div>
                </div>;
            case 'Archive':
                return <div className="CliensTables" style={{ display: 'flex', flexDirection: 'column', border: '1px solid #C2CFE0', borderRadius: '14px', background: '#fff', overflow: 'hidden', height: '100%' }}>
                    <div className="GlavTable" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '60px', borderBottom: '1px solid #C2CFE0', marginBottom: '4px' }}>
                        <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '32px', height: '32px' }}><input type="checkbox" checked={selectAll} onChange={handleSelectAllChange} onClick={(e) => e.stopPropagation()} /></span>
                        <span className='Nomber'><p>#</p></span>
                        <span className='Id'><p>Id</p><div className="chervon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><HiChevronUpDown /></div></span>
                        <span className='Name'><p>Name</p><div className="chervon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><HiChevronUpDown /></div></span>
                        <span className='Points' style={{ width: '115px', }}><p>Points</p><div className="chervon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><HiChevronUpDown /></div></span>
                        <span className='Lesson' style={{ width: '185px', }}><p>Lesson</p><div className="chervon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><HiChevronUpDown /></div></span>
                        <span className='Study' style={{ width: '130px', }}><p>Study date</p><div className="chervon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><HiChevronUpDown /></div></span>
                        <span className='Phone' style={{ width: '140px', }}><p>Phone number</p><div className="chervon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><HiChevronUpDown /></div></span>
                        <span className='Balance'><p>Balance</p><div className="chervon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><HiChevronUpDown /></div></span>
                    </div>
                    <div className="ClientTable">
                        {clients.map((client, index) => (
                            <div key={client.id} className={`GlavTable ${activeRows.includes(client.id) ? 'active' : ''}`} onClick={() => handleRowClick(client.id)} style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '60px', border: '1px solid #F8FAFC', borderRight: 'none', borderLeft: 'none', cursor: 'pointer', }}>
                                <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '32px', height: '32px' }}><input type="checkbox" checked={activeRows.includes(client.id)} onChange={(e) => handleRowCheckboxChange(e, client.id)} /> < readOnly /></span>
                                <span className='Nomber'><p style={{ fontSize: '14px', color: '#707683' }}>{client.number}</p></span>
                                <span className='Id'><p style={{ fontSize: '14px', color: '#707683' }}>{client.id}</p></span>
                                <span className='Name' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}><p style={{ fontSize: '14px', color: '#707683' }}>{client.name}</p><div className="chervon"><p style={{ fontSize: '10px', color: '#707683' }}>{client.age} ({client.dob})</p></div></span>
                                <span className='Points' style={{ width: '115px', justifyContent: 'flex-start', gap: '5px' }}><p style={{ fontSize: '14px', color: '#FFB946', width: '16px' }}><FaStar /></p><div className="chervon"><p style={{ fontSize: '12px', color: '#707683' }}>{client.points}</p></div></span>
                                <span className='Lesson' style={{ width: '185px', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}><p style={{ fontSize: '14px', color: '#707683' }}>{client.lesson}</p><div className="chervon"><p style={{ fontSize: '10px', color: '#707683' }}>{client.lessonDetail}</p></div></span>
                                <span className='Study' style={{ width: '130px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}><p style={{ fontSize: '14px', color: '#707683' }}>{client.studyStart}</p><div className="chervon"><p style={{ fontSize: '10px', color: '#707683' }}>{client.studyEnd}</p></div></span>
                                <span className='Phone' style={{ width: '140px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }} ><p style={{ fontSize: '14px', color: '#707683' }}>{client.phoneNumber}</p></span>
                                <span className='Balance'><p style={{ fontSize: '14px', color: '#707683' }}>{client.balance}</p><p style={{ width: 'auto', color: '#C2CFE0', fontSize: '18px' }}><HiDotsVertical /></p></span>
                            </div>
                        ))}
                    </div>
                    <div className="NavigationTool" style={{ width: '100%', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div className="Bottom_Button">
                            <div className="Selected_button">
                                <button className='Previus' onClick={handlePreviousPage} disabled={currentPage === 1}><FaAngleLeft /> Previous page</button>
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <button className='number_button' key={i + 1} onClick={() => setCurrentPage(i + 1)} disabled={currentPage === i + 1}>
                                        {i + 1}
                                    </button>
                                ))}
                                <button className='Next' onClick={handleNextPage} disabled={currentPage === totalPages}> Next page <FaAngleRight /></button>
                            </div>
                        </div>
                    </div>
                </div>;
            default:
                return null;
        }
    };

    const Modal = ({ show, onClose, title, children }) => {
        if (!show) return null;

        return (
            <div className="modal-overlay" style={{
                position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'
            }}>

                <div className="ModalNewStud" style={{ position: 'relative', background: '#fff', padding: '20px', borderRadius: '15px', width: '510px', height: 'auto', boxShadow: '0px 0px 34.9px 8px #00000038' }}>
                    <button onClick={onClose} className='closeNewStud'><IoCloseOutline /></button>
                    <h2>{title}</h2>
                    <div>{children}</div>
                </div>
            </div>
        );
    };

    return (
        <div className="Client" style={{ width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
            <div className="ClientsButtons" style={{ height: '65px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
                <div className="ButtonsHronical" style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <button onClick={() => setView('All Students')}>All Students</button>
                    <button onClick={() => setView('Customer Base')}>Customer Base</button>
                    <button onClick={() => setView('Archive')}>Archive</button>
                </div>
                <div className="ButtonFilters" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.390625vw' }}>
                    <button className='search' style={{ width: '32px', height: '32px', border: '1px solid #005EEB', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '8px', background: 'none', color: '#005EEB', cursor: 'pointer' }}><GoSearch /></button>
                    <button
                        className='filter'
                        style={{ width: '128px', height: '32px', background: 'none', border: '1px solid #005EEB', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px', fontWeight: 500, color: '#005EEB', gap: 0, cursor: 'pointer', outline: 'none', }}
                        onClick={() => setIsFiltersActive(!isFiltersActive)}
                    >
                        <span style={{ fontSize: '16px', padding: 0, margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CiFilter /></span> {isFiltersActive ? 'Hide Filters' : 'Filters'}
                    </button>
                    {view === 'All Students' ? (
                        <button className='customer' onClick={handleOpenModal} style={{ width: '135px', height: '32px', background: '#005EEB', border: '1px solid #005EEB', borderRadius: '8px', color: '#fff', fontSize: '12px', fontWeight: 500, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', cursor: 'pointer' }}><span style={{ display: 'flex', padding: 0, margin: 0, justifyContent: 'center', alignItems: 'center', fontSize: '16px' }}><LuUser /></span> New Student</button>
                    ) : view === 'Customer Base' ? (
                        <button className='customer' onClick={handleOpenModal} style={{ width: '135px', height: '32px', background: '#005EEB', border: '1px solid #005EEB', borderRadius: '8px', color: '#fff', fontSize: '12px', fontWeight: 500, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', cursor: 'pointer' }}><span style={{ display: 'flex', padding: 0, margin: 0, justifyContent: 'center', alignItems: 'center', fontSize: '16px' }}><GoPlus /></span> New Customer</button>
                    ) : null}
                </div>
            </div>
            {isFiltersActive && (
                <div className="FiltersContent" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', padding: '0 20px', marginBottom: '20px' }}>
                    <button style={{ width: '100px', height: '32px' }}><p>Subject</p><span><FiChevronDown /></span></button>
                    <button style={{ width: '133px', height: '32px' }}><p>Lesson type</p><span><FiChevronDown /></span></button>
                    <button style={{ width: '141px', height: '32px' }}><p>Balance type</p><span><FiChevronDown /></span></button>
                    <button style={{ width: '100px', height: '32px' }}><p>Points</p><span><FiChevronDown /></span></button>
                    <button style={{ width: '100px', height: '32px' }}><p>Date</p><span><FiChevronDown /></span></button>
                    <button style={{ width: '102px', height: '32px' }}><p>Gender</p><span><FiChevronDown /></span></button>
                    <button style={{ width: '100px', height: '32px' }}><p>Age</p><span><FiChevronDown /></span></button>
                    <button id='reset'><VscDebugRestart /></button>
                </div>
            )}
            <div className="ClientContent" style={{ padding: '0 20px', height: '859px' }}>
                {renderContent()}
            </div>
            <Modal show={isModalOpen} onClose={handleCloseModal}>
                <div className="newLeaadCard_studentMenu" style={{width: '440px'}}>
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
            </Modal>
        </div >
    );
};