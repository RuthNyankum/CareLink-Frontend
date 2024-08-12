import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: 'hospital', text: 'Hello! How can we assist you today?' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const patientMessage = { sender: 'patient', text: newMessage };
      setMessages([...messages, patientMessage]);
      setNewMessage('');

      // Simulate hospital's reply
      setTimeout(() => {
        const hospitalReply = {
          sender: 'hospital',
          text: 'Thank you for reaching out to CareLink. We will get back to you shortly.',
        };
        setMessages((prevMessages) => [...prevMessages, hospitalReply]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-md mt-20 md:mt-10 lg:mt-0">
      <h2 className="text-2xl font-semibold mb-4 text-center">Chat with Us</h2>
      <div className="flex-grow overflow-y-auto bg-white p-4 rounded-lg shadow-inner mb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded-lg max-w-xs md:max-w-md lg:max-w-lg ${
              message.sender === 'patient'
                ? 'bg-blue-500 text-white self-end'
                : 'bg-gray-200 text-black self-start'
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          className="flex-grow p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
