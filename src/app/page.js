require("dotenv").config();

import { GoldRushProvider } from "@covalenthq/goldrush-kit"


export default function Home() {
  return (
    <GoldRushProvider apikey={process.env.APP_API_KEY}>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">

      </main>
    </GoldRushProvider>
  );
}

// 1. import and add desired GoldRush view components into the wrapper.
// 2. Start customizing!
//   - input fields for variables
//     - styling
//     - specific use cases
//   - new components