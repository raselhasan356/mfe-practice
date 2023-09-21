import { lazy, Suspense } from "react";

const RemoteLoginForm = lazy(() => import("remoteApp/RemoteLoginForm"));

export default function LoginForm() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <RemoteLoginForm />
    </Suspense>
  );
}
