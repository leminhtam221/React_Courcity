import { useEffect } from 'react';

const arrScript = [
  'assets/js/jquery.min.js',
  'assets/js/popper.min.js',
  'assets/js/bootstrap.min.js',
  'assets/js/wow.min.js',
  'assets/js/waypoints.min.js',
  'assets/js/jquery.counterup.min.js',
  'assets/js/jquery.mixitup.min.js',
  'assets/inc/lightbox/js/jquery.fancybox.pack.js',
  'assets/inc/lightbox/js/lightbox.js',
  'assets/js/scrolltopcontrol.js',
  'assets/js/bootstrap-4-navbar.js',
  'assets/js/jquery.magnific-popup.min.js',
  // 'assets/js/color-switcher.js',
  // 'assets/js/color-switcher-active.js',
  'assets/js/custom.js',
];

function useImportScript() {
  return useEffect(() => {
    const newArrScript = [];

    arrScript.forEach((item) => {
      const script = document.createElement('script');
      script.src = item;
      script.async = true;
      document.body.appendChild(script);
      newArrScript.push(script);
    });
    return () => {
      newArrScript.forEach((item) => {
        document.body.removeChild(item);
      });
    };
  });
}

export default useImportScript;
