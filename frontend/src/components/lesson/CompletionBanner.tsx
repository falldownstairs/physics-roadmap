"use client";
import React from 'react';

export default function CompletionBanner({ score, total }: { score: number; total: number }){
  return (
    <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center shadow-xl">
      <h3 className="text-xl font-bold text-green-700 mb-2">Lesson Complete!</h3>
      <p className="text-green-600">
        You scored {score} out of {total} questions correctly ({Math.round((score / total) * 100)}%)
      </p>
    </div>
  );
}


