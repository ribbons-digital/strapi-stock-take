<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import type { QueryProductsQuery } from "../graphql/generated-types";
import { QueryProducts } from "../graphql/generated-types";

const { result, loading } = useQuery<QueryProductsQuery>(QueryProducts);
</script>

<template>
  <div v-if="loading">Loading...</div>
  <main v-else-if="result?.products && result.products.data">
    <div class="text-xl text-yellow-500">
      <ul>
        <li
          v-for="product in result.products.data"
          :key="(product.id as string)"
        >
          {{ product.attributes?.name }}
        </li>
      </ul>
    </div>
  </main>
</template>
