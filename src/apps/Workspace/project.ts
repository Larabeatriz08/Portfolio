export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  github: string;
  demo?: string;
  technologies: string[];
  features: string[];
}