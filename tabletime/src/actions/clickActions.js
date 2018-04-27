// export const UPDATE_USER = 'users:updateUser';
//
// const updateUser = (newUser) => {
//   return {
//     type: UPDATE_USER,
//     payload: {
//       user: newUser
//     }
//   }
// }

function handleNavClick(data) {
  return {
    type: 'handleNavClick',
    payload: {
      clickedNav: data
    }
  }
}

function handleSubNavClick(data) {
  return {
    type: 'handleSubNavClick',
    payload: {
      clickedSubNav: data
    }
  }
}

// const handleNavClick = {
//   type: 'handleNavClick',
//   payload: {
//     clickedNav: 'Nav clicked!'
//   }
// };

// const handleSubNavClick = {
//   type: 'handleSubNavClick',
//   payload: {
//     clickedSubNav: 'Sub Nav clicked!'
//   }
// };
//
export default {
  handleNavClick,
  handleSubNavClick
};

// export default handleNavClick;