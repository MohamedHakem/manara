'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  const pathname = usePathname();
  // console.log("🚀 ~ NotFound ~ pathname:", pathname);

  useEffect(() => {
    // Function to handle the redirection after 5 seconds
    const handleRedirect = () => {
      let countdown = 5;
      const intervalId = setInterval(() => {
        if (countdown === 0) {
          clearInterval(intervalId);
          // Redirect to the homepage after 5 seconds or to the prev route if it's on the stack/website
          if (pathname === '/') {
            router.push('/');
          } else {
            router.back();
          }
        } else {
          countdown--;
          const countdownMessage = document.getElementById('countdownMessage');
          if (countdownMessage) {
            countdownMessage.textContent = `${countdown}`;
          }
        }
      }, 1000);
    };

    // Trigger redirection when the component mounts
    handleRedirect();
  }, [pathname, router]);

  return (
    <div>
      <h1>Page Not Found</h1>
      <p>
        Redirecting in <span id="countdownMessage">5</span> seconds...
      </p>
    </div>
  );
}
