import { BookCard } from "@/components/book-card";
import Comments from "@/components/comments/comments";
import RichEditorViewer from "@/components/rich-editor/rich-editor-viewer";
import { getArticleDetail } from "@/lib/apis/article/retrieveSingleArticle";
import { getMyProfile } from "@/lib/apis/profile/myProfile";

interface Props {
  params: { id: string };
}

async function ReviewDetail({ params: { id } }: Props) {
  const [article, profile] = await Promise.all([
    getArticleDetail(id),
    getMyProfile(),
  ]);

  return (
    <div className="mt-8 flex flex-col gap-8">
      <h2 className="font-bold text-lg">{article.title}</h2>
      <BookCard
        title={article.book.title}
        image={article.book.thumbnail_url}
        author={article.book.author}
        description={article.book.description}
      />
      {/* FIXME: 에디터 뷰어로 출력 */}
      <RichEditorViewer content={JSON.parse(article.body)} />
      <Comments
        articleId={id}
        isUser={Boolean(profile)}
      />
    </div>
  );
}

export default ReviewDetail;
