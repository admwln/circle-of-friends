import { useState } from "react";
import { useData } from "./assets/components/useData";
import PersonCard from "./assets/components/PersonCard";
import SelectNat from "./assets/components/SelectNat";
import DisplayFriendCircle from "./assets/components/DisplayFriendCircle";

function App() {
  const [nat, setNat] = useState("au");
  const { data: friends, loading } = useData(
    `https://randomuser.me/api?nat=${nat}&results=3`
  );
  return (
    <>
      <SelectNat label="Where are you?" setNat={setNat} />
      {loading && <div className="spin">Loading...</div>}
      {!loading && <DisplayFriendCircle friends={friends} loading={loading} />}
    </>
  );
}
export default App;
