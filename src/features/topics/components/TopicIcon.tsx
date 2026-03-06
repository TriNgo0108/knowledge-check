import { memo } from "react";
import { Book } from "lucide-react";
import { iconMap } from "@constants/topicIcons";

interface TopicIconProps {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}

function TopicIcon({ name, className, style }: TopicIconProps) {
  const Icon = iconMap[name] || Book;
  return <Icon className={className} style={style} />;
}

export default memo(TopicIcon);
