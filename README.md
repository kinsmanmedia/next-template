# Next Template

A custom Next.js template featuring TypeScript, React, Shadcn UI, Radix UI, Tailwind CSS, and more. This monorepo includes feature branches for authentication, payments, and database integrations.

## Project Structure
```lua
.
├── README.md
├── app
│   ├── dashboard
│   │   ├── admin
│   │   │   └── page.tsx
│   │   ├── page.tsx
│   │   └── user
│   │       └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── lib
│   │   └── db.ts
│   ├── packages
│   │   └── auth-clerk
│   └── page.tsx
├── components
├── lib
├── middleware.ts
├── prisma
│   └── schema.prisma
├── public
├── tailwind.config.ts
└── tsconfig.json
```

## Features
- **UI**: Tailwind CSS, Shadcn UI, Radix UI
- **Authentication**: Clerk
- **Database**: Supabase, Prisma
- **Payments**: Stripe
- **CMS**: Sanity

## Configuration

### Prisma Setup
Install Prisma and the Prisma client:

```bash
npm install prisma @prisma/client --save-dev
```

Initialize Prisma:

```bash
npx prisma init
```

Set the following environment variables in your `.env` file:

```env
DATABASE_URL=your_database_url
DIRECT_URL=your_direct_url
```

Refer to the [Prisma Integration with Supabase](https://www.prisma.io/docs/guides/database/integrations/with-supabase) for more information.

### Updating the Schema
Run the initial migration after updating your schema:

```bash
npx prisma migrate dev --name init
```

## Getting Started
Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/next-template.git
cd next-template
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Supabase Documentation](https://supabase.io/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Clerk Documentation](https://clerk.dev/docs)
- [Stripe Documentation](https://stripe.com/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Shadcn UI Documentation](https://shadcn.dev/docs)

## License
This project is licensed under the MIT License. See the LICENSE file for details.

### MIT License

```
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
