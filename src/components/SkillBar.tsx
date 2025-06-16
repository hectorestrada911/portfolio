"use client";
import React, { useEffect, useState } from 'react';

interface SkillBarProps {
  name: string;
  percent: number; // 0-100
  colorClass?: string;
}

export default function SkillBar({ name, percent, colorClass = 'bg-primary-500' }: SkillBarProps) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => setWidth(percent), 200);
    return () => clearTimeout(timeout);
  }, [percent]);
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-200">{name}</span>
        <span className="text-xs text-gray-400">{percent}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-3">
        <div
          className={`h-3 rounded-full transition-all duration-700 ${colorClass}`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
} 