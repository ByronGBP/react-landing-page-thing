document.addEventListener("DOMContentLoaded", () => {
  var lazyImages = [].slice.call(document.querySelectorAll(".lazy-bg"));
  //TODO:- add pollyfill for unsupported browsers -> https://github.com/w3c/IntersectionObserver/tree/master/polyfill
  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.classList.add("ready");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach((lazyImage) => {
      lazyImageObserver.observe(lazyImage);
    });
  }
});