import Image from 'next/image';
import logo from '../public/logo.png';
import stockl from '../public/stock-l.jpg';
import stockp from '../public/stock-p.jpg';
export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="flex py-4 px-4 sm:px-10 bg-[#00ced1] min-h-[70px] tracking-wide relative z-50">
        <div className="flex flex-wrap items-center justify-between gap-5 w-full">
          <a href="javascript:void(0)" className="max-sm:hidden">
            {/* <img
              src="https://readymadeui.com/readymadeui.svg"
              alt="logo"
              className="w-36"
            /> */}
            {/* Anytime Auto */}
          </a>
          <a href="javascript:void(0)" className="hidden max-sm:block">
            <img
              src="https://readymadeui.com/readymadeui-short.svg"
              alt="logo"
              className="w-9"
            />
          </a>
          <div
            id="collapseMenu"
            className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
          >
            <button
              id="toggleClose"
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                />
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                />
              </svg>
            </button>
            {/* <ul className="lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li className="mb-6 hidden max-lg:block">
                <a href="javascript:void(0)">
                  <img
                    src="https://readymadeui.com/readymadeui.svg"
                    alt="logo"
                    className="w-36"
                  />
                </a>
              </li>
              <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-700 text-blue-700 block font-medium text-[15px]"
                >
                  Home
                </a>
              </li>
              <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]"
                >
                  Team
                </a>
              </li>
              <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]"
                >
                  Feature
                </a>
              </li>
              <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]"
                >
                  Blog
                </a>
              </li>
              <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]"
                >
                  About
                </a>
              </li>
              <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]"
                >
                  Contact
                </a>
              </li>
            </ul> */}
          </div>
          <div className="flex max-lg:ml-auto space-x-4">
            <button id="toggleOpen" className="lg:hidden">
              <svg
                className="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <div>
        <div className="relative grid w-full bg-[#00ced1] h-96 lg:h-[32rem] place-items-center">
          <div className="flex flex-col items-center mx-auto text-center">
            <Image
              className="mb-2"
              src={logo}
              alt="Anytime Auto"
              width={300}
              height={300}
            />
            <h1 className="text-4xl font-semibold text-white uppercase md:text-6xl">
              Anytime Auto
            </h1>
            <p className="mt-6 text-lg leading-5 text-white">
              Click To Contact
            </p>
            <a href="#contact" className="mt-8 cursor-pointer animate-bounce">
              <svg
                width={53}
                height={53}
                viewBox="0 0 53 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={27} cy={26} r={18} stroke="white" strokeWidth={2} />
                <path
                  d="M22.41 23.2875L27 27.8675L31.59 23.2875L33 24.6975L27 30.6975L21 24.6975L22.41 23.2875Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
        <svg
          className="fill-[#00ced1]"
          viewBox="0 0 1440 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1440 0H0V57C720 0 1440 57 1440 57V0Z" />
        </svg>
      </div>
      {/* Intro */}
      <div
        className="bg-white rounded-2xl shadow my-4 container justify-center mx-auto"
        id="about"
      >
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                  24/7 Auto Mechanic In Sarasota
                </h2>

                <p className="mt-4 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur doloremque saepe architecto maiores repudiandae amet
                  perferendis repellendus, reprehenderit voluptas sequi.
                </p>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* Features */}
      <section className="">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            Services We Offer
          </h1>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-2xl ">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </span>
              <h1 className="text-xl font-semibold text-slate-800 capitalize">
                Service One
              </h1>
              <p className="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident ab nulla quod dignissimos vel non corrupti doloribus
                voluptatum eveniet
              </p>
              <a
                href="#"
                className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                <span className="mx-1">read more</span>
                <svg
                  className="w-4 h-4 mx-1 rtl:-scale-x-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-2xl ">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </span>
              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Service Two
              </h1>
              <p className="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident ab nulla quod dignissimos vel non corrupti doloribus
                voluptatum eveniet
              </p>
              <a
                href="#"
                className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                <span className="mx-1">read more</span>
                <svg
                  className="w-4 h-4 mx-1 rtl:-scale-x-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-2xl ">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </span>
              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Service 3
              </h1>
              <p className="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident ab nulla quod dignissimos vel non corrupti doloribus
                voluptatum eveniet
              </p>
              <a
                href="#"
                className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                <span className="mx-1">read more</span>
                <svg
                  className="w-4 h-4 mx-1 rtl:-scale-x-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-2xl ">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </span>
              <h1 className="text-xl font-semibold text-slate-800 capitalize">
                Service One
              </h1>
              <p className="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident ab nulla quod dignissimos vel non corrupti doloribus
                voluptatum eveniet
              </p>
              <a
                href="#"
                className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                <span className="mx-1">read more</span>
                <svg
                  className="w-4 h-4 mx-1 rtl:-scale-x-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Banner */}
      <div className="carBlue px-6 py-12">
        <div className="container mx-auto flex flex-col justify-center items-center text-center">
          <h2 className="text-white sm:text-4xl text-3xl font-bold mb-6">
            Book an appointment today!
          </h2>
          <button
            type="button"
            className="bg-white text-[15px] text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-slate-100"
          >
            Contact us now!
          </button>
        </div>
      </div>
      {/* About */}
      <div className="text-gray-600 body-font bg-white container mx-auto justify-center my-4 shadow-2xl rounded-2xl">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Scott Templin or just put Anytime Auto{' '}
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
                  <p className="text-base">
                    Raclette knausgaard hella meggs normcore williamsburg enamel
                    pin sartorial venmo tbh hot chicken gentrify portland.
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  Meggings portland fingerstache lyft, post-ironic fixie man bun
                  banh mi umami everyday carry hexagon locavore direct trade art
                  party. Locavore small batch listicle gastropub farm-to-table
                  lumbersexual salvia messenger bag. Coloring book flannel
                  truffaut craft beer drinking vinegar sartorial, disrupt
                  fashion axe normcore meh butcher. Portland scenester
                  vexillologist forage post-ironic asymmetrical, chartreuse
                  disrupt butcher paleo intelligentsia pabst before they sold
                  out four loko. 3 wolf moon brooklyn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <div className="space-y-2">
            <Image
              className="rounded-2xl w-full h-auto object-cover"
              src={stockl}
              alt="Gallery Masonry Image"
              width={200}
              height={200}
            />
            <Image
              className="rounded-2xl w-full h-auto object-cover"
              src={stockp}
              alt="Gallery Masonry Image"
              width={200}
              height={200}
            />
            <Image
              className="rounded-2xl w-full h-auto object-cover"
              src={stockl}
              alt="Gallery Masonry Image"
              width={200}
              height={200}
            />
          </div>
          <div className="space-y-2">
            <Image
              className="rounded-2xl w-full h-auto object-cover"
              src={stockp}
              alt="Gallery Masonry Image"
              width={200}
              height={200}
            />
            <Image
              className="rounded-2xl w-full h-auto object-cover"
              src={stockp}
              alt="Gallery Masonry Image"
              width={200}
              height={200}
            />
          </div>
          <div className="space-y-2">
            <Image
              className="rounded-2xl w-full h-auto object-cover"
              src={stockl}
              alt="Gallery Masonry Image"
              width={200}
              height={200}
            />
            <Image
              className="rounded-2xl w-full h-auto object-cover"
              src={stockp}
              alt="Gallery Masonry Image"
              width={200}
              height={200}
            />
            <Image
              className="rounded-2xl w-full h-auto object-cover"
              src={stockl}
              alt="Gallery Masonry Image"
              width={200}
              height={200}
            />
          </div>
          <div className="space-y-2">
            <Image
              className="rounded-2xl w-full h-auto object-cover"
              src={stockp}
              alt="Gallery Masonry Image"
              width={200}
              height={200}
            />
            <Image
              className="rounded-2xl w-full h-auto object-cover"
              src={stockp}
              alt="Gallery Masonry Image"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>

      {/* FAQ */}

      <div className="px-4 py-20 my-4 bg-white container mx-auto justify-center rounded-2xl shadow-2xl">
        <div className="flex flex-col max-w-6xl mx-auto md:flex-row">
          <h2 className="w-full mr-8 text-3xl font-extrabold text-slate-800 leading-9 md:w-1/3">
            Frequently Asked Questions
          </h2>
          <dl className="w-full md:w-2/3">
            <dt className="mb-4">
              <h3 className="text-xl font-semibold text-slate-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit?
              </h3>
            </dt>
            <dd className="mb-16">
              <p className="text-slate-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                doloremque saepe architecto maiores repudiandae amet perferendis
                repellendus, reprehenderit voluptas sequi.
              </p>
            </dd>
            <dt className="mb-4">
              <h3 className="text-xl font-semibold text-slate-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit?
              </h3>
            </dt>
            <dd className="mb-16">
              <p className="text-slate-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                doloremque saepe architecto maiores repudiandae amet perferendis
                repellendus, reprehenderit voluptas sequi.
              </p>
            </dd>
            <dt className="mb-4">
              <h3 className="text-xl font-semibold text-slate-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit?
              </h3>
            </dt>
            <dd className="mb-16">
              <p className="text-slate-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                doloremque saepe architecto maiores repudiandae amet perferendis
                repellendus, reprehenderit voluptas sequi.
              </p>
            </dd>
          </dl>
        </div>
      </div>

      {/* Contact */}
      <div
        id="contact"
        className="bg-white rounded-2xl shadow my-4 container justify-center mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-16 items-center relative overflow-hidden p-8 s">
          <div>
            <h2 className="text-slate-900 text-3xl font-semibold">
              Get In Touch
            </h2>
            <p className="text-sm text-slate-500 mt-4 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              ab nulla quod dignissimos vel non corrupti doloribus voluptatum
              eveniet
              <div className="my-5 text-2xl text-black">
                Store phone number, address, and email will go here.
              </div>
            </p>
            <form>
              <div className="space-y-4 mt-8">
                <input
                  type="text"
                  placeholder="Name"
                  className="px-2 py-3 bg-white w-full text-slate-900 text-sm border-b border-slate-300 focus:border-blue-600 outline-none"
                />

                <input
                  type="number"
                  placeholder="Phone No."
                  className="px-2 py-3 bg-white w-full text-slate-900 text-sm border-b border-slate-300 focus:border-blue-600 outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="px-2 py-3 bg-white w-full text-slate-900 text-sm border-b border-slate-300 focus:border-blue-600 outline-none"
                />
                <textarea
                  placeholder="Write Message"
                  className="px-2 pt-3 bg-white w-full text-slate-900 text-sm border-b border-slate-300 focus:border-blue-600 outline-none"
                  defaultValue={''}
                />
              </div>
              <button
                type="button"
                className="mt-8 flex items-center justify-center text-sm font-medium w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="#fff"
                  className="mr-2"
                  viewBox="0 0 548.244 548.244"
                >
                  <path
                    fillRule="evenodd"
                    d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                    clipRule="evenodd"
                    data-original="#000000"
                  />
                </svg>
                Send Message
              </button>
            </form>
            <ul className="mt-4 flex flex-wrap justify-center gap-6">
              <li className="flex items-center text-blue-600">
                <a href="javascript:void(0)" className="text-sm ml-3">
                  {/* <span className="font-medium">+158 996 888</span> */}
                </a>
              </li>
            </ul>
          </div>
          <div className="z-10 relative h-full max-md:min-h-[350px]">
            <div className="text-9xl text-black">MAP WILL GO HERE</div>
            {/* <iframe
              src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="left-0 top-0 h-full w-full"
              frameBorder={0}
              allowFullScreen
            /> */}
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="carBlue mt-4 text-black py-6 px-16 tracking-wide">
        <div className="flex justify-between items-center max-lg:flex-col text-center flex-wrap gap-4">
          <p className="text-[15px] text-black leading-loose">
            © Anytime Auto. All rights reserved.
          </p>
          {/* <ul className="flex space-x-6 gap-y-2 max-lg:justify-center flex-wrap">
            <li>
              <a
                href="javascript:void(0)"
                className="text-[15px] hover:text-white"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-[15px] hover:text-white"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-[15px] hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul> */}
        </div>
      </footer>
    </>
  );
}
