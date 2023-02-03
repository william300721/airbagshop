import React from "react";
import DataBox from "../../components/DataBox/DataBox";
import AirbagLogo from "../../icons/AirbagLogo";
import MobileIcon from "../../icons/MobileIcon";
import Layout from "../../layout/Layout";
import { countries } from "../../utils/data/country";

const LanguageSelection = () => {
  return (
    <Layout>
      <div className="h-full w-full m-auto">
        <div className="w-100 flex">
          <div className="w-2/5 h-[calc(100vh-80px)] flex flex-col items-center justify-between">
            <div className="mt-[200px]">
              <AirbagLogo />
            </div>
            <div className="flex w-full flex-col items-center justify-center">
              <div className="h-[240px] w-[240px] flex items-center justify-center bg-white">
                <img src="/assets/images/qr-code.svg" alt="" />
              </div>
              <div className="flex w-full items-center justify-center mt-6">
                <MobileIcon />
                <p className="ml-2">Scan to continue by phone</p>
              </div>
            </div>
          </div>
          <div className="w-3/5 min-h-screen flex flex-col gap-y-2">
            {countries.map((country) => (
              <DataBox
                key={country.id}
                id={country.id}
                name={country.name}
                image={country.image}
                url={{
                  pathname: '/login',
                  state: {
                    image: country.image
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LanguageSelection;
