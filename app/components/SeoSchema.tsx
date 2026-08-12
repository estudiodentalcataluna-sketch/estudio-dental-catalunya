export default function SeoSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",

    "@id": "https://www.estudiodentalcatalunya.es/#dentist",

    name: "Estudio Dental Catalunya",

    legalName: "Estudio Dental Catalunya",

    url: "https://www.estudiodentalcatalunya.es",

    logo: "https://www.estudiodentalcatalunya.es/images/logo.png",

    image: [
      "https://www.estudiodentalcatalunya.es/images/og-image.jpg",
      "https://www.estudiodentalcatalunya.es/images/clinica/fachada.jpg",
    ],

    telephone: "+34 930067281",

    email: "estudiodentalcataluna@gmail.com",

    priceRange: "€€",

    slogan: "Tu clínica dental de confianza en Sant Boi de Llobregat",

    description:
      "Clínica dental privada en Sant Boi de Llobregat especializada en implantología, ortodoncia, ortodoncia invisible, estética dental, endodoncia, periodoncia, odontopediatría, prótesis dentales y odontología general.",

    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Mallorca 40, Local 2",
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

    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+34 930067281",
        contactType: "customer service",
        areaServed: "ES",
        availableLanguage: ["es", "ca"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+34 640317047",
        contactType: "WhatsApp",
        areaServed: "ES",
        availableLanguage: ["es", "ca"],
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
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "10:00",
        closes: "14:00",
      },
    ],

    paymentAccepted: [
      "Cash",
      "Credit Card",
      "Debit Card",
      "Financing",
    ],

    currenciesAccepted: "EUR",

    areaServed: [
      "Sant Boi de Llobregat",
      "Viladecans",
      "Gavà",
      "Castelldefels",
      "Cornellà de Llobregat",
      "Sant Joan Despí",
      "Sant Vicenç dels Horts",
      "Sant Feliu de Llobregat",
      "El Prat de Llobregat",
      "Barcelona",
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
      "CBCT",
      "Radiología Digital",
      "Endodoncia",
      "Periodoncia",
      "Odontopediatría",
      "Prótesis Dentales",
      "Elevación de seno",
      "Regeneración ósea",
    ],

    sameAs: [
      "https://www.instagram.com/edental.catalunya/",
      "https://www.google.com/search?q=Estudio+dental+Catalunya&stick=H4sIAAAAAAAA_-NgU1I1qDA0SjSxTDE3TTRNtLQ0STa3MqgwTzY1Tks1NUxLNUs2sjQ0WMQq4VpcUpqSma-QkppXkpij4JwIJEvzKhMBaGFsUkQAAAA",
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