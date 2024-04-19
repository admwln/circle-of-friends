import { useState } from "react";
import { useData } from "./assets/components/useData";
import PersonCard from "./assets/components/PersonCard";

function App() {
  const [nationality, setNationality] = useState("au");
  const { person, loading } = useData(
    `https://randomuser.me/api/?nat=${nationality}`
  );
  return (
    <>
      <PersonCard person={person} loading={loading}></PersonCard>
    </>
  );
}

export default App;
