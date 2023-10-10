The task was done on December, 2022

# Some company name (NDA) front-end test 

This is the technical test for your front-end application at Some company name (NDA). You are evaluated on your React knowledge, how you structure your code and the quality of the interface you are develop.

You are free to add any package you need (helpers, UI library, date formatter, http client, etc...)

For each instruction you decide on how the interface should look like.

## How to submit

- Fork the repository
- Create a branch `submission`
- Create a pull request to `master` on your forked repository

## Instructions

### Doctors availabilities page

- Create a page `/availabilities` to display the list of doctors and their availabilities.
  - Fetch doctors and display the list of doctors.
  - Fetch each doctors' availabilities and display them as soon as available.
- User should then be able to select an availability to book with a doctor.
  - Allow a user to schedule a booking.
  - When a user schedules a booking, redirect to a page `/bookings` where you display as much information as possible

### API endpoints

- `GET https://tech-test.some_company_name.dev/api/doctors`
- `GET https://tech-test.some_company_name.dev/api/availabilities?doctorId={DOCTOR_ID}`
- `POST https://tech-test.some_company_name.dev/api/bookings`
  - Body :
    - `date` DateTime of the booking `Y-m-d H:m:s`
    - `doctorId` Doctor's id

## Bonus

- Testing
- Typescript
- Elegant interface

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
