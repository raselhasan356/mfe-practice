import Dashboard from "./Dashboard";

import { SWRConfig } from "swr";
import axios from "./api/axios";

import { StoreProvider, store } from "store/store";

function App() {
  console.log(store);
  return (
    <StoreProvider>
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            axios
              .get(resource, init)
              .then((res) => res.data)
              .catch((err) => err),
        }}
      >
        <Dashboard />
      </SWRConfig>
    </StoreProvider>
  );
}

export default App;
