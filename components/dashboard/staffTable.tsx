import { Table } from "@mantine/core";

const elements = [
  {
    name: "abdulsalam",
    Email: "abdulsalam@gmail.com",
    Mobile: "0812838738787",
    tribe: "Carbon",
    squad: "gsghghsghsggg",
  },
  {
    name: "abdulsalam",
    Email: "abdulsalam@gmail.com",
    Mobile: "0812838738787",
    tribe: "Nitrogen",
    squad: "gsghghsghsggg",
  },
  {
    name: "abdulsalam",
    Email: "abdulsalam@gmail.com",
    Mobile: "0812838738787",
    tribe: "Yttrium",
    squad: "gsghghsghsggg",
  },
  {
    name: "abdulsalam",
    Email: "abdulsalam@gmail.com",
    Mobile: "0812838738787",
    tribe: "Barium",
    squad: "gsghghsghsggg",
  },
  {
    name: "abdulsalam",
    Email: "abdulsalam@gmail.com",
    Mobile: "0812838738787",
    tribe: "Cerium",
    squad: "gsghghsghsggg",
  },
  {
    name: "abdulsalam",
    Email: "abdulsalam@gmail.com",
    Mobile: "0812838738787",
    tribe: "Cerium",
    squad: "gsghghsghsggg",
  },
  {
    name: "abdulsalam",
    Email: "abdulsalam@gmail.com",
    Mobile: "0812838738787",
    tribe: "Cerium",
    squad: "gsghghsghsggg",
  },
  {
    name: "abdulsalam",
    Email: "abdulsalam@gmail.com",
    Mobile: "0812838738787",
    tribe: "Cerium",
    squad: "gsghghsghsggg",
  },
  {
    name: "abdulsalam",
    Email: "abdulsalam@gmail.com",
    Mobile: "0812838738787",
    tribe: "Cerium",
    squad: "gsghghsghsggg",
  },
  {
    name: "abdulsalam",
    Email: "abdulsalam@gmail.com",
    Mobile: "0812838738787",
    tribe: "Cerium",
    squad: "gsghghsghsggg",
  },
  {
    name: "abdulsalam",
    Email: "abdulsalam@gmail.com",
    Mobile: "0812838738787",
    tribe: "Cerium",
    squad: "gsghghsghsggg",
  },
];

export function StaffTable() {
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.name}</td>
      <td>{element.Email}</td>
      <td>{element.Mobile}</td>
      <td>{element.tribe}</td>
      <td>{element.squad}</td>
    </tr>
  ));

  return (
    <div className="">
      <Table>
        <thead className="bg-[#F5F5F6]">
          <tr>
            <th className="">Name</th>
            <th className="">Email Address</th>
            <th className="">Mobile Number</th>
            <th className="">Tribe / Department</th>
            <th className="">Squad / Unit</th>
          </tr>
        </thead>
        <tbody className="overflow-auto">{rows}</tbody>
      </Table>
    </div>
  );
}
