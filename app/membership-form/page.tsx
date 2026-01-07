'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function MembershipFormPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    transactionId: '',
    telegramUsername: '',
    comments: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          Membership Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white mb-2">
              Name<span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-gray-600 text-white px-4 py-3 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-gray-600 text-white px-4 py-3 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-white mb-2">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent border border-gray-600 text-white px-4 py-3 focus:border-primary focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-white mb-2">
              Bitcoin Transaction ID (TxID)<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="transactionId"
              value={formData.transactionId}
              onChange={handleChange}
              required
              className="w-full bg-transparent border border-gray-600 text-white px-4 py-3 focus:border-primary focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-white mb-2">
              Telegram Username (To be added to our BAS chat)
            </label>
            <input
              type="text"
              name="telegramUsername"
              value={formData.telegramUsername}
              onChange={handleChange}
              className="w-full bg-transparent border border-gray-600 text-white px-4 py-3 focus:border-primary focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-white mb-2">
              Comments
            </label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              rows={4}
              className="w-full bg-transparent border border-gray-600 text-white px-4 py-3 focus:border-primary focus:outline-none transition-colors resize-none"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-4 font-medium hover:bg-opacity-90 transition-colors uppercase tracking-wider"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </main>
  );
}