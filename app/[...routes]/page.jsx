import "../../styles/globals.css";
import { getPageData } from "../api";
import { notFound } from "next/navigation";
import PageGenerator from "../generator/PageGenerator";

export const dynamicParams = true;

const Page = async ({ params }) => {
  try {
    const { routes } = params;
    let requestParams = {};

    if (routes.length === 1) {
      const [route] = routes;
      if (/^\d+$/.test(route)) {
        requestParams.type = "zip";
        requestParams.zip = route;
      } else if (/(\w+)-(\w)([\w-]*)/.test(route)) {
        requestParams.type = "service";
        requestParams.service = route;
      } else {
        notFound();
      }
    } else if (
      routes.length === 2 &&
      /^\d+$/.test(routes[0]) &&
      /(\w+)-(\w)([\w-]*)/.test(routes[1])
    ) {
      const [zip, service] = routes;
      requestParams.type = "zip";
      requestParams.zip = zip;
      requestParams.service = service;
    } else {
      notFound();
    }
    const data = await getPageData(requestParams);
    if (!data || !!data.response) {
      notFound();
    }
    return <PageGenerator data={data} params={params} />;
  } catch (err) {
    notFound();
  }
};

export default Page;
