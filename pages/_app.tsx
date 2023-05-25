import { PageWithMainLayoutType } from '@/src/types/pageWithLayout';
import '@/styles/globals.scss'
import "bootstrap/dist/css/bootstrap.css"
import type { AppProps } from 'next/app'
import { Fragment, useState } from 'react';
import { useEffect } from "react";
import { useRouter } from "next/router";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type AppLayoutProps = AppProps & {
  Component: PageWithMainLayoutType;
};

export default function App({ Component, pageProps }: AppLayoutProps) {
  const getLayout = Component.getLayout ?? ((page: any) => page);
  const Layout = Component.layout ?? Fragment;
  const router = useRouter();
  
  const [goingUp, setGoingUp] = useState(false)

  useEffect(() => {
    // Tap to Top Scroll 
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 500)
        setGoingUp(true);
      else
        setGoingUp(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  const tapToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0
    });
  }

  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, [router.events]);

  return  (
    <Layout>
      {getLayout(<Component {...pageProps} />)}
      <div className="tap-top" style={goingUp ? { display: 'block' } : { display: 'none' }} onClick={tapToTop}>
          <div><i className="fa fa-angle-double-up"></i></div>
        </div>
    </Layout>
  )
}
