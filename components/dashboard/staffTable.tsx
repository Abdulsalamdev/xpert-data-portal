import { builder } from "@/api/builder";
import { Table } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { STAFFDASHBOARD } from "../types/AllTypes";

export function StaffTable() {
  const { data: staffList } = useQuery({
    queryFn: () => builder.use().staff.api.staffList(),
    queryKey: builder.staff.api.staffList.get(),
    select: ({ data }) => data?.results,
  });
  return (
    <div className="">
      <Table horizontalSpacing="md" verticalSpacing="md">
        <thead className="bg-[#F5F5F6] dark:bg-[#232A37]">
          <tr>
            <th className=" dark:text-[white]">Name</th>
            <th className=" dark:text-[white]">Email Address</th>
            <th className=" dark:text-[white]">Mobile Number</th>
            <th className=" dark:text-[white]">Tribe / Department</th>
            <th className=" dark:text-[white]">Squad / Unit</th>
          </tr>
        </thead>
        <tbody className="overflow-auto">
          {staffList?.map((staff) => (
            <tr key={staff?.id} className="tb">
              <td className=" dark:text-[#C1C2C6]">{staff?.name}</td>
              <td className=" dark:text-[#C1C2C6]">{staff?.email}</td>
              <td className=" dark:text-[#C1C2C6]">{staff?.phone_number}</td>
              <td className=" dark:text-[#C1C2C6]">{staff?.tribe}</td>
              <td className=" dark:text-[#C1C2C6]">{staff?.squad}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
