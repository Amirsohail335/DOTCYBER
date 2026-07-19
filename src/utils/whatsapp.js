const businessPhone = "917250323786";

export function openWhatsApp(message = "") {
  const appUrl = `whatsapp://send?phone=${businessPhone}${
    message ? `&text=${encodeURIComponent(message)}` : ""
  }`;

  const webUrl = `https://wa.me/${businessPhone}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

  window.location.href = appUrl;

  setTimeout(() => {
    window.open(webUrl, "_blank", "noopener,noreferrer");
  }, 1200);
}