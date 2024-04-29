import { createContext, useState } from "react";

export const UserConext = createContext({});

export function UserConextProvider({children}) {
    const [userInfo, setUserInfo] = useState({});

    return(
        <UserConext.Provider value={{userInfo, setUserInfo}}>
            {children}
        </UserConext.Provider>
    );
};