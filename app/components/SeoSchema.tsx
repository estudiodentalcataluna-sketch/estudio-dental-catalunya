export default function SeoSchema() {
  const treatments = [
    {
      name: "Implantes Dentales",
      url: "https://estudiodentalcatalunya.es/tratamientos/implantes",
    },
    {
      name: "Ortodoncia",
      url: "https://estudiodentalcatalunya.es/tratamientos/ortodoncia",
    },
    {
      name: "Ortodoncia Invisible",
      url: "https://estudiodentalcatalunya.es/tratamientos/ortodoncia-invisible",
    },
    {
      name: "Estética Dental",
      url: "https://estudiodentalcatalunya.es/tratamientos/estetica-dental",
    },
    {
      name: "Carillas Dentales",
      url: "https://estudiodentalcatalunya.es/tratamientos/carillas-dentales",
    },
    {
      name: "Blanqueamiento Dental",
      url: "https://estudiodentalcatalunya.es/tratamientos/blanqueamiento-dental",
    },
    {
      name: "Endodoncia",
      url: "https://estudiodentalcatalunya.es/tratamientos/endodoncia",
    },
    {
      name: "Periodoncia",
      url: "https://estudiodentalcatalunya.es/tratamientos/periodoncia",
    },
    {
      name: "Prótesis Dentales",
      url: "https://estudiodentalcatalunya.es/tratamientos/protesis-dentales",
    },
    {
      name: "Odontología General",
      url: "https://estudiodentalcatalunya.es/tratamientos/odontologia-general",
    },
    {
      name: "Odontopediatría",
      url: "https://estudiodentalcatalunya.es/tratamientos/odontopediatria",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": "https://estudiodentalcatalunya.es/#dentist",

    name: "Estudio Dental Catalunya",
    legalName: "Estudio Dental Catalunya",

    url: "https://estudiodentalcatalunya.es",

    logo: {
      "@type": "ImageObject",
      url: "https://estudiodentalcatalunya.es/images/logo-header.png",
    },

    image: [
      "https://estudiodentalcatalunya.es/images/og-image.jpg",
      "https://estudiodentalcatalunya.es/images/clinica/fachada.jpg",
      "https://estudiodentalcatalunya.es/images/clinic.jpg",
      "https://estudiodentalcatalunya.es/images/recep.jpg",
    ],

    description:
      "Clínica dental privada en Sant Boi de Llobregat especializada en implantología, ortodoncia, ortodoncia invisible, estética dental, carillas dentales, blanqueamiento dental, endodoncia, periodoncia, odontología general y odontopediatría. Primera visita gratuita con radiografías y diagnóstico.",

    slogan:
      "Primera visita gratuita con radiografías y diagnóstico.",

    telephone: "+34 930067281",

    email: "estudiodentalcataluna@gmail.com",

    priceRange: "€€",

    currenciesAccepted: "EUR",

    paymentAccepted: [
      "Cash",
      "Credit Card",
      "Debit Card",
      "Financing",
    ],

    address: {
      "@type": "PostalAddress",
      streetAddress: "Carrer Mallorca 40, Local 2",
      postalCode: "08830",
      addressLocality: "Sant Boi de Llobregat",
      addressRegion: "Barcelona",
      addressCountry: "ES",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.3443,
      longitude: 2.0436,
    },

    areaServed: [
      "Sant Boi de Llobregat",
      "Barcelona",
      "Viladecans",
      "Gavà",
      "Castelldefels",
      "Cornellà de Llobregat",
      "Sant Joan Despí",
      "Sant Feliu de Llobregat",
      "Sant Vicenç dels Horts",
      "El Prat de Llobregat",
      "L'Hospitalet de Llobregat",
      "Barcelona Provincia",
    ],

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
        ],
        opens: "10:00",
        closes: "14:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
        ],
        opens: "15:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "10:00",
        closes: "14:00",
      },
    ],

    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+34 930067281",
        contactType: "customer service",
        availableLanguage: ["es", "ca"],
        areaServed: "ES",
      },
      {
        "@type": "ContactPoint",
        telephone: "+34 640317047",
        contactType: "WhatsApp",
        availableLanguage: ["es", "ca"],
        areaServed: "ES",
      },
    ],

    medicalSpecialty: "Dentistry",

    knowsAbout: [
      "Implantes Dentales",
      "Implantes Neodent",
      "Ortodoncia",
      "Ortodoncia Invisible",
      "Invisalign",
      "Carillas Dentales",
      "Blanqueamiento Dental",
      "Estética Dental",
      "Odontología Digital",
      "Radiología Digital",
      "CBCT",
      "Cirugía Guiada",
      "Elevación de Seno",
      "Regeneración Ósea",
      "Prótesis Dentales",
      "Odontopediatría",
      "Endodoncia",
      "Periodoncia",
    ],

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tratamientos Dentales",

      itemListElement: treatments.map((treatment) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: treatment.name,
          url: treatment.url,
        },
      })),
    },

    sameAs: [
      "https://www.instagram.com/edental.catalunya/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}