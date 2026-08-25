export default function SeoSchema() {
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
    ],

    medicalSpecialty: [
      "Implantología",
      "Ortodoncia",
      "Ortodoncia Invisible",
      "Estética Dental",
      "Carillas Dentales",
      "Blanqueamiento Dental",
      "Endodoncia",
      "Periodoncia",
      "Prótesis Dentales",
      "Odontología General",
      "Odontopediatría",
    ],

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
      itemListElement: [
        "Implantes dentales",
        "Ortodoncia",
        "Ortodoncia Invisible",
        "Estética Dental",
        "Carillas Dentales",
        "Blanqueamiento Dental",
        "Endodoncia",
        "Periodoncia",
        "Prótesis Dentales",
        "Odontología General",
        "Odontopediatría",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name,
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