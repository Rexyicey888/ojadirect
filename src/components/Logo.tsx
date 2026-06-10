import { Icon } from "./Icon";

export function Logo() {
  return (
    <a className="logo" href="#top" aria-label="AgriLink home">
      <span className="logo__mark">
        <Icon name="leaf" size={20} strokeWidth={2.2} />
      </span>
      <span>
        Agri<span>Link</span>
      </span>
    </a>
  );
}
