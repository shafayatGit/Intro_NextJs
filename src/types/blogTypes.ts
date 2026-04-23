import { StatusType } from "./statusType";

export interface BlogsType {
  id: string | number;
  title: string;
  content: string;
  thumbnail?: string | null;
  isFeatured: Boolean;
  status: StatusType;
  tags: string[];
  views: number;
  authorId: String;
  _count?: {
    comment: number;
  };
}

// {
            //     "id": "7d5bed26-9c8e-4d1d-930a-76dfc2069a3a",
            //     "title": "Creating post 2",
            //     "content": "this is content 2",
            //     "thumbnail": null,
            //     "isFeatured": false,
            //     "status": "PUBLISHED",
            //     "tags": [
            //         "web",
            //         "learing",
            //         "king",
            //         "new"
            //     ],
            //     "views": 0,
            //     "authorId": "7N5jAcDFbrEGqsGv4hNDT0je5fK71jXH",
            //     "createdAt": "2026-04-14T16:30:29.986Z",
            //     "updatedAt": "2026-04-14T16:30:29.986Z",
            //     "_count": {
            //         "comments": 0
            //     }
            // },