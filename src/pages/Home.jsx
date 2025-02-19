import { useState } from 'react';
import ChatWindow from '../components/ChatWindow';
import messages from '../data/messages';
import '../styles/Home.css';

const Home = () => {
    const [input, setInput] = useState('');
    const [chatHistory, setChatHistory] = useState(messages.start);
    const [isSending, setIsSending] = useState(false);

    const handleSendMessage = () => {
        if (input.trim() && !isSending) {
            setIsSending(true);
            setChatHistory(prev => [...prev, { text: input, sender: 'User' }]);
            const userMessage = { text: input, sender: 'User' };
            const newMsg = messages[input.trim().toLowerCase()] || messages.default;

            if (newMsg === messages.default) {
                if (input === "clear") setChatHistory([...messages.start]);
                else setChatHistory([...messages.default]);
            } else {
                setChatHistory([userMessage]);
                newMsg.forEach((message, index) => {
                    setTimeout(() => {
                        setChatHistory(prev => [...prev, {
                            ...message,
                            timestamp: new Date(Date.now() + (index + 1) * 500)
                        }]);
                    }, (index + 1) * 750);
                });
            }

            setInput('');
            setIsSending(false);
        }
    };

    return (
        <div className="home">
            <div className="message-header">
                <div className="contact-info">To: Isaiah Aganon</div>
                <div className="message-actions">
                    <span>
                        <i className="fas fa-video"></i>
                    </span>
                    <span>
                        <i className="fas fa-info-circle"></i>
                    </span>
                </div>
            </div>

            <ChatWindow messages={chatHistory} />

            <div className="message-input">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Write a text: (e.g., 'view all cmds')"
                />
            </div>
        </div>
    );
};

export default Home;