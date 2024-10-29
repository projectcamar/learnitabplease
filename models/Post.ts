export interface Post {
  _id: string;
  title: string;
  category: string;
  image?: string;
  body?: string | string[];
  deadline?: string;
  location?: string;
  link: string;
  prize?: string;
  eligibility?: string;
  labels: {
    Company?: string;
    Organization?: string;
    'Mentoring Topic'?: string[];
    Position?: string;
    Status?: string;
    [key: string]: any;
  };
  requirements?: string[];
  responsibilities?: string[];
  experience?: string[];
  education?: string[];
  email?: string;
  phone?: string;
  linkedin?: string;
  instagram?: string;
  expertise?: string[];
  status?: string;
  applicationDeadline?: string;
  startDate?: string;
  duration?: string;
  stipend?: string;
  workLocation?: string;
  workType?: string;
  expired: boolean;
  daysLeft?: number;
  details?: string;
  topics?: string[];
}
  
 