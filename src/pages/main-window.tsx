import { GetStaticProps, NextPage } from 'next'

type HeroApiType = {
  heroApi: any
}

const MainWindow: NextPage = ({ heroApi }: any) => {
  return <h1>MainWindow</h1>
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json'
  )
  const heroApi = await res.json()

  return {
    props: {
      heroApi,
    },
  }
}
