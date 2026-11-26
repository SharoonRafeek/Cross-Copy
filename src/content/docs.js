import docsData from "./docs.json";

export const docs = docsData;

export const docsBySlug = docs.reduce((acc, article) => {
  acc[article.slug] = article;
  return acc;
}, {});
