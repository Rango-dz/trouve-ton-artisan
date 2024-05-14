import React from 'react';

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Gérer la soumission du formulaire
  };

  return (
    <form onSubmit={handleSubmit}
     className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">Nom</label>
        <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-600">Message</label>
        <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        Envoyer
      </button>
    </form>
  );
};

export default ContactForm;