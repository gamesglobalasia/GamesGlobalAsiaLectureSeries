export interface RsvpRecord {
  id: string;
  name: string;
  email: string;
  affiliation: string;
  scholarStatus: string;
  interests: string[];
  notifyCfp: boolean;
  createdAt: string;
}

export interface AsianGame {
  id: string;
  name: string;
  nativeName: string;
  origin: string;
  type: 'board' | 'card' | 'tile' | 'physical' | 'digital';
  description: string;
  history: string;
  culturalSignificance: string;
}

export interface LectureSession {
  id: string;
  monthName: string;
  dateString: string;
  speaker: string;
  affiliation: string;
  topic: string;
  status: 'upcoming' | 'completed' | 'tba';
}
