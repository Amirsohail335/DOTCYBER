// export const services = [
//     {
//       name: "Aadhaar Services",
//     },
//     {
//       name: "PAN Card",
//       documents: [
//         "Birth Proof",
//         "Aadhaar Card",
//       ],
//       price: "₹150",
//     },
//     {
//       name: "Passport",
//     },
//     {
//       name: "Ayushman Card",
//     },
//     {
//       name: "Ration Card",
//     },
//     {
//       name: "Driving License",
//     },
//     {
//       name: "Voter ID",
//     },
//     {
//       name: "Pension KYC",
//     },
//     {
//       name: "Scholarship Forms",
//     },
//     {
//       name: "Print & Scan",
//     },
//   ];
export const services = [
  {
    name: "Aadhaar Services",
    description:
      "New Aadhaar enrollment, mobile update, address correction and PVC card.",
    documents: [
      "Existing Aadhaar (if available)",
      "Identity Proof",
      "Address Proof",
    ],
    price: "₹100 onwards",
    duration: "30-60 Minutes",
    color: "blue",
    popular: true,
  },

  {
    name: "PAN Card",
    description: "New PAN application, PAN correction and reprint services.",
    documents: [
      "Birth Proof",
      "Aadhaar Card",
      "Passport Size Photograph",
      "Mobile Number",
    ],
    price: "₹150",
    duration: "7-15 Working Days",
    color: "amber",
    popular: true,
  },

  {
    name: "Passport",
    description: "Fresh passport, renewal and Tatkal passport assistance.",
    documents: [
      "Aadhaar Card",
      "Birth Certificate",
      "Address Proof",
      "10th Certificate (if applicable)",
    ],
    price: "₹500 onwards",
    duration: "15-30 Working Days",
    color: "green",
    popular: true,
  },

  {
    name: "Ayushman Card",
    description: "Ayushman Bharat card registration and printing.",
    documents: ["Aadhaar Card", "Ration Card", "Mobile Number"],
    price: "₹100",
    duration: "15 Minutes",
    color: "emerald",
    popular: false,
  },

  {
    name: "Ration Card",
    description: "New ration card, correction and member addition/removal.",
    documents: [
      "Aadhaar Card",
      "Income Certificate",
      "Residence Proof",
      "Family Photograph",
    ],
    price: "₹250 onwards",
    duration: "15-20 Working Days",
    color: "orange",
    popular: false,
  },

  {
    name: "Driving License",
    description: "Learning License, Driving License renewal and duplicate DL.",
    documents: [
      "Aadhaar Card",
      "Age Proof",
      "Address Proof",
      "Passport Size Photograph",
    ],
    price: "₹500 onwards",
    duration: "7-20 Working Days",
    color: "red",
    popular: true,
  },

  {
    name: "Voter ID",
    description: "New voter registration, correction and duplicate voter card.",
    documents: ["Aadhaar Card", "Address Proof", "Passport Size Photograph"],
    price: "₹100",
    duration: "7-15 Working Days",
    color: "purple",
    popular: false,
  },

  {
    name: "Pension KYC",
    description: "Digital Life Certificate and pension verification services.",
    documents: ["PPO Number", "Aadhaar Card", "Bank Passbook", "Mobile Number"],
    price: "₹100",
    duration: "20 Minutes",
    color: "cyan",
    popular: false,
  },

  {
    name: "Scholarship Forms",
    description:
      "Online scholarship application, correction and document upload.",
    documents: [
      "Aadhaar Card",
      "Income Certificate",
      "Caste Certificate",
      "Bonafide Certificate",
      "Bank Passbook",
      "Passport Size Photograph",
    ],
    price: "₹200 onwards",
    duration: "30 Minutes",
    color: "pink",
    popular: false,
  },

  {
    name: "Print & Scan",
    description:
      "Color/B&W printing, document scanning, photocopy and lamination.",
    documents: ["Document File (PDF/Image)", "Pen Drive or Mobile"],
    price: "₹5 onwards",
    duration: "5 Minutes",
    color: "slate",
    popular: true,
  },
];
