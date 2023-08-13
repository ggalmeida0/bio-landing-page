import React from 'react';

const MainHeroDemo = () => {
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex justify-center">
      <div className="iphone-frame">
        <div className="video-container">
          <video muted width="100%" height="100%" loop autoPlay>
            <source src="/assets/videos/demo.mp4" type="video/mp4" />
            Browser does not support videos
          </video>
        </div>
      </div>
    </div>
  );
};

export default MainHeroDemo;
