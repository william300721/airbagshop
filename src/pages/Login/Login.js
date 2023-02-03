import React, { useEffect, useState } from "react";
import DataBox from "../../components/DataBox/DataBox";
import Header from "../../components/Login/Header";
import Layout from "../../layout/Layout";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [countryImage, setCountryImage] = useState("");

  useEffect(() => {
    setCountryImage(
      history.location.state?.image || "/assets/images/edit-icon.svg"
    );
  }, [history]);

  return (
    <Layout>
      <div className="mb-7">
        <Header image={countryImage} />
      </div>
      <div className="w-full flex gap-x-6">
        <div className="w-1/2 bg-[#193451] rounded min-h-[calc(100vh-156px)] p-20">
          <h1 className="mt-[140px] mb-[104px] text-center font-bold text-5xl text-white">
            Registreer je als nieuwe klant
          </h1>
          <DataBox
            image={"/assets/images/edit-icon.svg"}
            name={"Registreer mij"}
            textClass="!ml-6 !text-xl"
          />
        </div>
        <div className="w-1/2 bg-white rounded min-h-[calc(100vh-156px)] p-20">
          <h1 className="mt-[140px] mb-[104px] text-center font-bold text-5xl text-[#193451]">
            Meld je aan met jouw account
          </h1>
          <div className="flex flex-col gap-y-4">
            <DataBox
              image={"/assets/images/mobile-icon.svg"}
              name={"Login via telefoon"}
              textClass="!ml-6 !text-xl"
            />
            <DataBox
              image={"/assets/images/mention-icon.svg"}
              name={"Login via e-mail"}
              textClass="!ml-6 !text-xl"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
