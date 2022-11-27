import React from "react";
import { CallLink, Container } from "../common";

export default function Choice({ contact }) {
  return (
    <Container>
      <div className="w-10/12 lg:w-9/12 py-16 text-center flex flex-col items-center">
        <div className="w-10/12">
          <p className="text-center">
            <b>Los Angeles Towing Services </b> provides vehicle transportation
            and roadside assistance all over the L-A County. Battery jump, tire
            change, car lockout and more! We started as a tiny business in
            suburbs of L-A. Months went by and over the years, more and more
            drivers and independent contractors were hired to work for us and
            cover more areas. Later during the decade we've become to a very
            familiar company in L-A because of our abilities, prices and the
            excellent service. Our drivers scattered all the town, and are ready
            for you at any moment, in any provided circumstances. Call us at
            888-866-7379 for a free quotes and estimates.
          </p>
          <div className="grid lg:grid-cols-2 gap-5 my-10 ">
            <button className="btnPrimary">Click Here For Help</button>
            <button className="btnPrimary">
              Para Español, Haga Clic Aquí{" "}
            </button>
          </div>
        </div>
        <div className="p-10 bg-blue-50 text-primary w-full">
          <h1 className="text-2xl font-bold">
            Your #1 Choice for Roadside Assistance in Los Angeles
          </h1>
        </div>
        <div className="flex items-center mt-8 justify-center flex-col">
          <h1 className="text-xl font-medium text-primary">
            How much does a tow cost?
          </h1>
          <p className="mt-3">
            In order to give you an accurate quote, we will ask you a few basic
            questions over the phone. You are in an emergency, so that
            conversation won't take over a minute. The first question that will
            help us giving you a price, is the current vehicle location and tow
            destination, to determine the exact distance. The second question is
            about the vehicle make and model. The price may vary according to
            the size of the car. The third and last question is about the
            vehicle condition and what is wrong with it. Why do you want to tow
            it? If it's a physical car damage or a mechanical issue. There may
            be further questions to understand and evaluate the situation better
            over the phone.
          </p>
          <br />
          <p>
            We are providing roadside assistance on every street of Los Angeles
            and surrounding areas. Our drivers are available 24 hours 7 days a
            week, including all holidays and weekends. There is no task that can
            not be accomplish. So save our number for your future needs.{" "}
          </p>
          <br />
          <CallLink data={contact} />
        </div>
      </div>
    </Container>
  );
}