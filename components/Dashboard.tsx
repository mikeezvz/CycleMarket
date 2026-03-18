import React from 'react'
import Header from './Header'
import NewPostForm from './NewPostForm'
import PostCard from './PostCard'

const samplePosts = [
  { id: 'CM10304', items: ['PVC Pipe', 'PVC Elbow'], amount: [2, 4], notes: 'Slightly used' },
  { id: 'CM10305', items: ['PVC Sheet'], amount: [1], notes: 'Good condition' },
  { id: 'CM10306', items: ['PVC Connector', 'PVC Glue'], amount: [5, 1], notes: 'Sealed glue' },
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header points={128} />
      <div className="max-w-5xl mx-auto p-4">
        <section className="mb-6">
          <NewPostForm />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {samplePosts.map((p) => (
              <PostCard key={p.id} post={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
