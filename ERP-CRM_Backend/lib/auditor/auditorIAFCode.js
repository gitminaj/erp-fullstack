import IAFCodes from "../../models/auditor/auditorIAFCode.js";


const iafCodes = [
  "1 Agriculture, forestry and fishing",
  "2 Mining & Quarrying",
  "3 Food products, beverages and tobacco",
  "4 Textiles and textile products",
  "5 Leather and leather products",
  "6 Wood and wood products ",
  "7 Pulp, paper and paper products",
  "8 Publishing companies ",
  "9 Printing companies",
  "10	Manufacture of coke and refined petroleum products ",
  "11	Nuclear Fuel ",
  "12	Chemicals, chemical products and fibres ",
  "13	Pharmaceuticals",
  "14	Rubber and plastic products",
  "15	Non metallic mineral products",
  "16	Concrete, cement, lime, plaster, etc.",
  "17	Basic metals and fabricated metal products",
  "18	Machinery and equipment",
  "19	Electrical equipment, Optical and precision equipments and medical and surgical equipment",
  "20	Shipbuilding  ",
  "21	Aerospace",
  "22	Other transport equipment",
  "23	Manufacturing not elsewhere classified",
  "24	Recycling ",
  "25	Electricity supply",
  "26	Gas supply",
  "27	Water supply",
  "28	Construction ",
  "29	Wholesale and retail trade, Repair of motor vehicles, motor cycles and Personal and household goods",
  "30	Hotels and restaurants ",
  "31	Transport, Storage and communication",
  "32	Financial intermediation; Real estate; renting",
  "33	Information technology",
  "34	Engineering Services",
  "35	Other services",
  "36	Public administration ",
  "37	Education ",
  "38	Health and social work ",
  "39	Other social services",
];

export const seedIAFCode = async () => {
  for (const iafCode of iafCodes) {
    await IAFCodes.findOrCreate({
      where: { name: iafCode },
    });
  }
};
