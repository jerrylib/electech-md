import React, { useEffect, useRef, useState } from 'react';

const HeroSlider = () => {
  const [current, setCurrent] = useState(0)
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // 确保视频在加载后开始播放
      video.addEventListener('loadeddata', () => {
        video.play().catch(error => {
          console.log('Video autoplay failed:', error);
        });
      });

      // 处理视频加载错误
      video.addEventListener('error', (e) => {
        console.log('Video loading error:', e);
      });
    }
  }, []);

  const tabChange = (offset) => {
    const nextCurrent = (current+offset)%3
    setCurrent(nextCurrent)
  }

  return (
    <section
      className="swiper-container swiper-slider swiper-slider_full"
    >
      <div className="swiper-wrapper">
        <div className="swiper-slide swiper-slide_video context-dark" 
        style={{display: current === 0 ? 'block' : 'none'}}
        >
          <div className="vide_bg relative overflow-hidden h-full">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 -z-10 object-cover"
              poster="/video/video.jpg"
            >
              <source src="/video/video.mp4" type="video/mp4" />
              <source src="/video/video.webm" type="video/webm" />
              <source src="/video/video.ogv" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
            <div
              className="swiper-slide-caption text-center relative z-10  h-full"
              data-speed="0.5"
              data-fade="true"
            >
              <div className="container">
                <div
                  className='text-6xl font-bold tracking-wide'
                >
                  Welcome to Mingding
                </div>
                <div
                  className="text-width-2 block-centered text-xl mt-8 font-bold tracking-wide"
                  data-caption-animate="fadeInUpSmall"
                  data-caption-delay="200"
                >
                  Our company provides services for small and medium businesses
                  located worldwide.
                </div>
                <div className="group-lg group-middle">
                  <a
                    className="btn btn-black"
                    data-caption-animate="fadeInUpSmall"
                    data-caption-delay="350"
                    href="#"
                    data-custom-scroll-to="services"
                  >
                    View Services
                  </a>
                  <a
                    className="btn btn-primary"
                    data-caption-animate="fadeInUpSmall"
                    data-caption-delay="350"
                    href="#"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="swiper-slide context-dark bg-overlay-darker bg-[url(/images/slide-1.jpg)]"
          style={{display: current === 1 ? 'block' : 'none'}}
        >
          <div className="swiper-slide-caption text-start">
            <div className="container mt-16">
              <h2 className='text-6xl font-bold tracking-wide'
              >
                Professional Business
                <br className="d-none d-lg-block" />
                Consulting Services
              </h2>
              <a
                className="btn btn-primary"
                data-caption-animate="fadeInLeftSmall"
                data-caption-delay="200"
                href="#"
              >
                View More
              </a>
            </div>
          </div>
        </div>
        <div
          className="swiper-slide context-dark bg-overlay-darker bg-[url(/images/slide-2.jpg)]"
          style={{display: current === 2 ? 'block' : 'none'}}
        >
          <div className="swiper-slide-caption text-center">
            <div className="container">
              <h1 className='text-6xl font-bold tracking-wide' >
                <span>SBG</span>
              </h1>
              <h3 className='text-3xl font-bold tracking-wide'
              >
                Quality Business Advisory
              </h3>
              <div className="group-lg group-middle">
                <a
                  className="btn btn-primary"
                >
                  View Services
                </a>
                <a
                  className="btn btn-black"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev linear-icon-chevron-left hover:bg-blue-400" onClick={() => tabChange(-1)}></div>
      <div className="swiper-button-next linear-icon-chevron-right hover:bg-blue-400" onClick={() => tabChange(1)}></div>
    </section>
  );
};

export default HeroSlider;