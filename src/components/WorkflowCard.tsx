import { Icon, type IconName } from "./Icon";

interface WorkflowCardProps {
  number: string;
  icon: IconName;
  title: string;
  text: string;
}

export function WorkflowCard({ number, icon, title, text }: WorkflowCardProps) {
  return (
    <article className="workflow-card">
      <span className="workflow-card__number">{number}</span>
      <span className="workflow-card__icon">
        <Icon name={icon} size={30} />
      </span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
