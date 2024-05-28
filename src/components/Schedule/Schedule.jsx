import React from 'react';
import './Schlude.css'; // Importing the CSS file
import { TbClockHour3 } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { PiTelevisionSimple } from "react-icons/pi";
import { RiGroupLine } from "react-icons/ri";
import { IoMdAlarm } from "react-icons/io";
import { SlGraduation } from "react-icons/sl";
import { FiUsers } from "react-icons/fi";

export default function Schedule() { // Receive 'data' as a prop

    const data = [
        {
            num: 18,
            lessonTime: '08:00 - 09:30',
            name: 'Group 52',
            teacherName: 'Mr. Smith',
            subjectName: 'General English: Indermatade level',
            level: 'Grade 10',
            lessonType: 'Regular',
            room: 'Room 101',
            students: ['Alice', 'Bob', 'Charlie']
        },
        {
            num: 18,
            lessonTime: '09:45 - 11:15',
            name: 'English Literature',
            teacherName: 'Ms. Johnson',
            subjectName: 'Literature',
            level: 'Grade 10',
            lessonType: 'Regular',
            room: 'Room 102',
            students: ['David', 'Emily', 'Frank']
        },
        // Add more lesson entries as needed
    ];


    return (
        <div style={{overflowY: 'auto'}} className="Schedule">
            <div className="table headerTable">
                <p className="tableTextMin">#</p>
                <p className="tableText">Lesson time</p>
                <p className="tableText">Name</p>
                <p className="tableText">Teacher name</p>
                <p className="tableTextMax">Subject name: level</p>
                <p className="tableText">Lesson type</p>
                <p className="tableText">Room</p>
                <p className="tableText">Students</p>
            </div>
            <div className="table">
                <p className="tableTextMin">12</p>
                <p className="tableText tableTextHour"><p><IoMdAlarm size={"20px"}/>09:00 - 10:00</p></p>
                <p className="tableText">Group 52</p>
                <p className="tableText tableTextUser"><FiUser size={"20px"}/>Mr. Johnson</p>
                <p className="tableTextMax"><SlGraduation size={"20px"} />General English:Indermatade level</p>
                <p className="tableText tableTextGroup"><PiTelevisionSimple size={"20px"} /> Group</p>
                <p className="tableText tabletextRoom"><p>Room 2-3</p></p>
                <p className="tableText tableTextUsers"><FiUsers size={"20px"}/>18 students</p>
            </div>
            <div className="table">
                <p className="tableTextMin">12</p>
                <p className="tableText tableTextHour"><p><IoMdAlarm size={"20px"}/>09:00 - 10:00</p></p>
                <p className="tableText">Group 52</p>
                <p className="tableText tableTextUser"><FiUser size={"20px"}/>Mr. Johnson</p>
                <p className="tableTextMax"><SlGraduation size={"20px"} />General English:Indermatade level</p>
                <p className="tableText tableTextGroup"><PiTelevisionSimple size={"20px"} /> Group</p>
                <p className="tableText tabletextRoom"><p>Room 2-3</p></p>
                <p className="tableText tableTextUsers"><FiUsers size={"20px"}/>18 students</p>
            </div>
            <div className="table">
                <p className="tableTextMin">12</p>
                <p className="tableText tableTextHour"><p><IoMdAlarm size={"20px"}/>09:00 - 10:00</p></p>
                <p className="tableText">Group 52</p>
                <p className="tableText tableTextUser"><FiUser size={"20px"}/>Mr. Johnson</p>
                <p className="tableTextMax"><SlGraduation size={"20px"} />General English:Indermatade level</p>
                <p className="tableText tableTextGroup"><PiTelevisionSimple size={"20px"} /> Group</p>
                <p className="tableText tabletextRoom"><p>Room 2-3</p></p>
                <p className="tableText tableTextUsers"><FiUsers size={"20px"}/>18 students</p>
            </div>
        </div>
    )
}
