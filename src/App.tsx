import type { Component } from 'solid-js';

import Button from './components/button';

const App: Component = () => {
  return (
    <div>
      <header class="flex flex-col py-12 px-16 gap-56 lg:py-20 lg:items-center">
        <div class="flex flex-row items-center justify-between lg:w-9/10 max-w-1036">
          <a href="/">
            <span class="hex-type-h4 color-black">Hexlab</span>
            <span class="hex-type-h4 color-primary">.</span>
          </a>
          <Button class="invisible truncate hex-btn hex-btn-primary hex-btn-sm lg:visible">
            <span class="hex-type-btn-sm">
              Let's talk
            </span>
          </Button>
        </div>
      </header>
      <section class="flex flex-col gap-20 py-40 px-16 text-center items-center">
        <p class='hex-type-display max-w-620'>
          <span class="text-black">
            We're digital product creators
          </span>
          <span class='text-primary'>.</span>
        </p>
        <p class="hex-type-body text-gray-dark max-w-333">
          Proper business solution for your business strategy and corporation.
        </p>
        <Button class="hex-btn hex-btn-primary hex-btn-lg w-full sm:w-fit">
          <span class="hex-type-btn-lg">
            Let's get started
          </span>
        </Button>
        <img src="/assets/bruvs.png" alt="bruvs" class="hidden object-scale-down sm:block w-969 h-472" />
      </section >
      <section class="flex flex-col lg:flex-row gap-20 py-64 px-16 justify-center items-center lg:py-80">
        <div class="flex flex-col max-w-508">
          <p class='hex-type-eyebrow text-primary'>
            What we do
          </p>
          <p class="hex-type-display text-56 leading-64">
            <span class='text-black'>We're a team of creatives who are excited about unique ideas</span>
            <span class='text-primary'>.</span>
          </p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-508">
          <div class="flex flex-col gap-12 py-24 px-16 text-center items-center">
            <div class="h-88 w-88 flex justify-center items-center">
              <img src='/assets/radio.png' alt='radio' class='w-64 h-64' />
            </div>
            <div>
              <p class='hex-type-eyebrow text-primary'>
                Web Design
              </p>
              <p class="hex-type-h4">
                <span class="color-black">
                  Website Design
                </span>
                <span class="color-primary">.</span>
              </p>
            </div>
            <p class="hex-type-body color-gray-dark">
              Our Creative team made a great and beautiful websites.
            </p>
          </div>
          <div class="flex flex-col gap-12 py-24 px-16 text-center items-center">
            <div class="h-88 w-88 flex justify-center items-center">
              <img src='/assets/computer.png' alt='computer' class='w-64 h-64' />
            </div>
            <div>
              <p class='hex-type-eyebrow text-primary'>
                App Design
              </p>
              <p class="hex-type-h4">
                <span class="color-black">
                  Mobile App Design
                </span>
                <span class="color-primary">.</span>
              </p>
            </div>
            <p class="hex-type-body color-gray-dark">
              Our Creative team made a great and beautiful apps.
            </p>
          </div>
          <div class="flex flex-col gap-12 py-24 px-16 text-center items-center">
            <div class="h-88 w-88 flex justify-center items-center">
              <img src='/assets/rainbow.png' alt='rainbow' class='w-64 h-64' />
            </div>
            <div>
              <p class='hex-type-eyebrow text-primary'>
                Brand Design
              </p>
              <p class="hex-type-h4">
                <span class="color-black">
                  Brand Design
                </span>
                <span class="color-primary">.</span>
              </p>
            </div>
            <p class="hex-type-body color-gray-dark">
              Our Creative team made a great and beautiful brands.
            </p>
          </div>
          <div class="flex flex-col gap-12 py-24 px-16 text-center items-center">
            <div class="h-88 w-88 flex justify-center items-center">
              <img src='/assets/map.png' alt='map' class='w-64 h-64' />
            </div>
            <div>
              <p class='hex-type-eyebrow text-primary'>
                UI/UX Design
              </p>
              <p class="hex-type-h4">
                <span class="color-black">
                  UI/UX Design
                </span>
                <span class="color-primary">.</span>
              </p>
            </div>
            <p class="hex-type-body color-gray-dark">
              Our Creative team made a great and beautiful UI/UX designs.
            </p>
          </div>
        </div>
      </section>
      <section class="flex flex-col gap-x-40 gap-y-20 py-64 px-16 justify-center items-center lg:flex-row lg:py-80">
        <img src="/assets/peeps.png" alt="peeps" class="min-w-348 w-508 object-scale-down" />
        <div class='flex flex-col max-w-508 gap-20'>
          <div class="h-88 w-88 flex justify-center items-center">
            <img src='/assets/fan.png' alt='fan' class='w-64 h-64' />
          </div>
          <div>
            <p class='hex-type-eyebrow text-primary'>
              Our team
            </p>
            <p class="hex-type-h2">
              <span class="color-black">
                Know more about Hexlab
              </span>
              <span class="color-primary">.</span>
            </p>
          </div>
          <p class="hex-type-body color-gray-dark">
            Our team of digital product creators in tech and design bring skills above and beyond the ordinary to every project. User experience, Social media marketing, Content management system, and email marketing.
          </p>
          <Button class="hex-btn hex-btn-secondary hex-btn-lg w-full sm:w-fit">
            <span class="hex-type-btn-lg">
              Learn more
            </span>
          </Button>
        </div>
      </section>
      <section class="flex flex-col gap-40 py-64 px-16 text-center items-center lg:py-80">
        <div class="flex flex-col gap-20 text-center items-center max-w-548">
          <div class="h-88 w-88 flex justify-center items-center">
            <img src='/assets/bulb.png' alt='bulb' class='w-64 h-64' />
          </div>
          <div>
            <p class='hex-type-eyebrow text-primary'>
              Why choose us?
            </p>
            <p class="hex-type-h2">
              <span class="color-black">
                Experienced, creative, and helpful
              </span>
              <span class="color-primary">.</span>
            </p>
          </div>
          <p class="hex-type-body color-gray-dark">
            We are a digital creative agency located in LA, We focus on creating responsive websites, web design, SEO services, UI/UX Design, website with all over maintenance, hosting, domain name registration, Graphic design, and Visual identities for your business.
          </p>
          <Button class="hex-btn hex-btn-secondary hex-btn-lg w-full sm:w-fit">
            <span class="hex-type-btn-lg">
              Know more
            </span>
          </Button>
        </div>
        <div class="grid grid-cols-1 gap-20 lg:grid-cols-3 max-w-400 lg:max-w-1036">
          <div>
            <p class='hex-type-h2 text-primary'>
              01
            </p>
            <p class='mt-8 hex-type-h4'>
              <span class='color-black'>
                +26 years experience
              </span>
              <span class='color-primary'>.</span>
            </p>
            <p class='mt-12 hex-type-body color-gray-dark'>
              We have been in the industry for
              26 years and have successfuly launched over +800 websites and +150 mobile applicatons.
            </p>
          </div>
          <div>
            <p class='hex-type-h2 text-primary'>
              02
            </p>
            <p class='mt-8 hex-type-h4'>
              <span class='color-black'>
                Creative team
              </span>
              <span class='color-primary'>.</span>
            </p>
            <p class='mt-12 hex-type-body color-gray-dark'>
              We the best creative team that bring your ideas to life.
            </p>
          </div>
          <div>
            <p class='hex-type-h2 text-primary'>
              03
            </p>
            <p class='mt-8 hex-type-h4'>
              <span class='color-black'>
                We're helpful
              </span>
              <span class='color-primary'>.</span>
            </p>
            <p class='mt-12 hex-type-body color-gray-dark'>
              We love to help clients to achieve their online goals.
            </p>
          </div>
        </div>
      </section>
      <section class="flex flex-col gap-48 py-64 px-16 text-center items-center justify-center lg:py-80">
        <div class="flex flex-col gap-20 text-center items-center max-w-400">
          <div class="h-88 w-88 flex justify-center items-center">
            <img src='/assets/pad.png' alt='pad' class='w-64 h-64' />
          </div>
          <div>
            <p class='hex-type-eyebrow text-primary'>
              Our team
            </p>
            <p class="hex-type-h2">
              <span class="color-black">
                Meet with our awesome team
              </span>
              <span class="color-primary">.</span>
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-20 lg:flex-row">
          <div class="flex flex-col gap-20 text-center items-center">
            <img src="/assets/peep.png" alt="peep" class="w-244 h-340 rounded-full" />
            <div class="flex flex-col gap-8 text-center">
              <p class="hex-type-h4">
                David Snow
              </p>
              <p class="hex-type-body-medium color-gray">
                Sr. UI/UX Designer
              </p>
            </div>
          </div>
          <div class="flex flex-col gap-20 text-center items-center">
            <img src="/assets/peep.png" alt="peep" class="w-244 h-340 rounded-full" />
            <div class="flex flex-col gap-8 text-center">
              <p class="hex-type-h4">
                David Snow
              </p>
              <p class="hex-type-body-medium color-gray">
                Sr. UI/UX Designer
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="flex flex-col gap-20 py-64 px-16 items-center justify-center lg:py-80">
        <div class="grid grid-cols-1 max-w-400 lg:grid-cols-3 lg:max-w-1036 gap-20">
          <div class="flex flex-col gap-20">
            <div class="h-88 w-88 flex justify-center items-center">
              <img src='/assets/stars.png' alt='stars' class='w-64 h-64' />
            </div>
            <div>
              <p class="hex-type-eyebrow text-primary">
                Testimonials
              </p>
              <p class="hex-type-h2">
                <span class="color-black">
                  What our clients say about us
                </span>
                <span class="color-primary">.</span>
              </p>
            </div>
            <div class="flex flex-row gap-12">
              <Button class="flex justify-center items-center bg-primary rounded-full w-40 h-40">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.2541 19.7589C16.5522 19.4667 16.5793 19.0095 16.3354 18.6873L16.2541 18.595L9.52658 12L16.2541 5.40503C16.5522 5.11283 16.5793 4.65558 16.3354 4.33338L16.2541 4.24106C15.956 3.94887 15.4896 3.9223 15.161 4.16137L15.0668 4.24106L7.7459 11.418C7.44784 11.7102 7.42074 12.1675 7.66461 12.4897L7.7459 12.582L15.0668 19.7589C15.3947 20.0804 15.9262 20.0804 16.2541 19.7589Z" fill="white" />
                </svg>
              </Button>
              <Button class="flex justify-center items-center bg-primary rounded-full w-40 h-40">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.7459 19.7589C7.44784 19.4667 7.42074 19.0095 7.66461 18.6873L7.7459 18.595L14.4734 12L7.7459 5.40503C7.44784 5.11283 7.42074 4.65558 7.66461 4.33338L7.7459 4.24106C8.04396 3.94887 8.51037 3.9223 8.83904 4.16137L8.93321 4.24106L16.2541 11.418C16.5522 11.7102 16.5793 12.1675 16.3354 12.4897L16.2541 12.582L8.93321 19.7589C8.60534 20.0804 8.07376 20.0804 7.7459 19.7589Z" fill="white" />
                </svg>
              </Button>
            </div>
          </div>
          <div class="flex flex-col gap-12 p-16">
            <img src="/assets/quote.png" alt="quote" class="w-28 h-28" />
            <p class="hex-type-body text-gray-dark">
              I’m trusted my company in allies and the results have been satisfying because my company has growing.
            </p>
            <img src="/assets/theresa.png" alt="theresa" class="w-56 h-56 rounded-full" />
            <div class="flex flex-col gap-8">
              <p class="hex-type-h4 text-black">
                Theresa Webb
              </p>
              <p class="hex-type-body-medium text-gray">
                Product Manager
              </p>
            </div>
            <div class="flex flex-row gap-4">
              <IconStar />
              <IconStar />
              <IconStar />
              <IconStar />
              <IconStar />
            </div>
          </div>
          <div class="flex flex-col gap-12 p-16">
            <img src="/assets/quote.png" alt="quote" class="w-28 h-28" />
            <p class="hex-type-body text-gray-dark">
              I’m very fortunate to trust my company to allies and now my company income is increasing.
            </p>
            <img src="/assets/tarron.png" alt="tarron" class="w-56 h-56 rounded-full" />
            <div class="flex flex-col gap-8">
              <p class="hex-type-h4 text-black">
                Tarron Rop
              </p>
              <p class="hex-type-body-medium text-gray">
                CEO
              </p>
            </div>
            <div class="flex flex-row gap-4">
              <IconStar />
              <IconStar />
              <IconStar />
              <IconStar />
              <IconStar />
            </div>
          </div>
        </div>
      </section >
      <section class="flex flex-col gap-20 py-64 px-16 text-center items-center lg:py-80">
        <div class="flex items-center justify-center w-136 h-136">
          <img src="/assets/mail.png" alt="mail" class="w-120 h-120" />
        </div>
        <div class="max-w-425">
          <p class="hex-type-eyebrow text-primary">
            Subscribe
          </p>
          <p class="hex-type-h2">
            <span class="color-black">Subscribe to get the latest news about us</span>
            <span class="color-primary">.</span>
          </p>
        </div>
        <p class="hex-type-body text-gray-dark max-w-412">
          We recommended you to subscribe to our newspaper, drop your email below to get daily update about us.
        </p>
        <div class="grid relative w-full max-w-480">
          <input type="text" placeholder="Enter your email address" class="h-72 rounded-full pl-24 pr-8 w-full b b-gray-light">
          </input>
          <div class="absolute end-0 w-40% w-full h-full flex item-center flex-row-reverse p-8 pointer-events-none">
            <Button class="hex-btn hex-btn-primary hex-btn-lg pointer-events-auto">
              <span class="hex-btn-type-lg text-white">
                Subscribe
              </span>
            </Button>
          </div>
        </div>
      </section>
      <footer class="flex flex-col py-64 px-16 bg-gray-darker lg:py-80 items-center justify-center">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-y-40 gap-x-20 max-w-1036">
          <div class="flex flex-col gap-12">
            <p class="hex-type-h4">
              <span class="color-white">Hexlab</span>
              <span class="color-primary">.</span>
            </p>
            <p class="hex-type-body-medium text-gray-lighter">
              Hexlab is a digital agency that has evolved to meet the changing needs of marketing in the digital age.
            </p>
          </div>
          <div class="flex flex-col gap-12">
            <p class="hex-type-h4">
              <span class="color-white">About</span>
              <span class="color-primary">.</span>
            </p>
            <div class="grid grid-cols-2 gap-8 w-55/89 lg:w-full">
              <a href="#" class="hex-type-body-medium text-gray-lighter">
                About Us
              </a>
              <a href="#" class="hex-type-body-medium text-gray-lighter">
                Services
              </a>
              <a href="#" class="hex-type-body-medium text-gray-lighter">
                Our team
              </a>
              <a href="#" class="hex-type-body-medium text-gray-lighter">
                Portfolio
              </a>
              <a href="#" class="hex-type-body-medium text-gray-lighter">
                News
              </a>
              <a href="#" class="hex-type-body-medium text-gray-lighter">
                Blog
              </a>
              <a href="#" class="hex-type-body-medium text-gray-lighter">
                What we do
              </a>
              <a href="#" class="hex-type-body-medium text-gray-lighter">
                Pricing
              </a>
            </div>
          </div>
          <div class="flex flex-col gap-12">
            <p class="hex-type-h4">
              <span class="color-white">Use case</span>
              <span class="color-primary">.</span>
            </p>
            <div class="grid grid-cols-1 gap-8">
              <a href="#" class="hex-type-body-medium text-gray-lighter">
                Marketing
              </a>
              <a href="#" class="hex-type-body-medium text-gray-lighter">
                Social Media
              </a>
              <a href="#" class="hex-type-body-medium text-gray-lighter">
                Publishers
              </a>
              <a href="#" class="hex-type-body-medium text-gray-lighter">
                Agencies
              </a>
            </div>
          </div>
          <div class="flex flex-col gap-12">
            <p class="hex-type-h4">
              <span class="color-white">Get in touch</span>
              <span class="color-primary">.</span>
            </p>
            <p class="hex-type-body-medium text-gray-lighter">
              Question or feedback? We’d love to hear from you.
            </p>
            {/* email input */}
            <input type="text" placeholder="Enter your email address" class="h-48 p-16 w-full b b-white text-gray hex-type-sm rd-4" />
            <Button class="hex-btn hex-btn-primary hex-btn-md">
              <span class="hex-type-btn-md">
                Send
              </span>
            </Button>
          </div>
        </div>
      </footer>
    </div >
  );
};

const IconStar = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.952 2.92731C12.6527 2.006 11.3493 2.006 11.0499 2.92731L9.53132 7.60107C9.39745 8.0131 9.01349 8.29206 8.58026 8.29206H3.66598C2.69726 8.29206 2.29448 9.53167 3.07819 10.1011L7.05393 12.9896C7.40442 13.2443 7.55108 13.6956 7.4172 14.1077L5.89861 18.7814C5.59925 19.7027 6.65374 20.4688 7.43745 19.8994L11.4132 17.0109C11.7637 16.7563 12.2383 16.7563 12.5888 17.0109L16.5645 19.8994C17.3482 20.4688 18.4027 19.7027 18.1033 18.7814L16.5847 14.1077C16.4509 13.6956 16.5975 13.2443 16.948 12.9896L20.9238 10.1011C21.7075 9.53167 21.3047 8.29206 20.336 8.29206H15.4217C14.9885 8.29206 14.6045 8.0131 14.4706 7.60107L12.952 2.92731Z" fill="#FFB703" />
    </svg>
  );
};

export default App;
