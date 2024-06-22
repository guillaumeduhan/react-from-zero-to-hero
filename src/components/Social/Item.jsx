import { Github, Instagram, LinkedIn, Tiktok, Twitter, Youtube } from "../Icons";

const GetIcon = (props) => {
  const { icon } = props;
  switch (icon) {
    case 'Github':
      return <Github />
    case 'LinkedIn':
      return <LinkedIn />
    case 'Youtube':
      return <Youtube />
    case 'Instagram':
      return <Instagram />
    case 'Tiktok':
      return <Tiktok />
    case 'Twitter':
      return <Twitter />
    default:
      return <></>
  }
}

export default function Item({
  icon,
  onClick
}) {
  return <button onClick={onClick}>
    <GetIcon {...{ icon }} />
  </button>;
}