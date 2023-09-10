import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

export const usePreserveScroll = () => {
  const router = useRouter();

  const scrollPositions = useRef<{ [url: string]: number | null }>({});
  const isBack = useRef(false);

  useEffect(() => {
    router.beforePopState(() => {
      isBack.current = true;
      return true;
    });

    const onRouteChangeStart = () => {
      const url = router.pathname;
      scrollPositions.current[url] = window.scrollY;
    };

    const onRouteChangeComplete = (url: string) => {
      console.log("first hello", scrollPositions.current[url]);

      if (isBack.current && scrollPositions.current[url]) {
        console.log("hello");
        window.scroll({
          top: scrollPositions.current[url] as number,
          behavior: "auto",
        });
      }

      console.log("window scroll completed", window.scrollY);

      isBack.current = false;
    };
    console.log(
      scrollPositions.current[router.pathname],
      "window scrooll",
      isBack.current
    );
    router.events.on("routeChangeStart", onRouteChangeStart);
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", onRouteChangeStart);
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, [router]);
};
