const Message = ({ message }) => {
  const isReceived = message.sender !== "Isaiah Aganon";
  
  return (
    <div className="message-container">
      <div className={`chat-bubble ${isReceived ? 'received' : 'sent'}`}>
        <p>{message.text}</p>
      </div>
      {!isReceived && <div className="message-status">Delivered</div>}
    </div>
  );
};

export default Message;