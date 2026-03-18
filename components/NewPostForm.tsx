import React from 'react'

export default function NewPostForm() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold mb-2">Create a new post</h3>
      <div className="mb-2">
        <label className="block text-sm text-gray-700">Photo</label>
        <button className="mt-2 px-3 py-2 bg-blue-600 text-white rounded">Upload Photo (exemplaric)</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <input placeholder="Item name(s)" className="p-2 border rounded" />
        <input placeholder="Item amount(s)" className="p-2 border rounded" />
        <input placeholder="Notes" className="p-2 border rounded" />
      </div>

      <div className="mt-3 text-right">
        <button className="px-4 py-2 bg-green-600 text-white rounded">Post</button>
      </div>
    </div>
  )
}
