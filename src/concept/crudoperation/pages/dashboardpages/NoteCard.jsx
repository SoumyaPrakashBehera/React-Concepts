import React from "react";
import { Link } from "react-router-dom";

const NoteCard = ({ data }) => {
  return (
    <div className="flex justify-center items-center p-10 ">

      <div className="w-[320px] md:w-[350px] bg-white rounded-2xl shadow-lg p-5 border border-teal-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

        {/* Title */}
        <h2 className="text-lg font-semibold text-teal-700 mb-2">
          Title: {data.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          Desc: {data.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs bg-teal-50 text-teal-700 px-3 py-1 rounded-full border border-teal-200">
            {data.tags}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-4">

          <button className="px-4 py-2 text-sm bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg shadow-md transition">
            <Link to={`/dashboard/updatenotes/${data.userid}/${data.id}`}>Update</Link>
          </button>

          <button className="px-4 py-2 text-sm bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md transition">
            Delete
          </button>

        </div>

      </div>

    </div>
  );
};

export default NoteCard;