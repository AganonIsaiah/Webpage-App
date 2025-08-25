import Message from './Message';
import { useEffect, useRef } from 'react';

const ChatWindow = ({ messages }) => {
  const messagesEndRef = useRef(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const formatDate = (date) => {
    const options = { 
      weekday: 'short',
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false 
    };
    
    const formattedDate = new Date(date).toLocaleString('en-US', options);
    return formattedDate.replace(',', ''); 
  };
  
  const groupMessagesByDate = (msgs) => {
    const groups = [];
    let currentDate = null;
    
    msgs.forEach(msg => {
      const msgDate = new Date();
      const formattedDate = formatDate(msgDate);
      
      if (formattedDate !== currentDate) {
        groups.push({
          type: 'timestamp',
          text: formattedDate
        });
        currentDate = formattedDate;
      }
      
      groups.push({
        type: 'message',
        data: msg
      });
    });
    
    return groups;
  };
  
  const groupedMessages = groupMessagesByDate(messages);
  
  return (
    <div className="chat-window ">
      {groupedMessages.map((item, index) => (
        <div key={index} className="message-group">
          {item.type === 'timestamp' ? (
            <div className="timestamp">{item.text}</div>
          ) : (
            <Message message={item.data} />
          )}
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatWindow;