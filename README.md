# Next Template

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Monorepo using:

### UI
TailwindCSS
Shadcn

### Auth
Clerk

### Database
Supabase
Prisma

### Installing Prisma

Install Prisma and the Prisma client:

```bash
npm install prisma @prisma/client --save-dev
```

Initialize Prisma:

```bash
npx prisma init
```

Set the following environment variables in your `.env` file:

```makefile
DATABASE_URL=your_database_url
DIRECT_URL=your_direct_url
```

Refer to the Prisma Integration with Supabase for more information.

### Updating the Schema

Run the initial migration after updating your schema:

```bash
npx prisma migrate dev --name init
```

Prisma reference [https://supabase.com/partners/integrations/prisma](https://supabase.com/partners/integrations/prisma)