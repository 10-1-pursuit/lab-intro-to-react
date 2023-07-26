

 function formatCards(user) {
    return user.firstName + " " + user.lastName;
  }
  
  const user = {
    firstName: `Nicki`,
    lastName: `Roxx`,
    bio: `boogie oogie woo`
  };

  const cards = <h1>Hello, {formatCards(user)}!</h1>;


  export default { formatCards, cards}