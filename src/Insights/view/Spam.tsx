import React from "react";
import PageTitle from "../../components/Typography/PageTitle";
import { DataTable } from "../../components/DataTable";
import { Button, TableCell } from "@windmill/react-ui";
import ChannelIcon from "../../assets/img/channel-icon.png";
import { AvatarWithName } from "../../components/AvatarWithName/view/AvatarWithName";
import { useSpam } from "../infra/useSpam";
import { Loader } from "../../components/Loader";

const Spam: React.FC<{}> = () => {
  // const { spam, isLoading } = useSpam();

  const TextCell = (text: string | number) => (
    <TableCell className="max-w-xl">
      <div className="truncate">
        <div className="truncate">{text}</div>
      </div>
    </TableCell>
  );
  return (
    <>
      <PageTitle>Video Call Logs</PageTitle>
      <Loader isLoading={false}>
        <DataTable
          data={[
            {
              id: 1,
              name: "Soha",
              timestamp: new Date().toDateString(),
              rating: 4,
              price: 5,
            },
            {
              id: 1,
              name: "Soha",
              timestamp: new Date().toDateString(),
              rating: 4,
              price: 5,
            },
            {
              id: 1,
              name: "Soha",
              timestamp: new Date().toDateString(),
              rating: 4,
              price: 5,
            },
            {
              id: 1,
              name: "Soha",
              timestamp: new Date().toDateString(),
              rating: 4,
              price: 5,
            },
          ]}
          config={{
            columns: [
              {
                columnLabel: "ID",
                render: (row) => TextCell(row.id),
              },
              {
                columnLabel: "High Schloor Name",
                render: (row) => TextCell(row.name),
              },
              {
                columnLabel: "Duration",
                render: (row) => TextCell(row.timestamp),
              },
              {
                columnLabel: "Rating",
                render: (row) => TextCell(row.rating),
              },
              {
                columnLabel: "Price",
                render: (row) => TextCell(row.price),
              },
            ],
          }}
        />
      </Loader>
    </>
  );
};

export default Spam;
