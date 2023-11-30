import { useEffect, useState } from "react";
import Wallet from "./layouts/main/components/Wallet";
import Header from "./layouts/main/components/Header";
import Board from "./layouts/main/components/Board";
import Price from "./layouts/main/components/Price";
import { getData } from "./services/project";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
      .then((res) => setData(res))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="bg-[#FAFAFA]">
        <Header />
        <div className="flex justify-between items-start px-10 py-8">
          <Wallet />
          <Price data={data} />
          <Board />
        </div>
      </div>
    </>
  );
}

export default App;
