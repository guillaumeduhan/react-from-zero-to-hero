"use client";
import config from "../../config.json";
import Button from "./Button";

const openUrl = (link) => window.open(link, "_blank");

export default function Index() {
  return <div className="flex flex-wrap items-center gap-2">
    {Object.entries(config.social)
      .map(([key, value]) => (
        <Button
          key={key}
          onClick={() => openUrl(value)}
          {...{
            className: key
          }}
        >
          <span className="capitalize">{key}</span>
        </Button>
      ))
    }
  </div>;
}