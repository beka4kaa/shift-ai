export interface Activity {
  time: string;
  title: string;
}

export interface ScheduleDay {
  id: number;
  day: string;
  date: string;
  title: string;
  description: string;
  highlighted: boolean;
  activities: Activity[];
}
