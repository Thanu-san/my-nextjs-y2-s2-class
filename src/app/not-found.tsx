import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <button className="border p-4 rounded bg-red-400">
        <Link href="/">Return Home</Link>
      </button>
    </div>
  )
}