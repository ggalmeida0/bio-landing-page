import React from 'react';

import Canvas from '../components/Canvas';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroDemo from '../components/MainHeroDemo';
import Product from '../components/Product';

const App = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <MainHero />
          </div>
        </div>
        <MainHeroDemo />
      </div>
      <Canvas />
      <LazyShow>
        <>
          <Product />
          <div className="flex justify-center">
            <a
              href="https://master.d3mqj86iwprlmp.amplifyapp.com"
              className={`px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
            >
              Ready to give it a shot?
            </a>
          </div>
          <Canvas />
        </>
      </LazyShow>
      {/* <LazyShow>
        <>
          <Features />
          <Canvas />
        </>
      </LazyShow> */}
      {/* <LazyShow>
        <Pricing />
      </LazyShow>
      <LazyShow>
        <>
          <Canvas />
          <About />
        </>
      </LazyShow>
      <Analytics /> */}
    </div>
  );
};

export default App;
