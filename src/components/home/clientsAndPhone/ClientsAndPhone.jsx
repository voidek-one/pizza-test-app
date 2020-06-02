import React from "react";

import OurClients from "./componentsClientsAndPhone/OurClients";
import OurExcellence from "./componentsClientsAndPhone/OurExcellence";
import OurContacts from "./componentsClientsAndPhone/OurContacts";

export default function ClientsAndPhone() {
  return (
    <div>
      <OurClients />
      <OurExcellence />
      <OurContacts />
    </div>
  );
}
