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
import { FiChevronDown } from "react-icons/fi";
import { VscDebugRestart } from "react-icons/vsc";
import { GoPlus } from "react-icons/go";
import { TbUser } from "react-icons/tb";
import { TbUserUp } from "react-icons/tb";
import { IoCloseOutline } from "react-icons/io5";
import React from 'react';
import LeadCard from '../leads/LeadCard';
import { FaAngleDown } from "react-icons/fa6";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Client() {


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
    const [formData, setFormData] = useState({ dropdownSelection: '' });
    const [startDate, setStartDate] = useState(new Date());

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleDropdownSelection = (selection) => {
        setFormData({ ...formData, dropdownSelection: selection });
        setDropdownVisible(false);
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFormCheckboxChange = (e) => {
        const { name } = e.target;
        setFormData({
            ...formData,
            individualLessons: name === 'individualLessons',
            groupLessons: name === 'groupLessons',
        });
    };

    const isFormValid = () => {
        return formData.firstName && formData.lastName && formData.phoneNumber && formData.dropdownSelection && (formData.individualLessons || formData.groupLessons);
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
        if (isFormValid()) {
            if (formData.individualLessons) {
                setModalContent('individualLesson');
            } else if (formData.groupLessons) {
                setModalContent('groupLesson');
            }
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
                                <div key={client.id} className={`GlavTable ${activeRows.includes(client.id) ? 'active' : ''}`} onClick={() => handleRowClick(client.id)} style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '60px', border: '1px solid #F8FAFC', borderRight: 'none', borderLeft: 'none', cursor: 'pointer', }}>
                                    <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '32px', height: '32px' }}><input type="checkbox" checked={activeRows.includes(client.id)} onChange={(e) => handleRowCheckboxChange(e, client.id)} /> < readOnly /></span>
                                    <span className='Nomber'><p style={{ fontSize: '14px', color: '#707683' }}>{client.number}</p></span>
                                    <span className='Id'><p style={{ fontSize: '14px', color: '#707683' }}>{client.id}</p></span>
                                    <span className='Name' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}><p style={{ fontSize: '14px', color: '#707683' }}>{client.name}</p><div className="chervon"><p style={{ fontSize: '10px', color: '#707683' }}>{client.age} ({client.dob})</p></div></span>
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
                {modalContent === 'initial' && (
                    <div className="ModalNewStud">
                        <div className="ModalText">
                            <h1>Add a new student</h1>
                            <p>How do you want to create a new student?</p>
                        </div>
                        <div className="ModalButton">
                            <div
                                className={`AddNewStudent ${activeDiv === 'addNewStudent' ? 'active' : ''}`}
                                onClick={handleAddNewStudent}
                            >
                                <div className="IconNewStud"><TbUser /></div>
                                <div className="AddNewStudText">
                                    <h1>Add new student</h1>
                                    <p>Create new student</p>
                                </div>
                            </div>
                            <div
                                className={`AddNewCustomer ${activeDiv === 'addNewCustomer' ? 'active' : ''}`}
                                onClick={handleAddNewCustomer}
                            >
                                <div className="IconNewCust"><TbUserUp /></div>
                                <div className="AddNewCustText">
                                    <h1>From customer</h1>
                                    <p>Convert customer to student</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {modalContent === 'addNewStudent' && (
                    <div className="ModalCreateNewStud">
                        <div className="CreateNewsTitle">
                            <h2>Add a new student</h2>
                            <p>Fill in the requested information below</p>
                        </div>
                        <div className="CreateNewsContant">
                            <label>
                                <p>First name*</p>
                                <input name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder='John' type="text" />
                            </label>
                            <label>
                                <p>Last name*</p>
                                <input name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder='Anderson' type="text" />
                            </label>
                            <label>
                                <p>Phone number*</p>
                                <input name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} placeholder='+998' type="text" />
                            </label>
                            <label className="form-label">
                                <p>Birthday</p>
                                <DatePicker
                                    className='DatePicker'
                                    selected={startDate}
                                    onChange={(date) => {
                                        setStartDate(date);
                                        handleDropdownSelection(date.toDateString());
                                    }}
                                    dateFormat="MMMM d, yyyy"
                                />
                            </label>
                        </div>
                        <div className="CheckboxNewStud">
                            <div className="CheckboxNewStud_title">
                                <p>Select type of lesson*</p>
                            </div>
                            <div className="CheckBox_BOX">
                                <label>
                                    <input type="checkbox" name="individualLessons" checked={formData.individualLessons} onChange={handleFormCheckboxChange} />
                                    <p>Individual lessons</p>
                                </label>
                                <label>
                                    <input type="checkbox" name="groupLessons" checked={formData.groupLessons} onChange={handleFormCheckboxChange} />
                                    <p>Group lessons</p>
                                </label>
                            </div>
                        </div>
                        <div className="CreateNewStudButtons">
                            <button className='GoBackStud' onClick={handleGoBack} >
                                Go back
                            </button>
                            <button className='NextStud' disabled={!isFormValid()} onClick={handleNextButtonClick} >
                                Next
                            </button>
                        </div>
                    </div>
                )}
                {modalContent === 'individualLesson' && (
                    <div className="IndividualLessonContent">
                        <div className="IndividualLessonContent_Title">
                            <h2>Add a new student</h2>
                            <p>Fill in the requested information below</p>
                        </div>
                        <div className="IndividualLessonContent_Podtitle">
                            <p>Create individual lesson for Alisher Atajanov</p>
                        </div>
                        <div className="IndividualLessonContent_SelectBox">
                            <div className="Select_one">
                                <p>Select subject*</p>
                                <select name="" id="">
                                    <option value="">option 1</option>
                                    <option value="">option 2</option>
                                    <option value="">option 3</option>
                                </select>
                            </div>
                            <div className="Select_two">
                                <p>Select level*</p>
                                <select name="" id="">
                                    <option value="">option 1</option>
                                    <option value="">option 2</option>
                                    <option value="">option 3</option>
                                </select>
                            </div>
                            <div className="Select_three">
                                <p>Select teacher*</p>
                                <select name="" id="">
                                    <option value="">option 1</option>
                                    <option value="">option 2</option>
                                    <option value="">option 3</option>
                                </select>
                            </div>
                            <div className="Select_four">
                                <p>Select days*</p>
                                <select name="" id="">
                                    <option value="">option 1</option>
                                    <option value="">option 2</option>
                                    <option value="">option 3</option>
                                </select>
                            </div>
                            <div className="Select_five">
                                <p>Select start time*</p>
                                <select name="" id="">
                                    <option value="">option 1</option>
                                    <option value="">option 2</option>
                                    <option value="">option 3</option>
                                </select>
                            </div>
                            <div className="Select_six">
                                <p>Select room*</p>
                                <select name="" id="">
                                    <option value="">option 1</option>
                                    <option value="">option 2</option>
                                    <option value="">option 3</option>
                                </select>
                            </div>
                            <div className="Select_seven">
                                <p>Select start day*</p>
                                <select name="" id="">
                                    <option value="">option 1</option>
                                    <option value="">option 2</option>
                                    <option value="">option 3</option>
                                </select>
                            </div>
                        </div>
                        <div className="IndividualLessonContent_CheckBox">
                            <input type="checkbox" />
                            <p>Create a new individual price</p>
                        </div>
                        <button onClick={handleGoBack}>Go back</button>
                        <button>Confim</button>
                    </div>
                )}
                {modalContent === 'groupLesson' && (
                    <div className="GroupLessonContent">
                        <button onClick={handleGoBack}>Go back</button>
                        <h2>Group Lesson</h2>
                        {/* Add content for group lesson here */}
                        <p>Content for group lessons</p>
                    </div>
                )}
                {modalContent === 'addNewCustomer' && (
                    <div className="ModalFromCust">
                        <button onClick={handleGoBack}>Go back</button>
                        <h1>Convert Customer to Student Form</h1>
                    </div>
                )}
            </Modal>
        </div >
    );
};