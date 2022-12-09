import Link from "next/link";
import { getSortedPostsData } from "../../lib/posts";
import Safety from "../../components/Safety";

type Post = {
  id: string;
  data: {
    title: string;
  };
};

export default function Posts({ posts }: { posts: Post[] }) {
  return (
    <>
      <div>
        <div className="flex justify-start items-center bg-no-repeat bg-cover bg-[url(https://ixbt.online/live/images/original/27/49/59/2022/08/20/83e6e1480d.jpg)] h-[60vh]">
          <h1 className="text-5xl font-bold text-white py-5 px-10 bg-blue-900">
            ШОЙЫН ӨНДІРІСІ <br /> МӘСЕЛЕЛЕРІ
          </h1>
        </div>
      </div>
      <Safety />
      <div className="flex flex-col items-center py-5">
        <h1 className="font-bold text-4xl my-4 border-b-orange-400 border-b-4 max-w-max">
          ЖАҒЫМСЫЗ ӘСЕР
        </h1>
        <div className="grid grid-cols-2 gap-10">
          {posts &&
            posts.map(({ id, data }) => (
              <Link key={id} href={`/posts/${id}`}>
                <div className="my-2 p-4 duration-500 hover:bg-gray-300 bg-gray-100 rounded-md text-center">
                  <h1 className="text-2xl font-bold">{data.title}</h1>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}

export const getStaticProps = () => {
  return {
    props: { posts: getSortedPostsData() },
  };
};
