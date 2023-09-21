import Feed from '@components/feed'

const Home = () => {
  return (
    <section className="w-full flex-col flex-center">
      <h1 className="head_text text-center">
        Discover & Share&nbsp;
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          AI-Powered Prompts
        </span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet consectetur bitis numquam minima minus! Doloremque doloribus praesentium cupiditate. Lorem ipsum dolor sit amet consectetur.
      </p>

      <Feed />
    </section>
  )
}

export default Home