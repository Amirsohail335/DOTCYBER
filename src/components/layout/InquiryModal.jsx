import { useState } from "react";

const businessPhone = "917250323786";

const openWhatsApp = (message = "") => {
  const whatsappAppUrl = `whatsapp://send?phone=${businessPhone}${
    message ? `&text=${encodeURIComponent(message)}` : ""
  }`;

  const whatsappWebUrl = `https://wa.me/${businessPhone}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

  window.location.href = whatsappAppUrl;

  setTimeout(() => {
    window.open(whatsappWebUrl, "_blank", "noopener,noreferrer");
  }, 1200);
};

export default function InquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      nextErrors.email = "Invalid email";
    }

    if (!formData.number.trim()) {
      nextErrors.number = "Phone number is required";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const message = [
      "Inquiry Request",
      "",
      `Name : ${formData.name}`,
      `Email : ${formData.email}`,
      `Phone : ${formData.number}`,
      formData.message
        ? `Message : ${formData.message}`
        : "",
    ]
      .filter(Boolean)
      .join("\n");

    openWhatsApp(message);

    setFormData({
      name: "",
      email: "",
      number: "",
      message: "",
    });

    setErrors({});

    onClose();
  };

  return (
    <section className="mt-6 rounded-[2rem] border border-amber-100 bg-white/95 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.08)]">
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-end">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-amber-600">
            Inquiry Form
          </p>

          <h3 className="mt-2 text-2xl font-semibold text-slate-900">
            Share your details and we will contact you soon
          </h3>
        </div>

        <button
          onClick={onClose}
          className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold hover:bg-slate-200"
        >
          CLOSE
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-6 grid gap-4 lg:grid-cols-2"
      >
        <div>
          <label className="mb-2 block text-sm font-medium">
            Name *
          </label>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-3xl border px-4 py-3"
          />

          {errors.name && (
            <p className="mt-2 text-sm text-red-500">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Email *
          </label>

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-3xl border px-4 py-3"
          />

          {errors.email && (
            <p className="mt-2 text-sm text-red-500">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Phone *
          </label>

          <input
            type="tel"
            name="number"
            placeholder="Phone Number"
            value={formData.number}
            onChange={handleChange}
            className="w-full rounded-3xl border px-4 py-3"
          />

          {errors.number && (
            <p className="mt-2 text-sm text-red-500">
              {errors.number}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Message
          </label>

          <textarea
            rows="4"
            name="message"
            placeholder="Tell us about your trip..."
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-3xl border px-4 py-3"
          />
        </div>

        <div className="lg:col-span-2">
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-amber-400 to-amber-300 px-6 py-3 font-semibold text-slate-900 hover:opacity-90"
          >
            SUBMIT INQUIRY
          </button>
        </div>
      </form>
    </section>
  );
}