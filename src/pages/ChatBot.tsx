import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import '../css/ChatBot.css'; // Custom styles for the chatbot

// Type for the response object from the API
interface ResponseData {
  answer: string;
}

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const App: React.FC = () => {
  const [message, setMessage] = useState<string>(''); // User's message
  const [response, setResponse] = useState<string>(''); // Bot's response
  const [messages, setMessages] = useState<Message[]>([]); // Array to store messages for chat display

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Add user's message to the chat history
    const userMessage: Message = { sender: 'user', text: message };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setMessage(''); // Clear the input field

    try {
      // Make POST request to FastAPI backend
      const result = await axios.post<ResponseData>('http://127.0.0.1:8000/chat', { message });
      const botMessage: Message = { sender: 'bot', text: result.data.answer };
      setMessages((prevMessages) => [...prevMessages, botMessage]); // Add bot's response to chat history
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chat-window">
        <div className="messages">
          {/* Display messages */}
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              <p>{msg.text}</p>
            </div>
          ))}
        </div>
        <form className="input-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            className="message-input"
          />
          <button type="submit" className="send-button">Send</button>
        </form>
      </div>
    </div>
  );
}

export default App;
