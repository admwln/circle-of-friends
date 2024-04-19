const PersonCard = ({ person, loading }) => {
  if (!loading) {
    console.log(person);
    return (
      <>
        {/* <div>
          <img src={person.picture.large} alt="person picture" />
          <p>{person.name.first}</p>
          <p>{person.name.last}</p>
          <p>{person.email}</p>
        </div> */}
      </>
    );
  }
};

export default PersonCard;
