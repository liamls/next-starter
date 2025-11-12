"use client";

import { useParams } from "next/navigation";
import styles from "../page.module.css";
import Card from "@/components/Card";

export default function UserDetailPage() {
  const params = useParams();
  const userId = params?.id;

  return (
    <main className={styles.container}>
      <Card
        title={`User ID: ${userId}`}
        description={`Normally this page would display the full details of user ${userId} fetched from the API.`}
      >
        <div className={styles.section}>
          <p>
            This is just a placeholder showing the dynamic routing parameter.
          </p>
        </div>
      </Card>
    </main>
  );
}
