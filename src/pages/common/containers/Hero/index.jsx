import Container from "../../components/Container";
import React from "react";

const index = () => {
  return (
    // HERO SECTION
    <section className="w-full relative  max-h-fit pt-32">
      <img
        src="/Fill 1.svg"
        className="-z-10 absolute top-0  sm:bottom-0 sm:left-0"
      />
      <Container explicitClassName="flex items-start gap-5 flex-col sm:flex-row justify-evenly">
        <div className="p-5 mt-10 m-auto flex gap-5 flex-col">
          {/* H2 HEADING */}
          <h2 className="text-3xl">
            The smarter way <br /> <strong>to order your food</strong>
          </h2>
          {/* FORM DIV */}
          <div className="flex items-center justify-between">
            <input type="text" placeholder="Enter Number" />
            <button>Send</button>
          </div>
          {/* SOCIAL ICONS */}
          <div>
            <small className="text-sm">Available on</small>
            {/* APPLE ICON */}
            <div className="flex items-start gap-4">
              <img src="/Apple.svg" alt="" />
              <img src="/Googleplay.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="m-auto">
          <img src="/iPhone_Black.png" alt="#" className="h-96" />
        </div>
      </Container>
    </section>
  );
};

export default index;
