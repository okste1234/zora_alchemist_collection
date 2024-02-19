// "use client"
// // require("dotenv").config();
// import "@covalenthq/goldrush-kit/styles.css";


// import { GoldRushProvider } from "@covalenthq/goldrush-kit"
import GoldRushExample from "./Sample";


export default function Home() {
  return (
    <main className="">
      <GoldRushExample />
      {/* <GoldRushProvider apikey={process.env.APP_API_KEY}> */}
      {/* <h3>Hello, oo</h3> */}
      {/* </GoldRushProvider> */}
    </main>
  );
}

// 1. import and add desired GoldRush view components into the wrapper.
// 2. Start customizing!
//   - input fields for variables
//     - styling
//     - specific use cases
//   - new components