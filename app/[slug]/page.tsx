import { Container } from "@/components/container";
import { getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from 'next/link';

interface IPostProps {
  params: {
    slug: string;
  }
}

export const Post: React.FC<IPostProps> = async ({params}) => {
  const post = await getPostBySlug(params.slug);

  if(post){
    const { frontmatter, content } = post;
  
    return <>
      <title>{`${frontmatter?.title} - Blog`}</title>
  
      <Container>
        <article className="prose lg:prose-xl dark:prose-invert">
          <h3>{frontmatter?.title}</h3>

          <MDXRemote source={content}/> 
        </article>
      </Container>
    </>
  }else{
    return <>
      <title>Post not found! - Blog</title>

      <Container>
        <article className="prose lg:prose-xl dark:prose-invert">
          <h3>404 - Post not found!</h3>

          Try to write the post slug correctly or go to <Link href="/">blog home</Link> instead.
        </article>
      </Container>
    </>
  }
}
export default Post;