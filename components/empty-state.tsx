export default function Empty() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 md:p-12 md:border md:rounded-xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-animal animal-icon w-40 h-40 text-black/80 mt-20"
      >
        <path d="M13 16a3 3 0 0 1 2.24 5"></path>
        <path d="M18 12h.01"></path>
        <path d="M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3"></path>
        <path d="M20 8.54V4a2 2 0 1 0-4 0v3"></path>
        <path d="M7.612 12.524a3 3 0 1 0-1.6 4.3"></path>
      </svg>
      <h2 className="prose md:prose-2xl">
        {' '}
        No Content here yet! I&apos;m working on it{' '}
      </h2>
      {/* <p className="prose">
        Continue learning, practice, or connect with your peers in the Manara Community!  
      </p> */}
    </div>
  );
}
