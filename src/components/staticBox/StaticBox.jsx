import './staticbox.css'
import { RiGraduationCapLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import students from './../../Assets/Icon.png';
import coins from './../../Assets/Coins.png';

const StaticBox = () => {
    return (
        <div className="StaticBox">
            <div className="StaticBox_container">
                <div className="imgIcon">
                    <button><FiUser /></button>
                </div>
                <div className="TextPodschet">
                    <p className='Number'>45</p>
                    <p>New leads</p>
                </div>
            </div>
            <div className="StaticBox_container">
                <div className="imgIcon">
                    <button><img src={students} alt="" /></button>
                </div>
                <div className="TextPodschet">
                    <p className='Number'>45</p>
                    <p>All students</p>
                </div>
            </div>
            <div className="StaticBox_container">
                <div className="imgIcon">
                    <button><FiUsers /></button>
                </div>
                <div className="TextPodschet">
                    <p className='Number'>45</p>
                    <p>Groups</p>
                </div>
            </div>
            <div className="StaticBox_container">
                <div className="imgIcon">
                    <button><img src={coins} alt="" /></button>
                </div>
                <div className="TextPodschet">
                    <p className='Number'>45</p>
                    <p>Personnel</p>
                </div>
            </div>
        </div>
    )
}

export default StaticBox
