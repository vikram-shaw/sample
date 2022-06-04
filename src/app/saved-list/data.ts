import { SavedItem } from "./model";

export const MockData: SavedItem[] = [
  {
    id: 1,
    date: null,
    name: "Competitive intelligence",
    entityCount: 0,
    action: {message: true, share: false, edit: true, delete: false },
    details: []
  },{
    id: 2,
    date: null,
    name: "My Vendors",
    entityCount: 0,
    action: {message: true, share: false, edit: false, delete: false },
    details: []
  },{
    id: 3,
    date: null,
    name: "My Customers",
    entityCount: 0,
    action: {message: true, share: false, edit: false, delete: false },
    details: []
  },{
    id: 4,
    date: new Date(new Date().getTime()-(Math.random()*20000000000)),
    name: "Test_30_results",
    entityCount: 28,
    action: {message: true, share: true, edit: true, delete: true },
    details: ["Bundi Technologies Private Limited(Swiggy)"]
  },{
    id: 5,
    date: new Date(new Date().getTime()-(Math.random()*20000000000)),
    name: "To_index",
    entityCount: 100,
    action: {message: true, share: true, edit: true, delete: true },
    details: ["Bundi Technologies Private Limited(Swiggy)",
      "Hector Beverages Private Limited", "Puma Sports India Private Limited",
      "Dewan Housing Finance Corporation Ltd.", "Infosys Limited",
      "Think & Learn Private Limited", "Delhivery Private Limited"]
  },{
    id: 6,
    date: new Date(new Date().getTime()-(Math.random()*20000000000)),
    name: "KPMG Required Companies - Listed Set_Prasada Kumar",
    entityCount: 34,
    action: {message: true, share: true, edit: true, delete: true },
    details: []
  },{
    id: 7,
    date: new Date(new Date().getTime()-(Math.random()*20000000000)),
    name: "Error Case- LTB To EBITDA Blank_Prasada Kumar",
    entityCount: 24,
    action: {message: true, share: true, edit: true, delete: true },
    details: ["Bundi Technologies Private Limited(Swiggy)",
      "Hector Beverages Private Limited", "Puma Sports India Private Limited",
      "Dewan Housing Finance Corporation Ltd.", "Infosys Limited",
      "Think & Learn Private Limited", "Delhivery Private Limited"]
  },{
    id: 8,
    date: new Date(new Date().getTime()-(Math.random()*20000000000)),
    name: "To Companies",
    entityCount: 2,
    action: {message: true, share: true, edit: true, delete: true },
    details: ["Bundi Technologies Private Limited(Swiggy)",
      "Hector Beverages Private Limited", "Puma Sports India Private Limited",
      "Dewan Housing Finance Corporation Ltd.", "Infosys Limited",
      "Think & Learn Private Limited", "Delhivery Private Limited"]
  },{
    id: 9,
    date: new Date(new Date().getTime()-(Math.random()*20000000000)),
    name: "Custom",
    entityCount: 30,
    action: {message: true, share: true, edit: true, delete: true },
    details: ["Bundi Technologies Private Limited(Swiggy)",
      "Hector Beverages Private Limited", "Puma Sports India Private Limited",
      "Dewan Housing Finance Corporation Ltd.", "Infosys Limited",
      "Think & Learn Private Limited", "Delhivery Private Limited"]
  },{
    id: 10,
    date: new Date(new Date().getTime()-(Math.random()*20000000000)),
    name: "Mumbai",
    entityCount: 3,
    action: {message: true, share: true, edit: true, delete: true },
    details: ["Bundi Technologies Private Limited(Swiggy)",
      "Hector Beverages Private Limited", "Puma Sports India Private Limited",
      "Dewan Housing Finance Corporation Ltd.", "Infosys Limited",
      "Think & Learn Private Limited", "Delhivery Private Limited"]
  }
]
