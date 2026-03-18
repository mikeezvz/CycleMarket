import React from 'react'

export default function Header({ points }: { points: number }) {
  return (
    <header className="bg-white shadow">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">CycleMarket</h1>
        <div className="text-sm text-gray-700">CyclePoints: <span className="font-semibold">{points}</span></div>
      </div>
    </header>
  )
}
