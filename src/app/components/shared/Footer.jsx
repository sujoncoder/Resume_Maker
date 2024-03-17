import icons from "@/app/utils/SocialIcons";
import Image from "next/image";
import Logo from "/public/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <main className="bg-white pt-10">
      <section className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* LOGO AND ICONS */}
          <div className="space-y-4">
            <Image src={Logo} alt="Logo" className="w-40" />

            <p className="text-lg">
              Vivamus at augue eget arcu dictum varius duis at. <br />
              Et egestas quis ipsum suspendisse ultrices. <br />
              Diam maecenas ultricies mi eget mauris pharetra et. <br />
              Turpis egestas maecenas
            </p>

            <div className="flex space-x-2">
              {icons.map((icon, index) => (
                <div key={index}>
                  <Image
                    src={icon.icon}
                    width={50}
                    height={50}
                    alt="social icon"
                    className="cursor-pointer hover:scale-105 duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RESOURCES  */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">RESOURCES</h1>
            <div>
              <p className="hover:text-blue-400 cursor-pointer duration-300 text-lg">
                Resume
              </p>
              <p className="hover:text-blue-400 cursor-pointer duration-300 text-lg">
                Resume Template
              </p>
              <p className="hover:text-blue-400 cursor-pointer duration-300 text-lg">
                Cover Letter
              </p>
              <p className="hover:text-blue-400 cursor-pointer duration-300 text-lg">
                Cover Template
              </p>
            </div>
          </div>

          {/* PRODUCT DETAILS */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">PRODUCT DETAILS</h1>
            <div>
              <p className="hover:text-blue-400 cursor-pointer duration-300 text-lg">
                Pricing
              </p>
              <p className="hover:text-blue-400 cursor-pointer duration-300 text-lg">
                Reviews
              </p>
              <p className="hover:text-blue-400 cursor-pointer duration-300 text-lg">
                Custom Design
              </p>
            </div>
          </div>

          {/* SUPPORT */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">SUPPORT</h1>
            <div>
              <p className="hover:text-blue-400 cursor-pointer duration-300 text-lg">
                FAQ
              </p>
              <p className="hover:text-blue-400 cursor-pointer duration-300 text-lg">
                Contact Us
              </p>
              <p className="hover:text-blue-400 cursor-pointer duration-300 text-lg">
                About Us
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-8 mt-10">
        <p className="text-white text-sm md:text-xl  text-center">
          {" "}
          © {currentYear}, Resume Maker Ltd. All Rights Reserved.
        </p>
      </section>
    </main>
  );
};

export default Footer;
