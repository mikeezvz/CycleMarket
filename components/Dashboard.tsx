"use client"

import React, { useState } from 'react'
import Header from './Header'
import NewPostForm from './NewPostForm'
import PostCard from './PostCard'

type Post = {
  id: string
  item: string
  amount: number
  notes: string
  // image preview URL (optional, runtime only)
  image?: string | null
}

const initialPosts: Post[] = [
  { id: 'CM10304', item: 'PVC Pipe', amount: 2, notes: 'Slightly used' },
  { id: 'CM10305', item: 'PVC Sheet', amount: 1, notes: 'Good condition' },
  { id: 'CM10306', item: 'PVC Connector', amount: 5, notes: 'Sealed glue' },
]

export default function Dashboard() {
  const [posts, setPosts] = useState<Post[]>(initialPosts)

  function addPost(payload: Omit<Post, 'id'>) {
    // create a simple unique post id for prototype: CM + timestamp
    const id = 'CM' + String(Date.now()).slice(-6)
    const newPost: Post = { id, ...payload }
    setPosts((s) => [newPost, ...s])
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header points={128} />
      <div className="max-w-5xl mx-auto p-4">
        <section className="mb-6">
          <NewPostForm onCreate={addPost} />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {posts.map((p) => (
              <PostCard key={p.id} post={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
