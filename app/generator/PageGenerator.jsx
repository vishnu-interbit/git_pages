import {
  Aboutus,
  Banner,
  Choice,
  ContactForm,
  FeaturedOn,
  Footer,
  Process,
  Reviews,
  Services,
  WhyUs,
  Zips,
} from "../components/containers";

export default function PageGenerator({ data, params }) {
  return (
    <div className="flex items-center flex-col text-center">
      <Banner data={data} />
      <Choice contact={data.contact} />
      <WhyUs contact={data.contact} />
      <Services data={data.allServices} params={params} />
      <Zips data={data.zips} />
      <Aboutus data={data.about} />
      <FeaturedOn />
      <Reviews data={data.reviews} />
      <ContactForm data={data.form} />
      <Process data={data.contact} />
      <Footer
        data={data.footer}
        contact={data.contact}
        brand={data.header.navbar.brand}
        params={params}
      />
    </div>
  );
}
