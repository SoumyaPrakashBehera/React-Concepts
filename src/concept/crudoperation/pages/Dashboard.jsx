import React from "react";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-[#f4f9f8]">

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg flex flex-col justify-between">

        <div>
          {/* Profile */}
          <div className="flex items-center gap-3 p-6 border-b">
            <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold">
              NS
            </div>
            <div>
              <h2 className="font-semibold text-gray-800">Nick Schchadov</h2>
              <p className="text-sm text-gray-500">Kuji Podcast</p>
            </div>
          </div>

          {/* Menu */}
          <nav className="p-4 space-y-2">

            <div className="p-3 rounded-lg hover:bg-teal-100 text-gray-700 cursor-pointer">
              Inbox
            </div>

            <div className="p-3 rounded-lg hover:bg-teal-100 text-gray-700 cursor-pointer flex justify-between">
              Alerts
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                2
              </span>
            </div>

            <div className="p-3 rounded-lg bg-teal-500 text-white cursor-pointer">
              Overview
            </div>

            <p className="text-gray-400 text-sm mt-6 mb-2 px-3">Podcasts</p>

            <div className="p-3 rounded-lg hover:bg-teal-100 text-gray-700 cursor-pointer">
              Episodes
            </div>

            <div className="p-3 rounded-lg hover:bg-teal-100 text-gray-700 cursor-pointer">
              Media
            </div>

            <div className="p-3 rounded-lg hover:bg-teal-100 text-gray-700 cursor-pointer">
              Materials
            </div>

            <div className="p-3 rounded-lg hover:bg-teal-100 text-gray-700 cursor-pointer">
              Contacts
            </div>

            <p className="text-gray-400 text-sm mt-6 mb-2 px-3">Analytics</p>

            <div className="p-3 rounded-lg hover:bg-teal-100 text-gray-700 cursor-pointer flex justify-between">
              Subscribers
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                34
              </span>
            </div>

            <div className="p-3 rounded-lg hover:bg-teal-100 text-gray-700 cursor-pointer">
              Channels
            </div>

            <div className="p-3 rounded-lg hover:bg-teal-100 text-gray-700 cursor-pointer">
              Integrations
            </div>

            <div className="p-3 rounded-lg hover:bg-teal-100 text-gray-700 cursor-pointer">
              Reports
            </div>
          </nav>
        </div>

        {/* Logout Button */}
        <div className="p-6 border-t">
          <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-medium transition">
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">

        {/* Top Stats */}
        <div className="grid grid-cols-4 gap-6 mb-8">

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500 text-sm">New Subscribers</p>
            <h2 className="text-2xl font-bold text-gray-800">5,097</h2>
            <p className="text-teal-500 text-sm mt-1">+33.45%</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Streams</p>
            <h2 className="text-2xl font-bold text-gray-800">47,403</h2>
            <p className="text-red-500 text-sm mt-1">-112.45%</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Engagement Rate</p>
            <h2 className="text-2xl font-bold text-gray-800">25.81</h2>
            <p className="text-teal-500 text-sm mt-1">+62.52%</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Avg Watch Time</p>
            <h2 className="text-2xl font-bold text-gray-800">45.4 min</h2>
            <p className="text-teal-500 text-sm mt-1">+4.46%</p>
          </div>

        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-3 gap-6">

          {/* Audience Chart */}
          <div className="col-span-2 bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Audience
            </h3>

            <div className="h-52 flex items-end gap-4">
              <div className="w-6 bg-teal-400 h-20 rounded"></div>
              <div className="w-6 bg-teal-400 h-28 rounded"></div>
              <div className="w-6 bg-teal-400 h-24 rounded"></div>
              <div className="w-6 bg-teal-400 h-32 rounded"></div>
              <div className="w-6 bg-teal-400 h-36 rounded"></div>
              <div className="w-6 bg-teal-400 h-40 rounded"></div>
            </div>
          </div>

          {/* Audience Satisfaction */}
          <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center justify-center">
            <h3 className="text-gray-600 mb-4">Audience Satisfaction</h3>

            <div className="w-32 h-32 rounded-full border-[12px] border-teal-400 flex items-center justify-center">
              <span className="text-xl font-bold text-gray-800">76.7%</span>
            </div>

            <p className="text-gray-400 text-sm mt-2">
              Based on likes / dislikes
            </p>
          </div>

        </div>

        {/* Webinar Card */}
        <div className="mt-8 bg-teal-500 text-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold">
            Learn how you can earn more than 20% each month!
          </h3>

          <p className="text-sm mt-2 opacity-90">
            Join our webinar and learn how to increase your monthly income
          </p>

          <button className="mt-4 bg-white text-teal-600 px-4 py-2 rounded-lg font-medium">
            Learn more
          </button>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;