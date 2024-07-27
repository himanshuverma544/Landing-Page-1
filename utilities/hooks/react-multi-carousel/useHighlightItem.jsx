import React from 'react';


const useHighlightItem = ({ carouselRef = null }) => {

  
  const [highlightItem, setHighlightItem] = React.useState(1);

  
  const highlightMiddleItems = React.useCallback(() => {

    const {
      listRef: { current: { childNodes: testimonialsNode } },
      state: { totalItems }
    } = carouselRef.current;

    const activeClassName = "react-multi-carousel-item--active";
    let activeClassNameCount = 0;
    let middleTestimonialId;

    for (const testimonialNode of testimonialsNode) {

      if (testimonialNode.classList.contains(activeClassName))
        activeClassNameCount++;

      if (activeClassNameCount === (2 + 1)) { // adding 1 because 3rd becomes 2nd
        middleTestimonialId = testimonialNode.firstElementChild.getAttribute('data-id');
        break;
      }
    }

    setHighlightItem(
      middleTestimonialId == (totalItems - 1) ? 1 : middleTestimonialId
    );
  }, [carouselRef]);


  return { 
    highlightItem,
    highlightMiddleItems
  };
}


export default useHighlightItem;