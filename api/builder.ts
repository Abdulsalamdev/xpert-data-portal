import { createBuilder } from "@ibnlanre/portal";
import { AUTHAPI } from "./axios-config";
import { LOGINAPI } from "@/components/types/AllTypes";

export const builder = createBuilder({
  auth: {
    api: {
      login: (data: LOGINAPI) => AUTHAPI.post("/api/auth/login/", data),
      logout: () => AUTHAPI.post("/api/auth/logout")
    },
  },
  address: {
    api: {},
  },
  region: {
    api: {},
  },
  schema: {
    api: {},
  },
  staff: {
    api: {},
  },
  tribes: {
    api: {},
  },
});
