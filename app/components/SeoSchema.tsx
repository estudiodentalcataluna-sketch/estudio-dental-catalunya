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

const dentistId = "https://estudiodentalcatalunya.es/#dentist";

const schema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": dentistId,

  name: "Estudio Dental Catalunya",

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

  slogan: "Primera visita gratuita con radiografías y diagnóstico.",

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
    {
      "@type": "City",
      name: "Sant Boi de Llobregat",
    },
    {
      "@type": "City",
      name: "Barcelona",
    },
    {
      "@type": "City",
      name: "Viladecans",
    },
    {
      "@type": "City",
      name: "Gavà",
    },
    {
      "@type": "City",
      name: "Castelldefels",
    },
    {
      "@type": "City",
      name: "Cornellà de Llobregat",
    },
    {
      "@type": "City",
      name: "Sant Joan Despí",
    },
    {
      "@type": "City",
      name: "Sant Feliu de Llobregat",
    },
    {
      "@type": "City",
      name: "Sant Vicenç dels Horts",
    },
    {
      "@type": "City",
      name: "El Prat de Llobregat",
    },
    {
      "@type": "City",
      name: "L'Hospitalet de Llobregat",
    },
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
      contactType: "customer service",
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

  hasPart: treatments.map((treatment) => ({
    "@type": "MedicalWebPage",
    name: treatment.name,
    url: treatment.url,
    about: {
      "@type": "MedicalProcedure",
      name: treatment.name,
    },
    isPartOf: {
      "@id": "https://estudiodentalcatalunya.es/#website",
    },
  })),

  sameAs: [
    "https://www.instagram.com/edental.catalunya/",
  ],
};

export default function SeoSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}