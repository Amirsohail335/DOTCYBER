import { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "HOME" },
  { to: "/about-us", label: "ABOUT US" },
  { to: "/services", label: "SERVICES" },
  { to: "/visa-services", label: "VISA SERVICES" },
  { to: "/hajj-umrah", label: "HAJJ & UMRAH" },
  { to: "/gallery", label: "GALLERY" },
];

export default function Navbar({ openInquiry }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-4 z-30 rounded-[2rem] border border-amber-100 bg-white/90 p-4 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Logo */}
        <div className="flex items-center justify-between gap-3">
          <NavLink
            to="/"
            className="flex items-center gap-3"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-200 text-lg text-slate-950">
              ✈️
            </div>

            <div>
              <p className="text-base font-semibold tracking-[0.05em]">
                DOT CYBER &amp; TRAVELS
              </p>

              <p className="text-xs text-slate-500">
                Travel • Visa • Digital Services
              </p>
            </div>
          </NavLink>

          <button
            type="button"
            aria-label="Toggle Menu"
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Navigation */}
        <div
          className={`flex flex-col gap-2 rounded-[1.25rem] border border-slate-200 bg-white/90 p-3 shadow-sm
          lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-3
          lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none
          ${isMenuOpen ? "flex" : "hidden lg:flex"}`}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-center text-sm font-semibold transition ${
                  isActive
                    ? "bg-amber-100 text-amber-700"
                    : "text-slate-700 hover:bg-slate-100 hover:text-amber-600"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* Mobile Button */}
          <button
            type="button"
            className="rounded-full bg-gradient-to-r from-amber-400 to-amber-300 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:-translate-y-0.5 lg:hidden"
            onClick={() => {
              setIsMenuOpen(false);
              openInquiry();
            }}
          >
            INQUIRY NOW
          </button>
        </div>

        {/* Desktop Button */}
        <button
          type="button"
          onClick={openInquiry}
          className="hidden rounded-full bg-gradient-to-r from-amber-400 to-amber-300 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:-translate-y-0.5 lg:inline-flex"
        >
          INQUIRY NOW
        </button>
      </div>
    </nav>
  );
}