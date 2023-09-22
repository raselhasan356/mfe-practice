import Button from "store/Button";
import { apiShell } from "store/apiService";
import { useAllUserQuery } from "./service";

function App() {
  const { data } = useAllUserQuery();
  console.log(data);
  return (
    <>
      <Button />
    </>
  );
}

export default App;
