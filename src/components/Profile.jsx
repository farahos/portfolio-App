import React, { useState } from "react";
import MessageModal from "./MessageModal";
import profileImage from "../assets/farahpoi.jpg";

const formatNumber = (num) => {
  if (num >= 1e6) {
    const n = (num / 1e6).toFixed(1);
    return n.endsWith(".0") ? n.slice(0, -2) + "M" : n + "M";
  }
  if (num >= 1e3) {
    const n = (num / 1e3).toFixed(1);
    return n.endsWith(".0") ? n.slice(0, -2) + "K" : n + "K";
  }
  return num.toString();
};

const Profile = () => {
  const [isFriend, setIsFriend] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [friendCount, setFriendCount] = useState(1000000); // 10M

  const handleAddFriend = () => {
    if (!isFriend) {
      setIsFriend(true);
      setFriendCount(friendCount + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 bg-gray-100 min-h-screen">
      {/* Profile Image */}
        <h2 className="font-bold text-blue-700 mb-10 text-3xl text-center ">Profile</h2>
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
        <img
          src={profileImage}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <h2 className="text-2xl font-semibold mt-4">Farah Ugaas</h2>
      <p className="text-gray-600 text-center max-w-md mt-2">I am The Freelance Full Stack Developer </p>

      {/* Friend Count */}
     <div className="mt-5 text-4xl font-extrabold text-blue-600 tracking-wide">
  {formatNumber(friendCount)} followers <span className="text-sm font-medium text-gray-600"></span>
</div>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={handleAddFriend}
          disabled={isFriend}
          className={`px-5 py-2 rounded-full shadow transition duration-300 ${
            isFriend
              ? "bg-green-600 text-white"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {isFriend ? "Friend ✓" : "Follow"}
        </button>

        <button
          onClick={() => setShowModal(true)}
          className={`px-5 py-2 rounded-full shadow transition duration-300 ${
            isFriend
              ? "bg-gray-600 hover:bg-gray-700 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!isFriend}
        >
          Send Message
        </button>
      </div>

      {/* Modal */}
      {showModal && <MessageModal onClose={() => setShowModal(false)} />}

      {/* Quote */}
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>“Code with purpose, design with passion.”</p>
      </div>
    </div>
  );
};

export default Profile;
