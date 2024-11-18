import { tracks, coursesByTrack, modulesByCourse, lessonsByModule } from '@/lib/constants';

export type TypeOptions = 'learn' | 'track' | 'course' | 'module' | 'lesson';

export type DataType =
  | (typeof tracks)[number]
  | (typeof coursesByTrack)[number]
  | (typeof modulesByCourse)[number]
  | (typeof lessonsByModule)[number];

export type DataTypeMap = {
  learn: (typeof tracks)[number];
  track: (typeof tracks)[number];
  course: (typeof coursesByTrack)[number];
  module: (typeof modulesByCourse)[number];
  lesson: (typeof lessonsByModule)[number];
};

export type CardListProps = {
  type?: TypeOptions;
  items: DataTypeMap[TypeOptions][];
};
