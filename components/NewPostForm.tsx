import React, { useState } from 'react'

type Props = {
  onCreate?: (payload: { item: string; amount: number; notes: string; image?: string | null }) => void
}

export default function NewPostForm({ onCreate }: Props) {
  const [item, setItem] = useState('')
  const [amount, setAmount] = useState('1')
  const [notes, setNotes] = useState('')
  const [preview, setPreview] = useState<string | null>(null)

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files && e.target.files[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setPreview(url)
  }

  function submit() {
    const amt = Number(amount) || 0
    if (onCreate) {
      onCreate({ item: item.trim(), amount: amt, notes, image: preview })
    }
    // clear form (runtime only)
    setItem('')
    setAmount('1')
    setNotes('')
    setPreview(null)
  }

  return (
    <div className="bg-white p-4 rounded shadow ring-1 ring-cycle-50">
      <h3 className="text-2xl font-bold mb-3 text-cycle-700">Create a new post</h3>

      <div className="mb-3">
        <label className="block text-sm text-gray-700">Photo</label>
        <div className="mt-2 flex items-center gap-3">
          <label htmlFor="photo-upload" className="px-3 py-2 bg-cycle-500 hover:bg-cycle-700 text-white rounded cursor-pointer">Upload Photo</label>
          <input id="photo-upload" type="file" accept="image/*" onChange={handleFile} className="hidden" />
          {preview && <img src={preview} alt="preview" className="h-24 object-contain rounded" />}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
  <input value={item} onChange={(e) => setItem(e.target.value)} placeholder="Item name" className="p-2 border rounded border-cycle-100" />
  <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount (number)" type="number" className="p-2 border rounded border-cycle-100" />
  <input value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Notes" className="p-2 border rounded border-cycle-100" />
      </div>

      <div className="mt-3 text-right">
  <button onClick={submit} className="px-4 py-2 bg-cycle-500 hover:bg-cycle-700 text-white rounded">Post</button>
      </div>
    </div>
  )
}
