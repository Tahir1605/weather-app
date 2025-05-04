// src/components/ForecastCard.jsx
import React from 'react';

function ForecastCard({ day }) {
  const date = new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' });

  return (
    <div className="bg-white rounded-2xl shadow p-4 w-24 text-center">
      <p className="font-semibold">{date}</p>
      <img src={`https:${day.day.condition.icon}`} alt="icon" className="w-10 mx-auto" />
      <p className="font-medium">{day.day.avgtemp_c}°C</p>
    </div>
  );
}

export default ForecastCard;
