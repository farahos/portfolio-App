import React, { useState } from "react";

const MessageModal = ({ onClose }) => {
  const [message, setMessage] = useState("");
  const [sentMessages, setSentMessages] = useState([]);

  const handleSend = () => {
    if (message.trim() !== "") {
      setSentMessages([...sentMessages, message]);
      setMessage("");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md h-[80vh] flex flex-col relative">
        {/* Header */}
        <div className="px-4 py-3 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold">Chat with Farah</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-xl"
          >
            ×
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {sentMessages.map((msg, index) => (
            <div key={index} className="text-sm bg-gray-100 p-2 rounded">
              {msg}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="px-4 py-3 border-t flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
