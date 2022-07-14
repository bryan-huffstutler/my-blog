import React, {useState} from 'react'
import axios from 'axios'
export const MasterContext = React.createContext()

const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function MasterProvider(props) {
    const [token, setToken] = useState("")

    function getTheToken () {
        
    }
    return (
        <MasterContext.Provider value={{
            token
        }}>
            {props.children}
        </MasterContext.Provider>
    )
}