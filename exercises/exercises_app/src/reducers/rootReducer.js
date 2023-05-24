

const initState = {
	magazines: ["m1","m2"],
    authors:["aut1","aut2"]
};


const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case "ADD_AUTHORS":
            return {
                ...state,
                authors:[...state.authors,action.author]  
            }
            
            case "ADD_MAGAZINES":
                return {
                    ...state,
                    magazines:[...state.magazines,action.magazine]  
                }
                    
        default:
            break;
    }
	return state;
};

export default rootReducer;