import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

async function main() {
  await db.post.create({
    data: {
      slug: 'hello-bhupal',
      title: 'Hello from Bhupal!',
      excerpt: 'My first post — saved on my Mac.',
      content: `# Welcome to My Blog!\n\nThis is **100% local**.\n\n- No cloud\n- No cost\n- Full control\n\nI built this from scratch.`,
      published: true,
    },
  });
  console.log('Post created successfully!');
}

main()
  .catch(e => console.error('Error:', e))
  .finally(async () => await db.$disconnect());