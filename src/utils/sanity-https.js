import sanityClient from "./sanityClient";

export const getBlogs = async () => {
  const res = await sanityClient.fetch(`*[ _type=="post" ]{
        title,
        _id,
        slug
         {current}
          ,
        author -> {name, image{
          asset->{url}
        }},
        categories[]-> {title},
        mainImage{
          asset-> {url},
        },
        publishedAt
      }`);

  // if (!res.ok) {
  //   throw new Error({ message: "Failed to get blogs" });
  // }
  // const res = await sanityClient.fetch(`*[ _type=="post" ]`);
  return res;
};

export const getSingleBlog = async (id) => {
  const res = await sanityClient.fetch(`*[_id=="${id}"]{
    title, 
    body,
    author -> {name, image{
      asset->{url}
    }},
    mainImage{
      asset-> {url},
    },
    publishedAt



  }`);
  return res;
};
