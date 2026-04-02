"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import styles from "./styles.module.css";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Prevents hydration mismatch by waiting for the client to mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder or null to prevent the server/client HTML mismatch
    return <div className="h-6 w-12" />; 
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={styles.toggleSwitch}>
      <label className={styles.switchLabel}>
        <input 
          type="checkbox" 
          className={styles.checkbox} 
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
}