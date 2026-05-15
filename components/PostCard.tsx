import React from 'react'
import Image from 'next/image'
import placeholder from '../app/assets/placeholder.png'

export default function PostCard({ post }: { post: any }) {
  return (
  <article className="bg-white rounded shadow p-3 ring-1 ring-cycle-50">
    <div className="text-sm text-gray-500 font-mono">#{post.id}</div>

  <div className="mt-2 h-48 bg-gray-200 rounded overflow-hidden flex items-center justify-center">
        {post.image ? (
          // runtime-only preview URL
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.image} alt={`post-${post.id}`} className="object-contain h-full w-full" />
        ) : (
          <div className="flex items-center justify-center h-full w-full">
            <Image src={placeholder} alt="placeholder" width={120} height={120} className="object-contain" />
          </div>
        )}
      </div>

      {/* status badge placed below the image and above the listing */}
      <div className="mt-3">
        {post.status === 'Verified' && (
          <span className="inline-flex items-center gap-2">
            <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Verified</span>
            {post.pointsEarned ? (
              <span className="px-2 py-1 text-xs bg-cycle-50 text-cycle-700 rounded">+{post.pointsEarned} pts</span>
            ) : null}
          </span>
        )}
        {post.status === 'In verification' && (
          <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded">In verification</span>
        )}
        {post.status === 'Unapproved' && (
          <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded">Unapproved</span>
        )}
      </div>

      <ul className="mt-3 text-sm text-gray-700 list-disc list-inside">
        <li>- Item: {post.item}</li>
        <li>- Item Amount: {post.amount}</li>
        <li>- Notes: {post.notes}</li>
      </ul>
    </article>
  )
}
