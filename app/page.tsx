import Image from "next/image";
import chair from "../images/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room 1.jpg"

function Home(){
  return(
    
   
    <div className="bg-white text-white">
      
         
          
       {/* Navigation Items */}
          <div className="hidden md:flex bg-violet-600 justify-evenly space-x-9">
            <a
              href="#wishlist"
              className="hover:text-gray-200 transition  justify-between duration-300"
            >
              Wishlist
            </a>
            <a
              href="#login"
              className="hover:text-gray-200  justify-between transition duration-300"
            >
              Login
            </a>
            <a
              href="mailto:example@gmail.com"
              className="hover:text-gray-200  justify-between transition duration-300"
            >
              Gmail
            </a>
            <a
              href="tel:+123456789"
              className="hover:text-gray-200  justify-between transition duration-300"
            >
              Phone: +123-456-789
            </a>
          </div>

          {/* Mobile Menu Button (optional) */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-blue-500 p-2 rounded-md justify-between text-white focus:outline-none hover:bg-blue-700"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        
      <div>
      <nav className= " bg-white text-black">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Left Side: Logo and Navigation Links */}
          <div className="flex items-center space-x-6">
            {/* Logo */}
            <a href="#" className="text-2xl font-bold text-black">
              Hekto
            </a>
            {/* Navigation Links */}
            <a href="#home" className="hover:text-">Home</a>
            <a href="#pages" className="hover:text-[#FB2E86]">Pages</a>
            <a href="#product" className="hover:text-[#FB2E86]">Product</a>
            <a href="#blog" className="hover:text-[#FB2E86]">Blog</a>
            <a href="#shop" className="hover:text-[#FB2E86]">Shop</a>
          </div>

         
        </div>
        
      </nav>
    </div>
   {/*hero section*/}
    
   <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 bg-[#F2F0FF] py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <p className="flex text-[#FB2E86]">Best Furniture For Your Castle..</p>
      
      <h1 className="title-font font-serif sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
      New Furniture Collection Trend In 2020
      </h1>
      <p className="mb-8  text-zinc-500 leading-relaxed">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quibusdam reiciendis nulla.
        </p>
      <div className="flex w-full md:justify-start justify-center items-end">
       
        <button className="inline-flex text-white bg-[#FB2E86]  hover:text-pink-300 py-2 px-6 focus:outline-none text-sm">
          Shop Now
        </button>
      </div>
      
      <div className="flex lg:flex-row md:flex-col">
        <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
        </button>
        
      </div>
    </div>
    {/*image*/} 
    <div className="lg:max-w-lg  bg-[#F2F0FF] lg:w-full md:w-1/2 w-5/6">
    <Image src={chair} alt="Image" />

   </div>
  </div>
</section>



{/*products*/}
<section className="text-gray-600 body-font">
  <div className="container px-5  py-10 mx-auto">
    <div className="flex flex-col  text-center py-4 w-full mb-20">
      <h1 className="text-2xl font-bold font-serif title-font mb-2 text-gray-900">
        our products
      </h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <Image
            alt="chair2"
            className=" rounded-lg w-full h-56 object-cover object-center mb-4"
            src={chair2}
          />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">
             Cantilever chair
            </h2>
            <h3 className="text-[#FB2E86] mb-3">26.00</h3>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <Image
            alt="chair3"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src={chair3}
          />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">
            Cantilever chair
            </h2>
            <h3 className="text-[#FB2E86] mb-3">26.00</h3>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <Image
            alt="chair4"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src={chair4}
          />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">
            Cantilever chair
            </h2>
            <h3 className="text-[#FB2E86] mb-3">26.00</h3>
            
            
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <Image
            alt="chair5"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src={chair5}
          />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">
            Cantilever chair
            </h2>
            <h3 className="text-[#FB2E86] mb-3">26.00</h3>
           
           
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="text-gray-600 body-font">
  <div className="container px-4 py-1 mx-auto">
    
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <Image
            alt="chair8"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src={chair8}
          />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">
             Comfort handy chair
            </h2>
            <h3 className="text-[#FB2E86] mb-3">26.00</h3>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <Image
            alt="chair6"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src={chair6}
          />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">
            Comfort handy chair
            </h2>
            <h3 className="text-[#FB2E86] mb-3">70.45</h3>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <Image
            alt="chair7"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src={chair7}
          />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">
            Comfort handy chair
            </h2>
            <h3 className="text-[#FB2E86] mb-3">70.45</h3>
            
            
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <Image
            alt="chair9"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src={chair9}
          />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">
            Comfort handy chair
            </h2>
            <h3 className="text-[#FB2E86] mb-3">70.45</h3>
            
           
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<footer className="text-gray-600 bg-[#EEEFFB] body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    {/* Logo Section */}
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        
        <span className="ml-3 font-bold text-xl">Hekto</span>
      </a>
      <p className="mt-2 text-sm text-gray-500">
        Air plant banjo lyft occupy retro adaptogen indego
      </p>
    </div>

    {/* Categories Section */}
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      {/* First Category Section */}
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">CustomerCare</h2>
        <nav className="list-none mb-10">
          <p className="text-gray-600 hover:text-gray-800">Discount</p>
          <p className="text-gray-600 hover:text-gray-800">OrderHistory</p>
          <p className="text-gray-600 hover:text-gray-800">OrderTracking</p>
          <p className="text-gray-600 hover:text-gray-800">Discount</p>
        </nav>
      </div>
    </div>

    {/* Email Subscription Section */}
    <div className="w-full px-4 mt-10 md:mt-0 md:w-1/2 lg:w-1/3">
      <h2 className="text-gray-900 font-medium tracking-widest text-sm mb-3">Subscribe to Our Newsletter</h2>
      <div className="space-y-4">
        {/* Email Input */}
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        {/* Address Div */}
        <div>
          <input
            type="text"
            placeholder="Enter your address"
            className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        {/* Submit Button */}
        <button className="w-full bg-[#FB2E86]  text-white px-4 py-2 rounded-md focus:outline-none">
          Sign Up
        </button>
      </div>
    </div>
  </div>

 
</footer>














  </div>

    );
};


export default Home;
{/*importing section*/}
    import chair2 from "../images/Group 137.jpg"
    import chair3 from "../images/image 1.jpg"
    import chair4 from "../images/image 1166.jpg"
    import chair5 from "../images/image 1168.jpg"
    import chair6 from "../images/image 1169.jpg"
    import chair7 from "../images/image 15.jpg"
    import chair8 from "../images/image 3.jpg"
    import chair9 from "../images/image 32.jpg"