import {
  NotificationContainer,
  NotificationManager
} from 'react-notifications';

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
      itemsPerPage: 8,
      totalPages: []
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
  switch (action.type) {
    case 'SUBMIT':
      if (action.payload.hits.length === 0) {
        NotificationManager.warning('No Results Found');
      }

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
      let calories = {
        fields: {
          cal_min: action.payload.min,
          cal_max: action.payload.max
        }
      };
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
      return {
        ...state,
        foodItems: action.payload,
        initialFoodItems: action.payload
      };

    case '@@redux-form/CHANGE':
      let macros = { ...state.macros };

      if (action.meta.form !== 'simple') {
        macros.fields[action.meta.field] = action.payload;
      }

      return {
        ...state,
        macros: macros
      };

    case 'APPLY_FILTER':
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
      NotificationManager.success(
        `${action.item.fields.item_name} added to your list`
      );
      return {
        ...state,
        selectedItems: [...state.selectedItems, action.item]
      };

    case 'REMOVE_ITEM':
      let selectedItems = [...state.selectedItems];
      selectedItems.splice(action.key, 1);

      NotificationManager.error(`Item removed`);

      return {
        ...state,
        selectedItems: selectedItems
      };

    default:
      return state;
  }
};
