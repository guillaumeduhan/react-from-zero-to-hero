import config from "../../config.json";
import Item from "./Item";

const openUrl = (link) => window.open(link, "_blank");

export default function Index() {
  return <div className="flex flex-wrap items-center gap-2">
    {config.social.map((obj, index) => (
      <Item
        key={index}
        onClick={() => openUrl(obj.url)}
        icon={obj.icon}
      />
    ))}
  </div>;
}