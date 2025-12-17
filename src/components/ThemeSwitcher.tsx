import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const ThemeSwitcher = () => {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.className = dark ? "bg-dark text-light" : "bg-light";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <Button
      variant={dark ? "light" : "dark"}
      onClick={() => setDark(!dark)}
    >
      {dark ? "Light" : "Dark"}
    </Button>
  );
};

export default ThemeSwitcher;
