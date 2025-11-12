"use client";

import { useUsers } from "@/api/hooks/useUsers";
import { Button, DataList } from "@openfun/cunningham-react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export default function Users() {
  const { data, loading, error } = useUsers<User[]>();
  const router = useRouter();

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name" },
    { field: "username", headerName: "Username" },
    { field: "email", headerName: "Email" },
    { field: "phone", headerName: "Phone" },
    { field: "website", headerName: "Website" },
    {
      id: "actions",
      headerName: "Actions",
      renderCell: ({ row }: { row: User }) => (
        <Button
          size="small"
          variant="secondary"
          onClick={() => router.push(`/users/${row.id}`)}
        >
          View
        </Button>
      ),
    },
  ];

  return (
    <div>
      <h1>Users</h1>
      <div className={styles.grid}>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {data && <DataList rows={data} columns={columns} />}
      </div>
    </div>
  );
}
