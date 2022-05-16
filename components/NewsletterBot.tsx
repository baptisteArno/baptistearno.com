import { useEffect } from "react";
import { initContainer } from "typebot-js";

export const NewsletterBot = () => {
  useEffect(() => {
    initContainer("typebot-container", {
      url: "https://viewer.typebot.io/newsletter-registration",
    });
  }, []);

  return (
    <div id="typebot-container" style={{ width: "100%", height: "400px" }} />
  );
};
