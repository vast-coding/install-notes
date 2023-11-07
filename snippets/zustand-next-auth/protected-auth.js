import { axios } from "lib/axios";
import { useAuthState } from "lib/store";
import { Loader } from "lucide-react";
import { useRouter } from "next/router";
import React from "react";
import { useIsClient } from "usehooks-ts";

export const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const isClient = useIsClient();
  const { authToken } = useAuthState();

  // if no auth token, redirect to login page
  React.useEffect(() => {
    if (!authToken) {
      router.replace("/auth/login");
    }
  }, [authToken]);

  // if auth token, set axios auth header
  React.useEffect(() => {
    if (authToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;
    }

    if (!authToken) {
      axios.defaults.headers.common["Authorization"] = undefined;
    }

    return () => {
      axios.defaults.headers.common["Authorization"] = undefined;
    };
  }, [authToken]);

  if (!isClient || !authToken)
    return (
      <div className="bg-app flex h-screen items-center justify-center">
        <Loader className="animate-spin" />
      </div>
    );

  return <React.Fragment>{children}</React.Fragment>;
};