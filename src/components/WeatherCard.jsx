import React from 'react';

function WeatherCard({ day }) {
  const date = new Date(day.date);
  const options = { weekday: 'short' };

  return (
    <div className="bg-white/80 dark:bg-gray-800 rounded-xl p-4 w-44 text-center shrink-0 shadow">
      <div className="text-sm font-semibold">{date.toLocaleDateString('en-US', options)}</div>
      <img src={`https:${day.day.condition.icon}`} alt="icon" className="mx-auto w-10 h-10 " />
      <div className="text-lg font-bold">{day.day.avgtemp_c}°C</div>
    </div>
  );
}

export default WeatherCard;
