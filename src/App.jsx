import { useState } from "react";
import { useData } from "./assets/components/useData";
import PersonCard from "./assets/components/PersonCard";
import SelectNat from "./assets/components/SelectNat";

function App() {
  const [nat, setNat] = useState("au");
  const { friends, loading } = useData(
    `https://randomuser.me/api?nat=${nat}&results=3`);
  return (
    <>
      <SelectNat label="Where are you?" setNat={setNat} />
      {loading && <div className="spin">Loading...</div>}

    </>
}
export default App;
