import React, { useEffect, createContext, useState } from "react";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);

    const addMessage = (message) => {
        setMessages([...messages, message]);
    };

    return (
        <ChatContext.Provider value={{ messages, addMessage }}>{children}</ChatContext.Provider>
    );
};

export { ChatContext, ChatProvider };