
import IAFCodesPartWise from "../../models/auditor/auditorIAFCodePartWise.js";

const IAFCodePartWises = [
  "01-A : aquaculture (breeding, rearing, and harvesting of plants and animals in all types of water environments, farming / forestry (depending on the activities could be high)",
  "01-B : fishing (offshore, coastal dredging and diving)",
  "2",
  "3",
  "04-A : Tanning of textiles and clothing",
  "04-B : Textiles and clothing except for tanning",
  "05-A : Processing & tanning of leather",
  "05-B : Processing of leather (Except Tanning)",
  "6",
  "07-A : Pulping part of paper manufacturing including paper recycling processing",
  "07-B : Paper production and paper products excluding pulping",
  "15-A : Manufacturing of Fiberglass, Non-metallic processing and products covering ceramics, concrete, cement lime, plaster etc.",
  "15-B : Non-metallic processing and products covering glass, ceramics clay etc.",
  "15-C : Manufacturing of Metallic Products",
  "16",
  "17-A : Primary productions of metals, hot and cold forming and metal fabrication, manufacturing and assembly of metal structures",
  "17-B : Surface and other chemically based treatment for metal fabricated products excluding primary production and for general mechanical engineering (depending on the treatment and the size of the component could be high), manufacturing of metallic products",
  "18-A : Manufacturing of weapons and explosives",
  "18-B : Automotive Industry",
  "18-C : General mechanical engineering assembly",
  "24-A : Hazardous waste",
  "24-B : Non-hazardous waste",
  "25-A : Coal Based Electricity generation",
  "25-B : Non-Coal Based Electricity generation and distribution",
  "25-C : Nuclear Electricity generation",
  "29-A : Fossil fuel wholesale & retail, Storage (depending on the amount of fuel, could be high)",
  "29-B : Wholesale and retail, Storage (depending on the product, could be medium or high e.g. fuel)",
  "30-A : Wholesale and retail, Storage (depending on the product, could be medium or high e.g. fuel)",
  "30-B : Restaurants and Campings",
  "31-A : Transport and distribution of dangerous goods (by land, air and water)",
  "31-B : Storage of large quantities of hazardous material",
  "31-C : Transport and distribution of non-dangerous goods (by land, air and water)",
  "31-D: Transport of Passengers (By Air, Land and Sea)",
  "34-A : Research & development in natural and technical sciences (depending on the business sector could be high)",
  "34-B : Research & development on social sciences and humanities",
  "35-A : Industrial cleaning, hygiene cleaning, dry cleaning normally part of general business services, Technical testing and laboratories",
  "35-B : Advertising agency, Telecommunications and post office services, General business services except industrial cleaning, hygiene cleaning, dry cleaning and education services)",
  "36-A : Public administration, local authorities",
  "36-B : Slaughter Houses",
  "36-C : Defence activities / crisis management",
  "37-A : Education services (depending on the object of teaching activities could be high or low)",
  "37-B : On-site Training & Classroom Training",
  "39-A : Hazardous and non-hazardous waste processing e.g. incineration etc., effluent and sewerage processing industrial and civil construction and demolition (including building completion with electrical, hydraulic and air conditioning installation activities)",
  "39-B : General business services except industrial cleaning, hygiene cleaning, dry cleaning and education services"
]

export const auditoriafCodePartWise = async () => {
  for (const IAFCodePartWise of IAFCodePartWises) {
    await IAFCodesPartWise.findOrCreate({
      where: { name: IAFCodePartWise },
    });
  }
};

