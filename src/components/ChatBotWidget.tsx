import React, { useState, useEffect, useRef, FormEvent } from 'react';
import ChatBot from './ChatBot'; // Import the ChatBot component
import axios from 'axios';
import '../css/ChatBot.css'; // Custom styles for the chatbot
import ChatBotIcon from '../assets/ChatBotIcon.png';


// Type for the response object from the API
interface ResponseData {
  answer: string;
}

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const ChatBotWidget: React.FC = () => {

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

  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = { sender: 'bot', text: 'Assalamu Aleikum! How can I help you?' };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);


  // Close the widget when clicked outside
  const handleClickOutside = (event: MouseEvent) => {
    if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicking outside
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle button click to toggle widget state
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); // Stop event from propagating to the document
    setIsOpen((prev) => !prev); // Toggle the open state
  };



  return (
    <div>
      <button
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#007BFF',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '50%',
          fontSize: '20px',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={handleButtonClick}
      >
        ?
      </button>

      {isOpen && (
        <div
          ref={widgetRef}
          style={{
            position: 'fixed',
            bottom: '80px',
            right: '20px',
            width: '300px',
            height: '400px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
            padding: '20px',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div className="messages">
            {/* Display messages */}
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
          <div>
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
            {/* Add your chatbot or customer service content here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBotWidget;
