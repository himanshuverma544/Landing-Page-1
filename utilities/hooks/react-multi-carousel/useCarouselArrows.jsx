import React from "react";

import useWindowSize from "../general/useWindowSize";


const useCarouselArrows = ({
  carouselRef = null,
  activeArrowIcon: ActiveArrowIcon = ({ className, style }) => 
    <div className={`${className}`} style={{ fontWeight: 500, ...style }}>
      {'>'}
    </div>,
  inactiveArrowIcon: InactiveArrowIcon = ({ className, style }) => 
    <div className={`${className}`} style={{ fontWeight: 500, ...style }}>
      {''}
    </div>,
}) => {


  const [isDisabled, setIsDisabled] = React.useState({
    leftArrowBtn: true,
    rightArrowBtn: false,
  });


  const disableArrowBtn = React.useCallback(() => {

    const listRefCurrent = carouselRef?.current?.listRef?.current;

    if (!listRefCurrent)
      return;

    const firstDot = listRefCurrent.nextElementSibling?.firstElementChild;
    const lastDot = listRefCurrent.nextElementSibling?.lastElementChild;

    if (!firstDot || !lastDot)
      return;

    const activeClassName = 'react-multi-carousel-dot--active';

    setIsDisabled(
      firstDot?.classList?.contains(activeClassName)
        ? { leftArrowBtn: true, rightArrowBtn: false }
        : (
            lastDot?.classList?.contains(activeClassName)
              ? prev => ({ ...prev, rightArrowBtn: true })
              : prev => ({ ...prev, leftArrowBtn: false })
          )
    );   
  }, [carouselRef]);


  const CarouselArrows = () => {
    
    const { breakpoints: { sm, md }, screenWidth } = useWindowSize();
    
    return (
      <div
        className="carousel-arrows"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <button
          className="left-arrow-btn"
          disabled={isDisabled.leftArrowBtn}
          style={{ 
            marginLeft: screenWidth >= md
              ? '2.25rem'
              : (screenWidth >= sm ? '1.75rem' : '1.25rem')
          }}
          onClick={() => carouselRef.current.previous()}
        >
          {!isDisabled.leftArrowBtn ? (
            <ActiveArrowIcon
              className="left-arrow-active"
              style={{ transform: `rotate(180deg)` }} 
            />
          ) : (
            <InactiveArrowIcon className="left-arrow-disabled" />
          )}
        </button>
        <button
          className="right-arrow-btn"
          disabled={isDisabled.rightArrowBtn}
          style={{ 
            marginRight: screenWidth >= md
            ? '2.25rem'
            : (screenWidth >= sm ? '1.75rem' : '1.25rem')
          }}
          onClick={() => carouselRef.current.next()}
        >
          {!isDisabled.rightArrowBtn ? (
            <ActiveArrowIcon className="right-arrow-active"/>
          ) : (
            <InactiveArrowIcon
              className="right-arrow-disabled"
              style={{ transform: `rotate(180deg)` }}
            />
          )}
        </button>
      </div>
    );
  }

  return {
    CarouselArrows,
    disableArrowBtn,
  };
};


export default useCarouselArrows;