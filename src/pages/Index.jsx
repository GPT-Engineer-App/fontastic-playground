import React from 'react';
import FontTester from '../components/FontTester';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Font Tester</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <FontTester />
        </div>
      </div>
    </div>
  );
};

export default Index;