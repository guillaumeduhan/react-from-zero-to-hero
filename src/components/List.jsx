'use client';
export default function List({
  list = []
}) {
  return <div className='grid'>
    {list.map((item, index) => <div key={index} className='flex items-center justify-between py-4 transition border-b cursor-pointer dark:border-b-slate-700 last:border-0'>
      <p className='text-sm dark:text-white font-[400] flex gap-1'>{item.title}{item.note ? `, ${item.note}` : null}
        {item.url && <svg className="-rotate-90 text-slate-300" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 256 256"><path fill="currentColor" d="M204 88v104a12 12 0 0 1-12 12H88a12 12 0 0 1 0-24h75L55.51 72.48a12 12 0 0 1 17-17L180 163V88a12 12 0 0 1 24 0" /></svg>}</p>
      <p className='text-xs'>{item.date}</p>
    </div>)}
  </div>;
}