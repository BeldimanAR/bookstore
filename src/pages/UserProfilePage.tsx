import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { User } from '../types/user';
import Avatar from '../components/Shared/Avatar';
import SuccessModal from '../components/Shared/SuccessModal';

const UserProfilePage: React.FC = () => {
  const { user, updateUser } = useContext(UserContext);

  const [formData, setFormData] = useState<User>(user);

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }
    updateUser(formData);

    setIsSuccessModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">User Profile</h1>

      <div>
        <Avatar firstName={formData.firstName} lastName={formData.lastName} />
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg bg-white p-6 shadow-md rounded space-y-4"
      >
        <div>
          <label className="block mb-1 font-semibold">First Name</label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Last Name</label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Date of Birth</label>
          <input
            name="dateOfBirth"
            type="date"
            value={formData.dateOfBirth || ''}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Save Profile
        </button>
      </form>

      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        message="Profile updated successfully!"
      />
    </div>
  );
};

export default UserProfilePage;
