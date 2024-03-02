import { useRouter } from 'next/router';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;

  // Define an array of paths where Navbar and Footer should not be displayed
  const excludePaths = ['/login', '/register','/contact'];

  // Check if the current path is included in the excludePaths array
  const showNavbar = !excludePaths.includes(pathname);
  const showFooter = !excludePaths.includes(pathname);

  return (
    <SessionProvider session={pageProps.session}>
      {showNavbar && <Navbar />}
      <Component {...pageProps} />
      {showFooter && <Footer />}
    </SessionProvider>
  );
}
