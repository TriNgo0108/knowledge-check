import { Topic, TopicCategory } from '@/data/types';

export const allTopics: Topic[] = [
  { id: 'pronunciation', title: 'Pronunciation', icon: 'Mic', color: 'hsl(280, 70%, 60%)' },
  { id: 'grammar', title: 'Grammar', icon: 'PenTool', color: 'hsl(160, 70%, 45%)' },
  { id: 'pandas', title: 'Pandas', icon: 'Table', color: 'hsl(200, 70%, 50%)' },
  { id: 'sql', title: 'SQL', icon: 'Database', color: 'hsl(30, 80%, 60%)' },
  { id: 'postgres', title: 'PostgreSQL', icon: 'DatabaseBackup', color: 'hsl(220, 70%, 60%)' },
  { id: 'aws', title: 'AWS', icon: 'Cloud', color: 'hsl(35, 100%, 50%)' },
  { id: 'python', title: 'Python', icon: 'Code', color: 'hsl(55, 70%, 50%)' },
  { id: 'javascript', title: 'JavaScript', icon: 'Zap', color: 'hsl(50, 90%, 55%)' },
  { id: 'typescript', title: 'TypeScript', icon: 'FileCode', color: 'hsl(210, 80%, 55%)' },
  { id: 'react', title: 'React', icon: 'Atom', color: 'hsl(190, 90%, 55%)' },
  { id: 'systemdesign', title: 'System Design', icon: 'Network', color: 'hsl(340, 70%, 55%)' },
  { id: 'designpatterns', title: 'Design Patterns', icon: 'Box', color: 'hsl(270, 60%, 55%)' },
  { id: 'algorithms', title: 'Algorithms', icon: 'Binary', color: 'hsl(140, 60%, 45%)' },
  { id: 'aiagents', title: 'AI Agents', icon: 'BrainCircuit', color: 'hsl(180, 70%, 45%)' },
  { id: 'financial', title: 'Financial Literacy', icon: 'CircleDollarSign', color: 'hsl(120, 70%, 40%)' },
  { id: 'aiengineer', title: 'AI Engineer', icon: 'Bot', color: 'hsl(250, 70%, 60%)' },
  { id: 'interview', title: 'Tech Interview', icon: 'Users', color: 'hsl(0, 70%, 60%)' },
  { id: 'csharp', title: 'C#', icon: 'Hash', color: 'hsl(265, 70%, 55%)' },
  { id: 'dotnet', title: '.NET', icon: 'Server', color: 'hsl(260, 60%, 50%)' },
  { id: 'dapper', title: 'Dapper', icon: 'Layers', color: 'hsl(25, 70%, 55%)' },
  { id: 'entityframework', title: 'Entity Framework', icon: 'Blocks', color: 'hsl(310, 60%, 50%)' },
  { id: 'terraform', title: 'Terraform', icon: 'ServerCog', color: 'hsl(260, 80%, 60%)' },
  { id: 'pulumi', title: 'Pulumi', icon: 'CloudLightning', color: 'hsl(280, 80%, 60%)' },
];

export const categories: TopicCategory[] = [
  {
    name: 'Programming Languages',
    icon: '💻',
    topics: allTopics.filter(t => ['python', 'javascript', 'typescript', 'csharp'].includes(t.id))
  },
  {
    name: 'Frameworks & Libraries',
    icon: '⚛️',
    topics: allTopics.filter(t => ['react', 'pandas', 'dotnet', 'dapper', 'entityframework'].includes(t.id))
  },
  {
    name: 'Databases',
    icon: '🗄️',
    topics: allTopics.filter(t => ['sql', 'postgres'].includes(t.id))
  },
  {
    name: 'Architecture & Patterns',
    icon: '🏗️',
    topics: allTopics.filter(t => ['systemdesign', 'designpatterns', 'algorithms'].includes(t.id))
  },
  {
    name: 'Cloud & Infrastructure',
    icon: '☁️',
    topics: allTopics.filter(t => ['aws', 'terraform', 'pulumi'].includes(t.id))
  },
  {
    name: 'Career & Growth',
    icon: '🚀',
    topics: allTopics.filter(t => ['financial', 'interview'].includes(t.id))
  },
  {
    name: 'AI Engineering',
    icon: '🤖',
    topics: allTopics.filter(t => ['aiagents', 'aiengineer'].includes(t.id))
  },
  {
    name: 'English Skills',
    icon: '📚',
    topics: allTopics.filter(t => ['pronunciation', 'grammar'].includes(t.id))
  },
];
