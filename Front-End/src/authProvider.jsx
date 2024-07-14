import React, {createContext, useContext, useState} from 'react'

export const AuthContext = createContext()
export default function authProvider({children}){
            const initialAuther = localStorage.getItem("Users");
            const [authUser, setauthUser] = useState(
                initialAuther? JSON.parse(initialAuther) : undefined
            )
            return(
                <AuthContext.Provider value={[authUser, setauthUser]}>
                    {children}
                </AuthContext.Provider>
            )
}

export const UseAuth = () =>useContext(AuthContext)