import Link from "next/link";
import { Container, Divider } from "../common";

export default function ZipCodes({ data }) {
  return (
    <Container className="bg-primary py-16 lg:p-20 mt-16">
      <div className="flex flex-col items-center w-10/12 lg:w-9/12 text-white">
        <h1 className="text-2xl font-semibold uppercase">{data.title}</h1>
        <Divider className="bg-white" />
        <div className="mt-8 w-full grid grid-cols-2 lg:grid-cols-6 gap-2">
          {data.items.map((item, index) => (
            <Link
              key={index}
              className="rounded-md p-2 border border-gray-50/25 font-medium hover:bg-blue-500 text-sm transition-all"
              href={item.path}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
