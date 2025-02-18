
import {useState } from 'react';
import ChatWindow from '../components/ChatWindow';
import messages from '../data/messages';

const Home = () => {
    const [input, setInput] = useState('');
    const [chatHistory, setChatHistory] = useState(messages.start);

    const handleSendMessage = () => {
        if (input.trim()) {
            const newMsg = messages[input.trim().toLowerCase()] || messages.default;

            if (newMsg == messages.default)
                setChatHistory([...newMsg])
            else
                setChatHistory(prev => [...prev, ...newMsg]);
        }
        setInput('')
    };

    return (
        <div className="home">
            <ChatWindow messages = {chatHistory} />

            <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeHolder="Type a command (e.g., 'send all')"
            />
        </div>
    );
};

export default Home;