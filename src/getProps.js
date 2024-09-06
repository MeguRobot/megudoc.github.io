export async function getStaticProps() {
    const postsDirectory = path.join(process.cwd(), 'posts');
    const filenames = fs.readdirSync(postsDirectory);
  
    return {
      props: {
        filenames,
      },
    };
  }