import { getAllPostsIds, getPostData } from "../../lib/posts";

type PostProps = {
  postData: {
    data: { title: string;};
    contentHtml: string;
  };
};

export default function Post({ postData }: PostProps) {
  return (
    <>
      <h1 className="text-center font-extrabold mt-5 text-4xl">
        {postData.data.title}
      </h1>
      <div
        className="post mb-7"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </>
  );
}

export const getStaticPaths = async () => {
  const paths = getAllPostsIds();
  return { paths, fallback: false };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const postData = await getPostData(params.id);
  return {
    props: { postData },
  };
};