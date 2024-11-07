"use client"

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  // Function to handle the redirection after 5 seconds
  const handleRedirect = () => {
    let countdown = 5;
    const intervalId = setInterval(() => {
      if (countdown === 0) {
        clearInterval(intervalId);
        router.back();
      } else {
        countdown--;
        document.getElementById("countdownMessage")!.textContent = `${countdown}`;
      }
    }, 1000);
  };

  // Trigger redirection when the component mounts
  handleRedirect();

  return (
    <div>
      <h1>Page Not Found</h1>
      <p>You are being redirected to the homepage in <span id="countdownMessage">5</span> seconds...</p>
    </div>
  );
}

// import { redirect } from 'next/navigation';
// export default function NotFound() {
//   redirect('/');
//   return null;
// }
