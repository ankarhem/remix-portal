import { Fetcher } from "openapi-typescript-fetch";
import type { paths } from "~/models/openapi/masterdataprovider";

const baseUrl = "https://masterdataprovider.test.jetshop.se";

// declare fetcher for paths
const fetcher = Fetcher.for<paths>();

// fetcher is now a type-safe wrapper around fetch
fetcher.configure({
  baseUrl: baseUrl,
  init: {
    headers: {
      // what to do about correlation id?
      accept: "*/*",
      "x-shopid": "JS000000-1337",
      "x-correlationid": "ac36be14-efaf-4b29-8301-50a42a1a202f",
      "user-agent": "testClient/1.0+JetShop",
    },
  },
});

export const getShops = fetcher.path("/v2/Shops").method("get").create();
