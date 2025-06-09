import React, { useEffect, useState } from "react";

const STORAGE_KEY = "chatMessages";

const MessageModal = ({ onClose }) => {
  const [message, setMessage] = useState("");
  const [sentMessages, setSentMessages] = useState([]);

  // Markii modal la furo, load fariimaha kaydsan
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setSentMessages(JSON.parse(saved));
    }
  }, []);

  // Markasta oo sentMessages isbeddel sameeyo, kaydi localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sentMessages));
  }, [sentMessages]);

  const handleSend = () => {
    if (message.trim() === "") return;
    const newMsgs = [...sentMessages, message.trim()];
    setSentMessages(newMsgs);
    setMessage("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md h-[80vh] flex flex-col">
        {/* Header */}
        <div className="px-4 py-3 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold">Chat with Farah</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-red-500 text-xl">
            ×
          </button>
        </div>

        {/* Messages List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {sentMessages.map((msg, i) => (
            <div key={i} className="bg-gray-100 p-2 rounded">
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
