import { learnData } from ".";
import { LearnPostCard } from "../../components/Card";

export const Learn = () => {
  return (
    <div className="p-2  space-y-4 ">
      <div className="max-w-7xl mx-auto">
        <img src="/magazine_cover.jpg" alt="learn-page-cover" />
      </div>
      <h2 className="text-xl text-center  border-b-[1px] py-3 border-secondaryDark">
        آموزش
      </h2>
      <div className="max-w-7xl mx-auto py-6 space-y-4">
        {learnData.map((post) => (
          <LearnPostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};
