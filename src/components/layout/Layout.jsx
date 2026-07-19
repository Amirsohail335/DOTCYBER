import { useState } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import InquiryModal from "./InquiryModal";
import AppRoutes from "../../routes/AppRoutes";

export default function Layout() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <div className="min-h-screen bg-transparent font-body text-slate-900">
      <div className="mx-auto max-w-[1240px] px-4 py-6 sm:px-6 lg:px-8">
        <Navbar
          openInquiry={() => setIsInquiryOpen(true)}
        />

        <InquiryModal
          isOpen={isInquiryOpen}
          onClose={() => setIsInquiryOpen(false)}
        />

        <main className="pt-8">
          <AppRoutes />
        </main>

        <Footer />
      </div>
    </div>
  );
}