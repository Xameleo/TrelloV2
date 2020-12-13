import reorderCards from "helpers/reorderCards";

const initialState = [
  {
    title: "План на месяц",
    cards: [
      "A",
      "B",
      "C",
      "D",
      "E",
      "UF",
      "OF",
      "WOW"
      
    ]
  },
  {
    title: "План на день",
    cards: [
      1, 2, 3, 4, 5
    ]
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case "CARDS:ADD":
      return  state.map((item, index) => {
          if (action.payload.columnIndex === index) {
            return {
              ...item,
              cards: [...item.cards, action.payload.text]
            };
          }
          return item;
        })
     
    case "COLUMNS:ADD":
      return [...state,
        { 
      
      
         title: action.payload,
         cards:[]
        }
      ];
   
  
  case "COLUMNS:REMOVE":
      return state.filter((_, index)=> action.payload !== index);
      
    case "CARDS:REORDER": {
      const { source, destination } = action.payload;
      return reorderCards({
        state,
        source,
        destination
      });
     }

      default:
        return state;
    
    }
};
