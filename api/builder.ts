import { createBuilder } from "@ibnlanre/portal";
import { AUTHAPI, USETOKEN } from "./axios-config";
import {
  ACTIVITYLOGDATA,
  ADDADDRESS,
  AddressLisResult,
  AddressListData,
  CITYADDRESSDATA,
  CREATESTAFF,
  FORGETPASSWORD,
  LOGINAPI,
  PASSWORDRESET,
  REGIONDATA,
  STAFFDASHBOARD,
  STAFFLIST,
  TRIBELIST,
  TRIBESQUAD,
  VERIFY_CODE,
} from "@/components/types/AllTypes";

export const builder = createBuilder({
  auth: {
    api: {
      login: (data: LOGINAPI) => AUTHAPI.post("/api/auth/login/", data),
      forgetPassword: (data: FORGETPASSWORD) =>
        AUTHAPI.post("/api/auth/forget-password/", data),
      verifyPin: (paylode: VERIFY_CODE) =>
        AUTHAPI.post("/api/auth/verify-pin/", paylode),
      passwordreset: (data: PASSWORDRESET) =>
        AUTHAPI.post("/api/auth/reset-password/", data),
    },
  },
  notification: {
    api: {
      activityLog: () =>
        USETOKEN.get<ACTIVITYLOGDATA>("/api/auth/activity-log/"),
      activityLogExorted: () => USETOKEN.get("/api/auth/activity-log/export"),
      activityLogSorted: () => USETOKEN.post("/api/auth/activity-log/sorted"),
    },
  },
  address: {
    api: {
      addAddress: (data: ADDADDRESS) =>
        USETOKEN.post("/api/address/create/", data),
      addressList: () => USETOKEN.get<AddressListData>("/api/address/"),
      editAddress: (id: any) => USETOKEN.put(`/api/address/${id}/update`),
      deleteAddress: (id: any) => USETOKEN.delete(`/api/address/${id}/delete`),
    },
  },
  region: {
    api: {
      regionList: () => USETOKEN.get<REGIONDATA>("/api/regions/"),
    },
  },
  schema: {
    api: {
      cityAddress: (region_pk: number) =>
        USETOKEN.get(`/api/address/${region_pk}/city-address`),
      sendCityAddress: (region_pk: any) =>
        USETOKEN.post(`/api/address/${region_pk}/city-address`),
    },
  },
  staff: {
    api: {
      staffList: () => USETOKEN.get<STAFFLIST>("/api/staff/"),
      staffId: (id: any) => USETOKEN.get(`/api/staff/${id}/`),
      editStaffId: (id: any) => USETOKEN.put(`/api/staff/${id}/`),
      suspendedStaff: (id: any) => USETOKEN.get(`/api/staff/${id}/suspend`),
      createStaff: (data: CREATESTAFF) =>
        USETOKEN.post(`/api/staff/create`, data),
      dashboardStaff: () =>
        USETOKEN.get<STAFFDASHBOARD>("/api/staff/dashboard/"),
      staffExport: () => USETOKEN.post("/api/staff/export"),
    },
  },
  tribes: {
    api: {
      tribeList: () => USETOKEN.get<TRIBELIST>("/api/tribes/"),
      tribeId: (id: any) => USETOKEN.get(`/api/tribes/${id}/`),
      editTribe: (id: any) => USETOKEN.put(`/api/tribes/${id}/`),
      tribeSquads: (tribe_pk: number) =>
        USETOKEN.get<TRIBESQUAD>(`/api/tribes/${tribe_pk}/squads`),
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
