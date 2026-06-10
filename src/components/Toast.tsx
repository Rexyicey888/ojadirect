import { Icon } from "./Icon";

interface ToastProps {
  message: string;
  onClose: () => void;
}

export function Toast({ message, onClose }: ToastProps) {
  return (
    <div className="toast" role="status">
      <span>
        <Icon name="check" size={22} />
      </span>
      <p>{message}</p>
      <button type="button" aria-label="Dismiss notification" onClick={onClose}>
        <Icon name="x" size={18} />
      </button>
    </div>
  );
}
