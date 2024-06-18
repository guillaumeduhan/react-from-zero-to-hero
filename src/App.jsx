import { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('bg-blue-500');
  return (
    <div>
      <main className={`${backgroundColor} p-2`}>
        <p className="text-xs">App.jsx</p>
        <Header>
          <Menu {...{
            name: "Guillaume",
            items: [
              "Home",
              "Profile",
              "Notifications"
            ],
            emitData: (item) => alert(item)
          }} />
        </Header>
      </main>
    </div>
  )
}


