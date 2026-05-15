import React from 'react'
import Image from 'next/image'
import jewel from '../app/assets/jewel.png'

export default function Header({ points }: { points: number }) {
  return (
  <header className="bg-beige-50/90 shadow backdrop-blur-sm border-b border-beige-200">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <h1 className="text-2xl font-bold">CycleMarket</h1>
          <nav className="hidden md:flex items-center gap-4">
            <a href="#" onClick={(e) => e.preventDefault()} className="text-sm text-gray-700 hover:text-cycle-700">Rewards</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-sm text-gray-700 hover:text-cycle-700">Become a Cycleteer</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-sm text-gray-700 hover:text-cycle-700">Community Impact</a>
          </nav>
        </div>
        <div className="flex items-center text-sm text-cycle-900">
          <div className="rounded-full p-1 bg-cycle-50 mr-2">
            <Image src={jewel} alt="jewel" width={20} height={20} />
          </div>
          <span className="ml-2">CyclePoints: <span className="font-semibold text-cycle-700">{points}</span></span>
        </div>
      </div>
    </header>
  )
}
