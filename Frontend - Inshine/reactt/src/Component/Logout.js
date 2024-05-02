import React, { useEffect } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom'

export default function Logout() {
    let navigate = useNavigate()
    let navigation = useNavigation()
    
useEffect(()=>{sessionStorage.removeItem("fullname")


let navigation = useNavigation
// navigation.navigate("Header",{status:false})
navigate("/login")

},[])



  return (
    <div>
      
    </div>
  )
}
