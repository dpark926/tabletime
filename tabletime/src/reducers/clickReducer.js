const initialState = {
  clickedNav: '',
  clickedSubNav: '',
}

const clickReducer = ( state = initialState, { type, payload } ) => {
  switch ( type ) {
    case 'handleNavClick':
      return {
        ...state,
        clickedNav: payload.clickedNav
      }
    case 'handleSubNavClick':
      return {
        ...state,
        clickedSubNav: payload.clickedSubNav
      };
    default:
      return state;
  }
};

export default clickReducer;