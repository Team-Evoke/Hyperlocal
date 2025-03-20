"use client";

import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="bg-black text-white">
      {/* Navbar */}
      <header className="flex justify-between items-center p-6 bg-black">
        <nav className="flex space-x-6">
          <Link href="/" className="text-white">
            Home
          </Link>
          <Link href="/compiler" className="text-white">
            Compiler
          </Link>
          <Link href="/about" className="text-purple-500">
            About Us
          </Link>
        </nav>
        <div className="text-2xl font-bold text-white">BUG-TRACK</div>
        <div className="space-x-4">
          <button className="border border-purple-500 text-purple-500 px-4 py-2 rounded-full">
            Sign In As Developer
          </button>
          <button className="border border-purple-500 text-purple-500 px-4 py-2 rounded-full">
            Sign In As Tester
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="text-center py-16 bg-gradient-to-b from-black to-purple-900">
        <h1 className="text-4xl font-bold mb-4">Introduce your team</h1>
        <p className="text-lg mb-8">"Empowering Your Trades with Real-Time Insights"</p>
        <p className="max-w-2xl mx-auto mb-16">
          "Innovators, creators, and problem solvers—our team thrives on technology, collaboration, and creativity to build impactful solutions. Ready to hack, disrupt, and innovate!"
        </p>

        {/* Team Members Section */}
        <div className="flex justify-center space-x-8 flex-wrap">
          {[
            { name: "Vipin Adle", role: "Second Year CSE(DS)" },
            { name: "Piyush Gaikwad", role: "Second Year CSE(DS)" },
            { name: "Ruturaj Nakshane", role: "Second Year CSE(DS)" },
            { name: "Sagar Gajbhar", role: "Second Year CSE(DS)" },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <img
                src="https://placehold.co/100x100"
                alt={`Profile picture of ${member.name}`}
                className="rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl font-bold">{member.name}</h2>
              <p className="text-sm">{member.role}</p>
              <div className="flex justify-center space-x-4 mt-2">
                <Link href="#" className="text-white">
                  <i className="fab fa-linkedin"></i>
                </Link>
                <Link href="#" className="text-white">
                  <i className="fas fa-times"></i>
                </Link>
                <Link href="#" className="text-white">
                  <i className="fab fa-dribbble"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-12">
        <div className="container mx-auto flex justify-between flex-wrap">
          <div>
            <div className="text-3xl font-bold mb-4">EVOKE</div>
            <div className="flex space-x-4 mb-4">
              <Link href="#" className="text-white">
                Piyush
              </Link>
              <Link href="#" className="text-white">
                Ruturaj
              </Link>
              <Link href="#" className="text-white">
                Sagar
              </Link>
              <Link href="#" className="text-white">
                Vipin
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white">
                Terms of Service
              </Link>
              <Link href="#" className="text-white">
                Cookies Settings
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Useful Links</h3>
            <ul>
              <li>
                <Link href="#" className="text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Address</h3>
            <img
              src="https://placehold.co/200x150"
              alt="Map showing the address location"
            />
          </div>
        </div>
        <div className="text-center mt-8">© 2025 All Right Reserved</div>
      </footer>
    </div>
  );
}
