import { createBuilder } from "@ibnlanre/portal";
import { AUTHAPI, USETOKEN } from "./axios-config";
import { LOGINAPI } from "@/components/types/AllTypes";

export const builder = createBuilder({
  auth: {
    api: {
      login: (data: LOGINAPI) => AUTHAPI.post("/api/auth/login/", data),
      forgetPassword: (data: any) =>
        AUTHAPI.post("/api/auth/forget-password/", data),
      verifyPin: (paylode: any) =>
        AUTHAPI.post("/api/auth/verify-pin/", paylode),
      passwordreset: (data: any) =>
        AUTHAPI.post("/api/auth/reset-password/", data),
      activityLog: () => AUTHAPI.get("/api/address/{id}/update"),
      activityLogExorted: () => AUTHAPI.get("/api/auth/activity-log/export"),
      activityLogSorted: () => AUTHAPI.post("/api/auth/activity-log/sorted"),
    },
  },
  address: {
    api: {
      addressList: () => USETOKEN.get("/api/address/"),
      editAddress: (id: any) => USETOKEN.put(`/api/address/${id}/update`),
      deleteAddress: (id: any) => USETOKEN.delete(`/api/address/${id}/delete`),
    },
  },
  region: {
    api: {
      regionList: () => USETOKEN.get("/api/regions/"),
    },
  },
  schema: {
    api: {
      schemaList: () => USETOKEN.get("/api/schema/"),
      cityAddress: (region_pk: any) =>
        USETOKEN.get(`/api/address/${region_pk}/city-address`),
      sendCityAddress: (region_pk: any) =>
        USETOKEN.post(`/api/address/${region_pk}/city-address`),
    },
  },
  staff: {
    api: {
      staffList: () => USETOKEN.get("/api/staff/"),
      staffId: (id: any) => USETOKEN.get(`/api/staff/${id}/`),
      editStaffId: (id: any) => USETOKEN.put(`/api/staff/${id}/`),
      suspendedStaff: (id: any) => USETOKEN.get(`/api/staff/${id}/suspend`),
      createStaff: (data: any) => USETOKEN.post(`/api/staff/create`, data),
      dashboardStaff: () => USETOKEN.get("/api/staff/dashboard/"),
      staffExport: () => USETOKEN.post("/api/staff/export"),
    },
  },
  tribes: {
    api: {
      tribeList: () => USETOKEN.get("/api/tribes/"),
      tribeId: (id: any) => USETOKEN.get(`/api/tribes/${id}/`),
      editTribe: (id: any) => USETOKEN.put(`/api/tribes/${id}/`),
      tribeSquads: (tribe_pk: any) =>
        USETOKEN.get(`/api/tribes/${tribe_pk}/squads`),
      sendTribeSquadS: (tribe_pk: any) =>
        USETOKEN.post(`/api/tribes/${tribe_pk}/squads`),
      craetetribe: () => USETOKEN.post("/api/tribes/create"),
      squadExport: (tribe_pk: any) =>
        USETOKEN.get(`/api/tribes/${tribe_pk}/squads/export`),
      editTribeSquad: (
        squad_pk: number,
        id: string | number,
        data: Record<string, string | number>
      ) => USETOKEN.put(`/api/tribes/${squad_pk}/squads/${id}/`, data),
      listTribeSquad: (
        squad_pk: number,
        id: string | number,
        data: Record<string, string | number>
      ) => USETOKEN.get(`/api/tribes/${squad_pk}/squads/${id}/`, data),
    },
  },
});
