import React from 'react';

export default function Education() {
  return (
    <div className="min-h-screen bg-zinc-200 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">
        <h2 className="text-4xl font-bold mb-8 text-pink-700 text-center">Education</h2>

        <div className="space-y-8">
          {/* Bachelor Degree */}
          <div className="border-l-4 border-pink-700 pl-6">
            <h3 className="text-2xl font-semibold">Bachelor Degree</h3>
            <p className="text-gray-700 mt-1">
              Gomal University <span className="italic text-sm">(2021 - 2025)</span>
            </p>
          </div>

          {/* FSC ICS */}
          <div className="border-l-4 border-pink-700 pl-6">
            <h3 className="text-2xl font-semibold">FSC (ICS) - 80%</h3>
            <p className="text-gray-700 mt-1">
              Iqra Science School <span className="italic text-sm">(2019 - 2021)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
