# Bnstats

This is a app to retrieve Stacks BNS username expiration date.

The app can be accessed [here](https://bnstats.vercel.app/).

## Local Development

Install the dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Roadmap

- [ ] Check the block time value
- [ ] Improve the UI
- [ ] Sanitize the input
- [ ] Check if user is already signed in
- [x] Fix: when reloading the page the username is not set to existing one
- [ ] Display all the previous owners of the Stacks id
- [x] Login with the Hiro wallet extension and username is being fetched directly from there
