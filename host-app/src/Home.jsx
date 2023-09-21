import { lazy, Suspense } from "react";

//import { getAccessToken } from "remoteApp/remoteUtilityFunctions";

const RemoteNavBar = lazy(() => import("remoteApp/RemoteNavBar"));
const RemoteDashboard = lazy(() => import("remoteMealApp/RemoteDashboard"));

export default function Home() {
  return (
    <div className="flex flex-col">
      <p>Host App</p>
      {/* <button
        onClick={async () => {
          const token = await getAccessToken();
          console.log("Access token from host-app:", token);
        }}
      >
        Get access_token
      </button> */}
      <Suspense fallback={<p>Loading...</p>}>
        <RemoteNavBar />
        <RemoteDashboard />
      </Suspense>
    </div>
  );
}
