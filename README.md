# Bnstats

This is a app to retrieve Stacks BNS username expiration date.

The app can be accessed [here](https://bnstats.vercel.app/).

## Workflow

How I created this project step by step.

### Stacks Blockchain API

#### Names Endpoints

I started to study the [stacks blockchain API](https://hirosystems.github.io/stacks-blockchain-api).
The [Names details endpoint](https://hirosystems.github.io/stacks-blockchain-api/#operation/get_name_info) has an `expire_block` field that seems to indicate the expiration date of the domain name.
I sent some requests and noticed that `expire_block` is always equal to 0 for domain name into the btc namespace.

#### Smart Contracts Endpoints

I ended up calling the [smart contract function](https://hirosystems.github.io/stacks-blockchain-api/#operation/call_read_only_function) directly to get the expiration block info.
The arguments of the function has to be in Clarity format. Thus I decided to use the [stacks transactions package](https://www.npmjs.com/package/@stacks/transactions) to do the call.
There is also an [API client](https://www.npmjs.com/package/@stacks/blockchain-api-client) or [BNS specific wrapper](https://www.npmjs.com/package/@stacks/bns) available. But as the transactions package documentation has an example of our use case, I decided to use it instead of the API client.

#### Expire Block

To convert the `expire_block` value to an human readable time, we need to apply the [formula](https://bitcoin.stackexchange.com/questions/93919/how-to-create-block-height-to-unix-time-converter):
`FIRST_BLOCK_TIME + expire_block * BLOCK_TIME * 1000`.
The network block time can be found with the [stacks blockchain API](https://hirosystems.github.io/stacks-blockchain-api/#operation/get_network_block_times). From the documentation, this value can change over time, but the purpose of this exercice, I hardcoded the given value for the mainnet. Before rolling out a production app, we will add the call to be sure of the blocktime value.

### Stack

I used [Next.js](https://nextjs.org) because Sigle use it and I'm comfortable with it.

## Notes

I spent 5h30 on it.
The hardest task was to figure out an alternative solution to the Stack API names endpoints.
And then to build the right request to get the expiration date and to convert it to a readable date.

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
- [ ] Fix: when reloading the page the username is not set to existing one
- [ ] Display all the previous owners of the Stacks id
- [ ] Login with the Hiro wallet extension and username is being fetched directly from there
