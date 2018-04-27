const initialState = {
  clickedNav: '',
  clickedSubNav: '',
}

const clickReducer = ( state = initialState, { type, payload } ) => {
  switch ( type ) {
    case 'handleNavClick1':
      return {
        ...state,
        clickedNav: payload.clickedNav
      }
    case 'handleSubNavClick1':
      return {
        ...state,
        clickedSubNav: payload.clickedSubNav
      };
    default:
      return state;
  }
};

export default clickReducer;