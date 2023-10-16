import { token } from "@/api/axios-config";
import { builder } from "@/api/builder";
import { NavBar } from "@/components/common/navBar";
import { Sidebar } from "@/components/common/sidebar";
import { cookieStorage } from "@ibnlanre/portal";
import { Button } from "@mantine/core";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";

export default function Logout() {
  const { push } = useRouter();
  push("/login");
  cookieStorage.clear();
  return null;
}
