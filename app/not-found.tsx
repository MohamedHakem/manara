import { redirect } from 'next/navigation';

export default function NotFound() {
  redirect('/');

  return null;
}

// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// export default function NotFound() {
//   const router = useRouter();

//   useEffect(() => {
//     router.push('/');
//   }, [router]);

//   return (
//     <div>
//       <h2>Page not found. Redirecting you to the home...</h2>
//       <p>If you are not redirected, <a href="/">click here to go home</a>.</p>
//     </div>
//   );
// }