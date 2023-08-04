import {createContext, useState} from 'react'
import Message from '../components/message'


export const MessageContext = createContext({} as any)

const MessageProvider = ({children}: {children?: React.ReactElement}) => {
    const [message, setMessage] = useState(null)
    return <MessageContext.Provider value={{ message, setMessage }}>
    {message && <Message content={message} />}
    {children}
  </MessageContext.Provider>
}

export default MessageProvider