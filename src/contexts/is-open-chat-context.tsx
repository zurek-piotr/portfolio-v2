"use client"

import {Context, createContext, ReactNode, useContext, useState} from 'react';


const IsOpenChatContext: Context<{ isOpenChat: boolean; setIsOpenChat: Function }> = createContext<{ isOpenChat: boolean, setIsOpenChat: Function }>({
    isOpenChat: false,
    setIsOpenChat: () => {
    }
});


export const useIsOpenChat = () => useContext(IsOpenChatContext);

export function IsOpenChatProvider({isOpenChat, setIsOpenChat, children}: {
    isOpenChat?: boolean
    setIsOpenChat?: Function
    children: ReactNode
}) {
    const [isOpenChatDefault, setIsOpenChatDefault] = useState(false);
    if (isOpenChat === undefined || setIsOpenChat === undefined) {
        isOpenChat = isOpenChatDefault;
        setIsOpenChat = setIsOpenChatDefault;
    }

    return (
        <IsOpenChatContext.Provider value={{isOpenChat, setIsOpenChat}}>
            {children}
        </IsOpenChatContext.Provider>
    )
}
