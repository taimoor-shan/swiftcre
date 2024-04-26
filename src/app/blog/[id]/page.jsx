import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { MDXComponents } from '@/components/MDXComponents'

import { formatDate } from '@/lib/formatDate'

async function getPost(id) {
  const api = await fetch(
    `${process.env.ADMIN_URL}/api/collections/blogs/records/${id}`,
    {
      cache: 'no-cache',
    }
  )
  const data = await api.json()

  return data
}

export default async function BlogArticleWrapper({ children }) {
  const article = await getPost()
  return (
    <>
      <Container as="article" className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <header className="mx-auto flex max-w-5xl flex-col text-center">
            <>
              <h1 className="mt-6 font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
                {article.title}
              </h1>
              {/* <time
                  dateTime={article.created}
                  className="order-first text-sm text-neutral-950"
                >
                  {formatDate(article.created)}
                </time> */}
            </>
          </header>
        </FadeIn>

        <FadeIn>
          {/* <MDXComponents.wrapper className="mt-24 sm:mt-32 lg:mt-40">
            {children}
          </MDXComponents.wrapper> */}
        </FadeIn>
      </Container>

      {/* Render additional components (e.g., related articles) if needed */}
    </>
  )
}
