const Message = ({ message }) => {
  const isReceived = message.sender !== "Isaiah Aganon";
  const isPDF = message.text.includes("<iframe"); 

  const renderMessageContent = () => {
    if (isPDF || message.text.includes("<a")) {
      return <div dangerouslySetInnerHTML={{ __html: message.text }} />;
    }
    return renderTextWithLinks(message.text);
  };

  const renderTextWithLinks = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const emailRegex = /([^\s]+@[^\s]+\.[^\s]+)/g;
    
    return text.split(/(https?:\/\/[^\s]+)|([^\s]+@[^\s]+\.[^\s]+)/g).map((part, index) =>
      urlRegex.test(part) ? (
        <a key={index} href={part} target="_blank" rel="noopener noreferrer" style={{ color: '#0b93f6', textDecoration: 'underline' }}>
          {part}
        </a>
      ) : emailRegex.test(part) ? (
        <a key={index} href={`mailto:${part}`} style={{ color: '#0b93f6', textDecoration: 'underline' }}>
          {part}
        </a>
      ) : (
        part
      )
    );
  };

  return (
    <div className="message-container">
      <div className={`${isPDF ? "pdf-bubble" : "chat-bubble"} ${isReceived ? "received" : "sent"}`}>
        {renderMessageContent()}
      </div>
      {isReceived && <div className="message-status">Delivered</div>}
    </div>
  );
};

export default React.memo(Message);
