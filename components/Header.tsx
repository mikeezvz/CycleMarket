import React from 'react'
import Image from 'next/image'
import jewel from '../app/assets/jewel.png'

export default function Header({ points }: { points: number }) {
  return (
    <header className="bg-white shadow">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">CycleMarket</h1>
        <div className="flex items-center text-sm text-gray-700">
          <Image src={jewel} alt="jewel" width={20} height={20} />
          <span className="ml-2">CyclePoints: <span className="font-semibold">{points}</span></span>
        </div>
      </div>
    </header>
  )
}
