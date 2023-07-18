import React from "react";
import { Footer } from "flowbite-react";
import { FaInstagram, FaTelegram, FaWhatsapp, FaTwitter } from "react-icons/fa";

const HomeFooter = () => {
  const items1 = [
    { id: 1, link: "About" },
    { id: 2, link: "Careers" },
    { id: 3, link: "Brand Center" },
    { id: 4, link: "Blog" },
  ];
  const items2 = [
    { id: 1, link: "Discord Server" },
    { id: 2, link: "Twitter" },
    { id: 3, link: "Facebook" },
    { id: 4, link: "Contact Us" },
  ];
  const items3 = [
    { id: 1, link: " Privacy Policy" },
    { id: 2, link: "Licensing" },
    { id: 3, link: "Terms & Conditions" },
  ];
  const items4 = [
    { id: 1, link: "iOS" },
    { id: 2, link: "Android" },
    { id: 3, link: "Windows" },
    { id: 4, link: "MacOS" },
  ];

  return (
    <Footer bgDark>
      <div className="w-full">
        <div className="grid bg-cyan-900 footer text-white w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title
              className="text-white font-semibold"
              title="Company"
            />
            <Footer.LinkGroup col>
              {items1.map((item) => {
                return (
                  <Footer.Link
                    key={item.id}
                    className="text-white font-semibold"
                    href="#"
                  >
                    {item.link}
                  </Footer.Link>
                );
              })}
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title
              className="text-white font-semibold"
              title="help center"
            />
            <Footer.LinkGroup col>
              {items2.map((item) => {
                return (
                  <Footer.Link
                    key={item.id}
                    className="text-white font-semibold"
                    href="#"
                  >
                    {item.link}
                  </Footer.Link>
                );
              })}
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title className="text-white font-semibold" title="legal" />
            <Footer.LinkGroup col>
              {items3.map((item) => {
                return (
                  <Footer.Link
                    key={item.id}
                    className="text-white font-semibold"
                    href="#"
                  >
                    {item.link}
                  </Footer.Link>
                );
              })}
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title
              className="text-white font-semibold"
              title="download"
            />
            <Footer.LinkGroup col>
              {items4.map((item) => {
                return (
                  <Footer.Link
                    key={item.id}
                    className="text-white font-semibold"
                    href="#"
                  >
                    {item.link}
                  </Footer.Link>
                );
              })}
            </Footer.LinkGroup>
          </div>
        </div>
        <hr />
        <div className="w-full bg-cyan-900 text-white  px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            className="text-white"
            by="Flowbite™"
            href="#"
            year={2022}
          />
          <div className="mt-4 flex sm:mt-0 sm:justify-center">
            <FaInstagram className="mx-10 text-2xl" />
            <FaTelegram className="mx-10 text-2xl" />
            <FaWhatsapp className="mx-10 text-2xl" />
            <FaTwitter className="mx-10 text-2xl" />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default HomeFooter;
