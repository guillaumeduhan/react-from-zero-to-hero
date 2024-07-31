import config from '../config.json';

import List from "./List";

export default function Projects() {
  const {
    projects
  } = config;
  return <div className="grid gap-2 pt-8">
    <h2 className='font-[600] text-lg'>Projects.</h2>
    <List list={projects} />
  </div>
}