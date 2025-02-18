const Message =( {message }) => {
  return (
    <div className={`chat-bubble ${message.sender === "Isaiah Aganon" ? 'sent' : 'received'}`}>
        <p>{message.text}</p>
    </div>
  );
};
  
export default Message;
  