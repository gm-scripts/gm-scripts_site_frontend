interface BlogPostObj {
  name: string;
  path: string;
  author: "Gabriel" | "Michael";
  releaseDate: Date;
  description: string;
}

const blogPostRegistry: BlogPostObj[] = [
  {
    name: "foo",
    path: "/demo",
    author: "Gabriel",
    releaseDate: new Date(),
    description: "This is a test blog!",
  },
];

export default blogPostRegistry;
