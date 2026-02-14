import { type ComponentType } from 'react';
import { 
  Mic, PenTool, Table, Database, DatabaseBackup, Cloud, 
  Code, Zap, FileCode, Atom, Network, Box, Binary, 
  BrainCircuit, CircleDollarSign, Bot, Users, Book,
  Hash, Server, Layers, Blocks
} from 'lucide-react';

export const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Mic, PenTool, Table, Database, DatabaseBackup, Cloud, 
  Code, Zap, FileCode, Atom, Network, Box, Binary, 
  BrainCircuit, CircleDollarSign, Bot, Users, Book,
  Hash, Server, Layers, Blocks
};
