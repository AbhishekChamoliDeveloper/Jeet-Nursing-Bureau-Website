import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <p className="text-sm">
              &copy; Clickwave 2023. All rights reserved.
            </p>
            <p className="mt-2 text-sm">
              Designed and developed by a team of enterprise-level designers and
              developers, the Clickwave website provides cutting-edge technology
              and innovative solutions for businesses of all sizes. Our team of
              experts is dedicated to delivering a world-class user experience
              that drives business results and exceeds customer expectations.
            </p>
          </div>
          <div className="mt-12 xl:mt-0 xl:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-300">Products</h3>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="hover:text-white text-sm">
                      Enterprise
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white text-sm">
                      Small Business
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white text-sm">
                      Personal
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-300">Services</h3>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="hover:text-white text-sm">
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white text-sm">
                      Mobile Development
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white text-sm">
                      UI/UX Design
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white text-sm">
                      Consulting
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-300">Resources</h3>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="hover:text-white text-sm">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white text-sm">
                      Community
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white text-sm">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
