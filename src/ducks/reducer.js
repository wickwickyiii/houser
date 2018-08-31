const initialState = {
  property_name: "",
  address: "",
  city: "",
  state: "",
  zip: 0,
  img: "",
  monthly_mortgage: 0,
  desired_monthly_rent: 0
};

const UPDATE_PROPERTY_NAME = "UPDATE_PROPERTY_NAME";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIP = "UPDATE_ZIP";
const UPDATE_IMG = "UPDATE_IMG";
const UPDATE_MONTHLY_MORTGAGE = "UPDATE_MONTHLY_MORTGAGE";
const UPDATE_DESIRED_MONTHLY_RENT = "UPDATE_DESIRED_MONTHLY_RENT";

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PROPERTY_NAME:
      return Object.assign({}, state, { property_name: action.payload });

    case UPDATE_ADDRESS:
      return Object.assign({}, state, { address: action.payload });

    case UPDATE_CITY:
      return Object.assign({}, state, { city: action.payload });

    case UPDATE_STATE:
      return Object.assign({}, state, { state: action.payload });

    case UPDATE_ZIP:
      return Object.assign({}, state, { zip: action.payload });

    case UPDATE_IMG:
      return Object.assign({}, state, { img: action.payload });

    case UPDATE_MONTHLY_MORTGAGE:
      return Object.assign({}, state, { monthly_mortgage: action.payload });

    case UPDATE_DESIRED_MONTHLY_RENT:
      return Object.assign({}, state, { desired_monthly_rent: action.payload });

    default:
      return state;
  }
}

export function updatePropertyName(property_name) {
  return {
    type: UPDATE_PROPERTY_NAME,
    payload: property_name
  };
}
export function updateAddress(address) {
  return {
    type: UPDATE_ADDRESS,
    payload: address
  };
}
export function updateCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city
  };
}
export function updateState(state) {
  return {
    type: UPDATE_STATE,
    payload: state
  };
}
export function updateZip(zip) {
  return {
    type: UPDATE_ZIP,
    payload: zip
  };
}
export function updateMonthlyMortgage(monthly_mortgage) {
  return {
    type: UPDATE_MONTHLY_MORTGAGE,
    payload: monthly_mortgage
  };
}
export function updateImg(img) {
  return {
    type: UPDATE_IMG,
    payload: img
  };
}
export function updateDesiredMonthlyRent(desired_monthly_rent) {
  return {
    type: UPDATE_DESIRED_MONTHLY_RENT,
    payload: desired_monthly_rent
  };
}

export default reducer;
