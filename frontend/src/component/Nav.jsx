import React from 'react'
import logo from '../assets/logo.png'
import { IoSearchCircleSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useState , useContext } from 'react';
import { userdataContext } from '../context/UserContext';
import { IoSearchCircleOutline } from "react-icons/io5";
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { authDataContext } from '../context/authContext';
import { IoMdHome } from "react-icons/io";
import { BsCollectionFill } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";


function Nav
() {
    let {getCurrentUser , userData} = useContext(userdataContext)
    let {serverUrl} = useContext(authDataContext)
    let [showSearch , setShowSearch] = useState(false)
    let [showProfile , setShowProfile] = useState(false)
    let navigate = useNavigate()

    const handleLogout = async() => {
        try{
            const result = await axios.get(serverUrl + "/api/auth/logout" ,{
                withCredentials : true
            })
            console.log(result.data)
            getCurrentUser()
        } catch(error){
            console.log(error)
        }
    }

  return (
    <div className='w-[100vw] h-[70px] bg-[#ecfafaec] z-10 fixed top-0 flex items-center justify-between px-[30px] shadow-md shadow-black'>

        <div className='w-[20%] lg:w-[30%] flex items-center justify-start gap-[10px]'>
            <img src={logo} alt=''  className='w-[30px]'/>
            <h1 className='text-[25px] text-[black] font-sans'> ShopGenie </h1>
        </div>

        <div className='w-[50%] lg:w-[40%] hidden md:flex'>
            <ul className='flex items-center justify-center gap-[19px] text-[white]'>
                <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl' onClick={()=>navigate("/")}>HOME</li>
                <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl' onClick={()=>navigate("/collection")}>COLLECTIONS</li>
                <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl' onClick={()=>navigate("/about")}>ABOUT</li>
                <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl' onClick={()=>navigate("/contact")}>CONTACT US</li>
            </ul>
        </div>

        <div className='w-[30%] flex items-center justify-end gap-[20px]'>
            { !showSearch && <IoSearchCircleOutline className='w-[38px] h-[38px] text-[#000000] cursor-pointer' onClick={()=> setShowSearch(prev=>!prev)} />}
            
            { showSearch && <IoSearchCircleSharp className='w-[38px] h-[38px] text-[#000000] cursor-pointer' onClick={()=> setShowSearch(prev=>!prev)} />}

            {!userData && <FaUserCircle className='w-[29px] h-[29px] text-[#000000] cursor-pointer' onClick={()=>setShowProfile(prev=>!prev)} />}
            { userData && <div className='w-[30px] h-[30px] bg-[#080808] text-[white] rounded-full flex items-center justify-center cursor-pointer' onClick={()=>setShowProfile(prev=>!prev)}>{userData?.name.slice(0,1)}</div>}

            <FaShoppingCart className='w-[29px] h-[29px] text-[#000000] cursor-pointer hidden md:block' />
            <p className=' absolute w-[18px] h-[18px] items-center md:flex justify-center bg-black px-[5px] py-[2px] text-white rounded-full text-[9px] top-[10px] right-[23px] hidden md:block'>10</p>

        </div>

        {showSearch && <div className='w-[100%] h-[80px] bg-[#d8f6f9dd] absolute top-[100%] left-0 right-0 flex items-center justify-center'>
            <input type="text" className='w-[50%] h-[60%] bg-[#233533] rounded-[30px] px-[50px] placeholder:text-white text-[white] text-[18px]' placeholder='Search Here' />
        </div>}

        { showProfile && <div className='absolute w-[220px] h-[150px] bg-[#000000d7] top-[110%] right-[4%] border-[1px] border-[#aaa9a9] rounded-[10px] z-10'>
            <ul className='w-[100%] h-[100%] flex items-start justify-around flex-col text-[17px] py-[10px] text-[white]'>

                {!userData && <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer' onClick={()=>{
                    navigate("/login");setShowProfile(false)
                }}>Login</li>}

                {userData && <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer' onClick={()=>{handleLogout();setShowProfile(false)}}>Logout</li>}

                <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer'>Orders</li>
                <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer' onClick={()=>{()=>navigate("/about");setShowProfile(false)}}>About</li>
            </ul>
        </div>}

        <div className='w-[100vw] h-[90px] flex items-center justify-between px-[20px] text-[12px] fixed bottom-0 left-0 bg-[#191818] md:hidden'>

                <button className='text-[white] flex items-center justify-center flex-col gap-[2px]' onClick={()=>navigate("/")}> <IoMdHome className='w-[23px] h-[23px] text-[white] md:hidden'/> Home</button>

                <button className='text-[white] flex items-center justify-center flex-col gap-[2px]' onClick={()=>navigate("/collection")}> <BsCollectionFill className='w-[20px] h-[20px] text-[white] md:hidden'/> Collections</button>

                <button className='text-[white] flex items-center justify-center flex-col gap-[2px]'> <FaShoppingCart className='w-[20px] h-[20px] text-[white] md:hidden'/> Cart</button>

                <button className='text-[white] flex items-center justify-center flex-col gap-[2px]' onClick={()=>navigate("/contact")}> <MdSupportAgent className='w-[20px] h-[20px] text-[white] md:hidden'/> Contact</button>
        </div>

    </div>
  )
}

export default Nav
