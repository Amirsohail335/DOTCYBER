export default function Footer() {
    return (
      <footer className="mt-16 space-y-10 rounded-[2rem] border border-slate-200 bg-white/90 p-8 text-slate-600 shadow-sm backdrop-blur">
        <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr_0.95fr_1.1fr] xl:items-start">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              ABOUT DOT CYBER & TRAVELS
            </h3>
  
            <p className="mt-4 text-sm leading-7">
              DOT CYBER & TRAVELS is your trusted partner for travel,
              visa and digital services. We provide affordable flight
              bookings, visa assistance, Hajj & Umrah packages and
              government digital services with complete customer support.
            </p>
          </div>
  
          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              QUICK LINKS
            </h3>
  
            <ul className="mt-4 space-y-2 text-sm">
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Visa Services</li>
              <li>Hajj & Umrah</li>
              <li>Gallery</li>
              <li>Blog</li>
            </ul>
          </div>
  
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              CONTACT INFO
            </h3>
  
            <div className="mt-4 space-y-2 text-sm">
              <p>
                Sher Bazar, Near Coal Depot,
                <br />
                Gopalganj, Bihar - 841407
              </p>
  
              <p>+91 7250323786</p>
  
              <p>dotcybertravels@gmail.com</p>
  
              <p>Open : 6:00 AM - 9:00 PM</p>
            </div>
          </div>
  
          {/* Office Hours */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              OFFICE HOURS
            </h3>
  
            <div className="mt-4 space-y-2 text-sm">
              <p>Monday - Sunday</p>
              <p>06:00 AM - 09:00 PM</p>
  
              <div className="pt-4">
                <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
                  We're Available Every Day
                </span>
              </div>
            </div>
          </div>
        </div>
  
        <div className="mt-8 border-t border-slate-200 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-sm">
          <span>Privacy Policy • Terms & Conditions</span>
  
          <span>Designed with ❤️ by DOT CYBER</span>
        </div>
      </footer>
    );
  }