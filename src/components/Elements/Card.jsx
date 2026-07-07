import React from "react";

function Card(props) {
  const { title, link = false, desc } = props;

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-2xl text-gray-02 dark:text-gray-200">
          {title}
        </h2>

        {link && (
          <span className="text-xs text-gray-03 dark:text-gray-400 cursor-pointer hover:text-primary">
            View All
          </span>
        )}
      </div>

      {/* Card */}
      <div
        className="
          flex-1
          rounded-xl
          p-4

          bg-white
          dark:bg-[#1E293B]

          text-gray-900
          dark:text-white

          border
          border-gray-200
          dark:border-slate-600

          ring-1
          ring-gray-200
          dark:ring-slate-700

          shadow-sm
          dark:shadow-xl
          dark:shadow-black/20

          transition-all
          duration-300
        "
      >
        {desc}
      </div>
    </div>
  );
}

export default Card;