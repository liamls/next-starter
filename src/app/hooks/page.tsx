"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@openfun/cunningham-react";
import styles from "./page.module.css";
import Card from "@/components/Card";

export default function HooksDemoPage() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString());
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>React Basic Hooks</h1>
      <Card
        title="useState"
        description="Allows you to store and update a value inside your component. 
        For example, a counter or a piece of text."
      >
        <div className={styles.section}>
          <p>Counter: {count}</p>
          <Button size="small" onClick={() => setCount(count + 1)}>
            Increment
          </Button>
        </div>
      </Card>
      <Card
        title="useEffect"
        description="Runs code when the component mounts, updates, or unmounts. 
        Useful for side effects such as fetching data or using timers."
      >
        <div className={styles.section}>
          <p>Current time: {time}</p>
        </div>
      </Card>
      <Card
        title="useRef"
        description="Keeps a reference to a DOM element or a value without causing a re-render."
      >
        <div className={styles.section}>
          <input
            ref={inputRef}
            placeholder="Type something..."
            className={styles.input}
          />
          <Button
            size="small"
            variant="secondary"
            onClick={() => inputRef.current?.focus()}
          >
            Focus input
          </Button>
        </div>
      </Card>
    </main>
  );
}
