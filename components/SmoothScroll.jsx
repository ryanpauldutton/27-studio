// 'use client'

// import { useEffect, useRef } from 'react';
// import LocomotiveScroll from 'react-locomotive-scroll';

// const SmoothScroll = ({ children }) => {
//   const scrollRef = useRef(null);
//   const scrollInstanceRef = useRef(null);

//   useEffect(() => {
//     const initScrollInstance = () => {
//       scrollInstanceRef.current = new LocomotiveScroll({
//         el: scrollRef.current,
//         smooth: true,
//       });
//     };

//     const destroyScrollInstance = () => {
//       if (scrollInstanceRef.current) {
//         scrollInstanceRef.current.destroy();
//         scrollInstanceRef.current = null;
//       }
//     };

//     const handleRouteChange = () => {
//       destroyScrollInstance();
//     };

//     initScrollInstance();

//     window.addEventListener('beforeunload', destroyScrollInstance);
//     window.addEventListener('unload', destroyScrollInstance);
//     window.addEventListener('pagehide', destroyScrollInstance);
//     window.addEventListener('popstate', destroyScrollInstance);
//     window.addEventListener('hashchange', destroyScrollInstance);

//     return () => {
//       destroyScrollInstance();

//       window.removeEventListener('beforeunload', destroyScrollInstance);
//       window.removeEventListener('unload', destroyScrollInstance);
//       window.removeEventListener('pagehide', destroyScrollInstance);
//       window.removeEventListener('popstate', destroyScrollInstance);
//       window.removeEventListener('hashchange', destroyScrollInstance);
//     };
//   }, []);

//   return <div ref={scrollRef}>{children}</div>;
// };

// export default SmoothScroll;