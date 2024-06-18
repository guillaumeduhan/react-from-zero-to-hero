const MenuItem = ({
  item,
  setBackgroundColor,
  emitData
}) => {
  return <li className="bg-green-500">
    <button onClick={() =>
      emitData(item)
    }>{item}</button>
  </li>
}

export default function Menu({
  name,
  items,
  setBackgroundColor,
  emitData
}) {
  return <div className="bg-red-500 p-4">
    <p className="text-xs">Menu/index.jsx</p>
    <p>This is a menu for {name}</p>
    {items.map((item) =>
      <MenuItem key={item} {...{
        item, setBackgroundColor, emitData
      }} />
    )}
  </div>
}