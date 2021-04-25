export interface BlogLinkInterface {
  name: string;
  path: string;
  author: "Gabriel" | "Michael";
  releaseDate: Date;
  description: string;
}

export const bpRegistry: BlogLinkInterface[] = [
  {
    name: "foo",
    path: "/demo",
    author: "Gabriel",
    releaseDate: new Date(),
    description:
      "This is a test blog! here a description can be put, which briefly explains the Content of the blog entry.",
  },
  {
    name: "bar",
    path: "/demo-b",
    author: "Michael",
    releaseDate: new Date("2019-05-20"),
    description:
      "This is a test blog! here a description can be put, which briefly explains the Content of the blog entry.",
  },
];
