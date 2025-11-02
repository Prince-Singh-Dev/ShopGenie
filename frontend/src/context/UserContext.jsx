import React from 'react'
import { useState , useEffect , useContext} from 'react'
import axios from 'axios'
import { createContext } from 'react'
import { authDataContext } from './authContext'

export const userdataContext = createContext()
function UserContext({children}) {

    let [userData , setUserData] = useState("")
    let {serverUrl} = useContext(authDataContext)

    const getCurrentUser = async() =>{
        try{
            let result = await axios.get(serverUrl + "/api/user/getcurrentuser" ,  {
               withCredentials: true
            })
            setUserData(result.data)
            console.log(result.data)

        } catch(error){
            setUserData(null)
            console.log(error)
        }
    }

    useEffect(()=>{
        getCurrentUser()
    },[])


    let value ={
        userData,setUserData,getCurrentUser
    }

  return (
    <div>
        <userdataContext.Provider value={value}>
            {children}
        </userdataContext.Provider>
    </div>
  )
}

export default UserContext