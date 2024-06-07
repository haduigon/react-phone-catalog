/* eslint-disable */
import { useEffect, useRef, useState } from 'react';

type Props = {
  render: string;
};

const BigSlider: React.FC<Props> = ({ render }) => {
  const [sliderImgSize, setSliderImgSize] = useState(0);
  const [step, setStep] = useState(0);
  const sliderRef = useRef<null | HTMLDivElement>(null);
  const [slideTrigger, _setSlideTrigger] = useState(false);

  const screenWidth = document.getElementById('root')?.offsetWidth || {};

  useEffect(() => {
    if (sliderRef.current && +screenWidth <= 639) {
      setSliderImgSize(1);
    } else {
      setSliderImgSize(0);
    }

    const click = document.getElementById('buttonToClick');

    let timer: any;

    timer = setInterval(() => {
      click?.click();
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [slideTrigger, sliderRef.current?.offsetWidth]);

  useEffect(() => {
    const click = document.getElementById('buttonToClick');

    click?.click();
  }, [render]);

  const banners = [
    [
      { image: './img/icons/Banner.svg' },
      { image: './img/icons/Banner2jpg.jpg' },
    ],
    [
      { image: './img/icons/image16.png' },
      { image: './img/icons/image16_2.png' },
    ],
  ];

  function goBack() {
    if (step < 0) {
      setStep(prev => prev + 100);
    }
  }

  function goForward() {
    if (step <= -100) {
      setStep(100);
    }

    setStep(prev => prev + -100);
  }

  return (
    <div className="banner-block">
      <div
        className="banner-button banner-button--left banner-block"
        onClick={goBack}
        onKeyDown={goBack}
        role="button"
        tabIndex={0}
        style={{
          height: Math.trunc(
            sliderRef.current ? +sliderRef.current.offsetWidth / 2.6 : 0,
          ),
        }}
      >
        <img src="./img/icons/arrow3.svg" alt="img" />
      </div>

      <div className="images-container" ref={sliderRef}>
        {banners[sliderImgSize].map(banner => {
          return (
            <img
              className="image"
              key={banner.image}
              src={banner.image}
              style={{
                width: Math.trunc(
                  sliderRef.current ? +sliderRef.current.offsetWidth : 0,
                ),
                height: Math.trunc(
                  sliderRef.current
                    ? +screenWidth >= 640
                      ? +sliderRef.current.offsetWidth / 2.6
                      : +sliderRef.current.offsetWidth
                    : 0,
                ),
                transform: `translateX(${step}%)`,
              }}
            />
          );
        })}
      </div>

      <div
        id="buttonToClick"
        className="banner-button banner-button--right banner-block"
        onClick={goForward}
        onKeyDown={goForward}
        role="button"
        tabIndex={0}
        style={{
          height: Math.trunc(
            sliderRef.current ? +sliderRef.current.offsetWidth / 2.6 : 0,
          ),
        }}
      >
        <img src="./img/icons/arrowLeftBlack.svg" alt="img" />
      </div>
    </div>
  );
};

export default BigSlider;
