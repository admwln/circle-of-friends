// Function takes an argument daysFromNow and will calculate a random date
// from today to daysFromNow and return formatted Date&Time
export function getRandomDateTime(daysFromNow) {
  const start = new Date();
  const end = new Date(start.getTime() + daysFromNow * 24 * 60 * 60 * 1000);

  const randomDate = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );

  const formattedDateArray = randomDate.toDateString().split(" ");
  const formattedDate = `${formattedDateArray[0]}, ${formattedDateArray[1]} ${formattedDateArray[2]}, ${formattedDateArray[3]}`;

  let formattedTime = randomDate.toTimeString().split(" ")[0];
  formattedTime = formattedTime.slice(0, -3);
  formattedTime = formattedTime.slice(0, -3) + ":00";

  return { formattedDate, formattedTime };
}

//Takes in the friends prop from DisplayFriendCircle Component
//And Calculates the average age of the friends and estimates the year the
//circle was formed
export function getYearEstablished(friends) {
  const currentYear = new Date().getFullYear();
  const averageAge =
    friends?.results?.reduce((acc, friend) => {
      return acc + friend.dob.age;
    }, 0) / friends?.results?.length;
  const yearsAsFriends = Math.floor(averageAge / 4);
  return currentYear - yearsAsFriends;
}
