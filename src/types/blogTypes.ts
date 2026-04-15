export interface BlogsType {
  id: string | number;
  title: string;
  content: string;
  thumbnail?: string | null;
  isFeatured: Boolean;
  tags: string[];
  views: number;
  authorId: String;
  _count?: {
    comment: number;
  };
}
