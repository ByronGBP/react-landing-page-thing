export const lazyLoad = (query) => {
  const matchQuery = query || '.lazy-bg';
  var lazyImages = [].slice.call(document.querySelectorAll(matchQuery));
  createObserver(lazyImages);
};

export const triggerAnimation = (query) => {
  const matchQuery = query || '.trigger-animation';
  var elements = [].slice.call(document.querySelectorAll(matchQuery));
  createObserver(elements);
};

export const createObserver = (elements, classToAdd) => {
  //TODO:- add pollyfill for unsupported browsers -> https://github.com/w3c/IntersectionObserver/tree/master/polyfill
  //        or use the `anotherOne` function
  if ("IntersectionObserver" in window) {
    const newClass = classToAdd || 'is-ready';
    //Idea:- Everytime an entry isIntersecting will has a delay 
    //       that will increment each time theres a new one
    let hackForDelay = 400; 
    let intersectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            let currentTarget = entry.target;
            currentTarget.classList.add(newClass);
            if(currentTarget.dataset.src) {
              if (currentTarget.tagName === "IMG") {
                currentTarget.src = currentTarget.dataset.src;
              } else {
                currentTarget.style.backgroundImage = currentTarget.dataset.src;
              }
            }
            intersectionObserver.unobserve(currentTarget);
          }, hackForDelay);
          hackForDelay += (100 + (idx/50) / 1500);
          if (hackForDelay > 1500) {
            hackForDelay = 600;
          }
        }
      });
    });

    elements.forEach((element) => {
      intersectionObserver.observe(element);
    });
  }
};

export const anotherOne = (elements, classToAdd) => {
  let lazyElements = elements;
  let active = false;
  let newClass = classToAdd || 'is-ready';

  const lazyLoad = () => {
    if (active === false) {
      active = true;
      setTimeout(() => {
        lazyElements.forEach((lazyElement) => {
          if ((lazyElement.getBoundingClientRect().top <= window.innerHeight && lazyElement.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyElement).display !== "none") {
            lazyElement.src = lazyElement.dataset.src;
            lazyElement.srcset = lazyElement.dataset.srcset;
            lazyElement.classList.add(newClass);

            console.log('happend with ->', lazyElement);

            lazyElements = lazyElements.filter((element) => {
              return element !== lazyElement;
            });

            if (lazyElements.length === 0) {
              document.removeEventListener('scroll', lazyLoad);
              window.removeEventListener('resize', lazyLoad);
              window.removeEventListener('orientationchange', lazyLoad);
            }
          }
        });
        active = false;
      }, 200);
    }
  };

  document.addEventListener('scroll', lazyLoad);
  window.addEventListener('resize', lazyLoad);
  window.addEventListener('orientationchange', lazyLoad);
};