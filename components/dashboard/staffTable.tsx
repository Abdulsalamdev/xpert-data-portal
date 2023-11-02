import { builder } from "@/api/builder";
import { Table } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";

export function StaffTable({ staffList }: any) {
  return (
    <div className="">
      <Table horizontalSpacing="md" highlightOnHover verticalSpacing="md">
        <thead className="bg-[#F5F5F6]">
          <tr>
            <th className="">Name</th>
            <th className="">Email Address</th>
            <th className="">Mobile Number</th>
            <th className="">Tribe / Department</th>
            <th className="">Squad / Unit</th>
          </tr>
        </thead>
        <tbody className="overflow-auto">
          <tr key={staffList?.id}>
            <td>{staffList?.name}</td>
            <td>{staffList?.email}</td>
            <td>{staffList?.phone_number}</td>
            <td>{staffList?.tribe}</td>
            <td>{staffList?.squad}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
