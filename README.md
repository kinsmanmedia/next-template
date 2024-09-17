# Next Template

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Monorepo using:

TailwindCSS
Shadcn
Clerk
Supabase
Prisma
Stripe
Resend?

## Supabase and GraphQL Integration

This project uses Supabase for database interactions and real-time subscriptions, and GraphQL with Genql for type-safe API interactions.

### Setup

1. Set up a Supabase project and add the URL and anon key to the `.env` file.
2. Set up a GraphQL endpoint (you can use Supabase's PostgREST API as a GraphQL endpoint with a tool like Postgraphile) and add it to the `.env` file.
3. Run `npm run generate` to generate the Genql client from the GraphQL schema.

### Usage

- Use the `supabase` client from `@/packages/supabase-db/supabaseClient` for Supabase interactions.
- Use the `graphqlClient` from `@/packages/graphql/client` for GraphQL queries and mutations.

See the `/test/supabase-graphql` route for an example of how to use both Supabase and GraphQL in a component.