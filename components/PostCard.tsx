import React from 'react'

export default function PostCard({ post }: { post: any }) {
  return (
    <article className="bg-white rounded shadow p-3">
      <div className="text-sm text-gray-500 font-mono">#{post.id}</div>

      <div className="mt-2 h-48 bg-gray-200 rounded overflow-hidden flex items-center justify-center">
        {post.image ? (
          // runtime-only preview URL
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.image} alt={`post-${post.id}`} className="object-contain h-full w-full" />
        ) : (
          <span className="text-gray-500">Photo placeholder</span>
        )}
      </div>

      <ul className="mt-3 text-sm text-gray-700 list-disc list-inside">
        <li>- Item: {post.item}</li>
        <li>- Amount: {post.amount}</li>
        <li>- Notes: {post.notes}</li>
      </ul>
    </article>
  )
}
