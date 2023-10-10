import Feed from '../components/Feed';

export default function MostViewed() {
  const posts = [
    {
      id: Math.random(),
      content: 'content',
      userName: 'Mateus',
      publishedAt: new Date(),
    },
  ];

  return (
    <main className="most-viewed">
      <Feed
        posts={posts}
        title="Mais vistos"
        subtitle="Acompanhe os assuntos mais comentados no momento e fique por dentro de qualquer novidade"
      />
    </main>
  );
}
