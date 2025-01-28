import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='mt-10 mb-10'>
      <h2 className="text-center md:text-4xl text-3xl">Sorry! Page not found</h2>
      <div className="notFoundContainer w-fit m-auto mt-20" >
        <Link href="/" className="text-center text-2xl text-blue-800 hover:text-black duration-300">Return Home</Link>
      </div>
    </div>
  )
}