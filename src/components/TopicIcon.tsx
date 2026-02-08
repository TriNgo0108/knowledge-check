import { memo } from 'react';
import { Book } from 'lucide-react';
import { iconMap } from '@constants/topicIcons';

interface TopicIconProps {
  name: string;
  className?: string;
}

function TopicIcon({ name, className }: TopicIconProps) {
  const Icon = iconMap[name] || Book;
  return <Icon className={className} />;
}

export default memo(TopicIcon);
