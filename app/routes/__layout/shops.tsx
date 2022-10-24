import type { DataFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { serverError } from "remix-utils";
import { getShops } from "~/models/mdp";
import type { components } from "~/models/openapi/masterdataprovider";

export const loader = async (args: DataFunctionArgs) => {
  const response = await getShops({ searchKey: "demo" });

  if (!response?.ok) {
    throw serverError({ message: "Error fetching shops" });
  }

  return response.data as components["schemas"]["Shop"][];
};

function Shops() {
  const shops = useLoaderData<typeof loader>();
  return <div>{JSON.stringify(shops, null, 2)}</div>;
}

export default Shops;
