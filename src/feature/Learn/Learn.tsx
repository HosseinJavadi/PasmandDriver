import { LearnPostCard } from "../../components/Card";

export const Learn = () => {
  return (
    <div className="p-2  space-y-4 ">
      <div className="max-w-7xl mx-auto">
        <img src="/magazine_cover.jpg" />
      </div>
      <h2 className="text-xl text-center  border-b-[1px] py-3 border-secondaryDark">
        آموزش
      </h2>
      <div className="max-w-7xl mx-auto py-6 space-y-4">
        {Array(10)
          .fill({
            imgSrc: "/blog-post.jpg",
            title: "تفکیک پسماندها",
            text: "طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از روی کار اصلی برداشته میشود و اینکار زمان بر خواهد بود. همچنین طراح به دنبال این است که پس از ارایه کار نظر دیگران را در مورد طراحی جویا شود و نمی‌خواهد افراد روی متن های موجود تمرکز کنند.",
          })
          .map((post, index) => (
            <LearnPostCard key={index} {...post} />
          ))}
      </div>
    </div>
  );
};
