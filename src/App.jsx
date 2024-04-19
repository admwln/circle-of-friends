import { useState } from "react";
import { useData } from "./assets/components/useData";
import PersonCard from "./assets/components/PersonCard";

function App() {
  const [nationality, setNationality] = useState("au");
  const { friends, loading } = useData(
    `https://randomuser.me/api?nat=${nationality}&results=3`
  );
  return <>{loading && <div className="spin">Loading...</div>}</>;
}

export default App;
