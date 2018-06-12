const initialState = {
  foods: [],
  brands: [],
  restaurant: { fields: { name: null, _id: null } },
  initialFoodItems: [],
  foodItems: [],
  calories: {
    fields: {
      cal_min: 250,
      cal_max: 500
    }
  },
  macros: {
    fields: {
      nf_calories: null,
      nf_total_fat: null,
      nf_total_carbohydrate: null,
      nf_protein: null
    }
  },
  value: '',
  pagination: {
    fields: {
      currentPage: 1,
      itemsPerPage: 10,
      totalPages: [] //need to use an array if passing value through as a prop into pagination comp
    }
  },
  selectedItems: [],
  totals: {
    calSum: null,
    fatSum: null,
    carbSum: null,
    proteinSum: null
  }
};

export default (state = initialState, action) => {
  // console.log(action,  state);
  switch (action.type) {
    case 'SUBMIT':
      return {
        ...state,
        brands: action.payload.hits
      };

    case 'SET_RESTAURANT':
      return {
        ...state,
        restaurant: action.payload
      };

    case 'SET_CALS':
      // console.log(action.payload);
      let calories = {
        fields: {
          cal_min: action.payload.min,
          cal_max: action.payload.max
        }
      };
      // console.log(calories);
      return {
        ...state,
        calories: calories
      };

    case 'SET_MACROS':
      return {
        ...state,
        macros: action.payload
      };

    case 'GET_ITEMS':
      // console.log(action.payload);
      return {
        ...state,
        foodItems: action.payload,
        initialFoodItems: action.payload
      };

    case '@@redux-form/CHANGE':
      // console.log(action.meta.form); //logs what form is being used on input
      let macros = { ...state.macros };

      if (action.meta.form !== 'simple') {
        // console.log(macros, state.macros);
        // console.log(state);
        macros.fields[action.meta.field] = action.payload;
      }
      // console.log(action.payload);

      return {
        ...state,
        macros: macros
      };

    case 'APPLY_FILTER':
      // console.log(state);
      let filterList = state.initialFoodItems.filter(function(el) {
        return (
          el.fields.nf_protein <=
            (Number(state.macros.fields.nf_protein) || 1000000) &&
          el.fields.nf_total_carbohydrate <=
            (Number(state.macros.fields.nf_total_carbohydrate) || 1000000) &&
          el.fields.nf_total_fat <=
            (Number(state.macros.fields.nf_total_fat) || 1000000)
        );
      });
      // console.log(filterList);

      return {
        ...state,
        foodItems: filterList
      };

    case 'PREV_PAGE':
      let prevPage = {
        fields: {
          currentPage: state.pagination.fields.currentPage - 1,
          itemsPerPage: state.pagination.fields.itemsPerPage,
          foodItems: state.foodItems
        }
      };
      // console.log(prevPage);
      return {
        ...state,
        pagination: prevPage
      };

    case 'NEXT_PAGE':
      let nextPage = {
        fields: {
          currentPage: state.pagination.fields.currentPage + 1,
          itemsPerPage: state.pagination.fields.itemsPerPage,
          foodItems: state.foodItems
        }
      };
      return {
        ...state,
        pagination: nextPage
      };

    case 'HANDLE_CLICK':
      // console.log('HANDLE CLICK CLICKED!', this);
      // console.log(state, action);
      let selectPage = {
        fields: {
          currentPage: action.payload,
          itemsPerPage: state.pagination.fields.itemsPerPage,
          foodItems: state.foodItems
        }
      };
      return {
        ...state,
        pagination: selectPage
      };

    case 'ADD_TOTAL':
      // const reducer = (accumulator, currentValue) => accumulator + currentValue;
      // const selectedCals = state.selectedItems.cals;
      // const selectedFats = state.selectedItems.fats;
      // const selectedCarbs = state.selectedItems.carbs;
      // const selectedProteins = state.selectedItems.proteins;

      // console.log(action);
      // console.log(selectedCals.push(action.item.fields.nf_calories));
      // console.log(selectedFats.push(action.item.fields.nf_total_fat));
      // console.log(selectedCarbs.push(action.item.fields.nf_total_carbohydrate));
      // console.log(selectedProteins.push(action.item.fields.nf_protein));

      // let calSum = selectedCals.reduce(reducer);
      // let fatSum = selectedFats.reduce(reducer);
      // let carbSum = selectedCarbs.reduce(reducer);
      // let proteinSum = selectedProteins.reduce(reducer);

      // let selectedItems = {
      //   cals: selectedCals,
      //   fats: selectedFats,
      //   carbs: selectedCarbs,
      //   proteins: selectedProteins
      // }

      // let totals = {
      //   calSum: calSum,
      //   fatSum: fatSum,
      //   carbSum: carbSum,
      //   proteinSum: proteinSum
      // }

      console.log(state.selectedItems);
      // console.log(totals);

      return {
        ...state,
        selectedItems: [...state.selectedItems, action.item] //removed ', action.item' from array
        // selectedItems: selectedItems,
        // totals: totals
      };

    case 'REMOVE_ITEM':
      let selectedItems = [...state.selectedItems];
      selectedItems.splice(action.key, 1);

      return {
        ...state,
        selectedItems: selectedItems
      };

    default:
      return state;
  }
};
