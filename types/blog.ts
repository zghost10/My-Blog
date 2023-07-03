export interface IPage {
  frontmatter: {
    title: string;
    description: string;
    modified: Date;
    created: Date;
  }
  content: string;
  slug: string
}

export interface IPost {
  frontmatter: {
    title: string;
    description: string;
    category: string;
    modified: Date;
    created: Date;
  }
  content: string;
  slug: string
}