import { useState } from "react";

function Form({
  members,
  setMembers
}) {
  return (
    <div className="grid gap-2">
      {members.map((member) => <div className="flex gap-2" key={member}>
        <span>{member}</span>
        <button className="px-1 text-white bg-red-500 rounded" onClick={() =>
          setMembers(() => members.filter((x) => x !== member))
        }>Remove</button>
      </div>)}
    </div>
  );
}

export default function Home() {
  const [members, setMembers] = useState([
    "Guillaume", "John", "Mary"
  ]);

  return <div>
    <Form {...{
      members,
      setMembers
    }} />
  </div>;
}