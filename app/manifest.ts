import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Estudio Dental Catalunya",
    short_name: "EDC",
    description:
      "Clínica dental en Sant Boi de Llobregat especializada en implantología, ortodoncia y odontología integral.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0891b2",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}