import { useState } from "react";
import { useData } from "./assets/components/useData";
import PersonCard from "./assets/components/PersonCard";
import Start from "./assets/components/Start";
import SelectNat from "./assets/components/SelectNat";
import DisplayFriendCircle from "./assets/components/DisplayFriendCircle";

function App() {
  const [viewState, setViewState] = useState("start");
  const [nat, setNat] = useState("AU");
  const { data: friends, loading } = useData(
    `https://randomuser.me/api?nat=${nat}&results=3`
  );
  
  return (
    <>
      <Start
        setNat={setNat}
        viewState={viewState}
        setViewState={setViewState}
      />
      {loading && <div className="spin">Loading...</div>}
      {!loading && <DisplayFriendCircle friends={friends} loading={loading} />}
    </>
  );
}
export default App;
