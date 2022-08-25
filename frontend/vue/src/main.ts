import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { createApp, h, provide } from "vue";
import App from "./App.vue";
import router from "./router";

import { createVuesticEssential, VaButton } from "vuestic-ui";
import "./assets/main.css";

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: "http://localhost:1337/graphql",
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});

app.use(router);

app.use(createVuesticEssential({ components: { VaButton } }));
app.mount("#app");
