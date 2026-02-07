import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore WorkO's 41 service categories available on demand.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <ServicesClient />
    </div>
  );
}
