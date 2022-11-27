import { getPageData } from "../api";
import { Banner } from "../components/containers";

const Page = async () => {
  const data = await getPageData({ type: "contact" });
  const services = await getPageData({ type: "home" });

  return (
    <>
      <Banner data={services} />
    </>
  );
};

export default Page;
