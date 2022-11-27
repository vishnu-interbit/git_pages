import "../styles/globals.css";
import { getPageData } from "./api";
import PageGenerator from "./generator/PageGenerator";

const Page = async () => {
  const data = await getPageData({ type: "home" });
  return <PageGenerator data={data} />;
};

export default Page;