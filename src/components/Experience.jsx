import config from '../config.json';
import List from './List';

export default function Experience() {
  const {
    experience
  } = config;
  return <div className="grid gap-2 pt-8">
    <h2 className='font-[600] text-lg'>Experience.</h2>
    <div className='grid'>
      <List list={experience} />
    </div>
  </div>
}