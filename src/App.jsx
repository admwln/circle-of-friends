import { useState } from "react";
import { useData } from "./assets/components/useData";
import PersonCard from "./assets/components/PersonCard";
import SelectNat from "./assets/components/SelectNat";

function App() {
  const [nat, setNat] = useState("au");
  const { person, loading } = useData(`https://randomuser.me/api/?nat=${nat}`);
  return (
    <>
      <SelectNat label="Where are you?" setNat={setNat} />
      <PersonCard person={person} loading={loading}></PersonCard>
    </>
  );
}

export default App;
