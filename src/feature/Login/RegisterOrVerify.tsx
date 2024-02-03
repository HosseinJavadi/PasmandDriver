import { useState } from "react";
import { RequestApi } from "../../apis";
import { ForgotImage } from "../../asset/images";
import { Button } from "../../components/Button";
import { Image } from "../../components/Image";
import { useFetch, useForm } from "../../hooks";
import { RegisterInterface } from "../../interfaces";

export const RegisterOrVerify = () => {
  const [sendedCode, setSendedCode] = useState<boolean>(false);
  const sendCode = useFetch({
    request: RequestApi.verifyCode(),
    onSuccess(data) {
      debugger;
      setSendedCode(true);
    },
  });
  const Form = useForm<{ nationalCode: string }>({
    validations: {
      RoleForNationalCode: (param) => {
        if (!param) return "کد ملی نمیتواند خالی باشد";

        return true;
      },
    },
  });
  return (
    <div className="p-2 py-6 flex flex-col justify-center items-center gap-3">
      <h1 className="text-md">ورود راننده</h1>
      <Image src={ForgotImage} className=" px-5" />
      {!sendedCode ? (
        <Form
          onSubmit={(e) => {
            sendCode.reFetch({ nationalCode: e.nationalCode });
          }}
          className="p-2 shadow-inner grid grid-cols-1 justify-items-center items-center gap-3 "
        >
          <Form.TextBox name="nationalCode" placeholder="کد ملی"></Form.TextBox>
          <Form.Submit title="ارسال کد" className={{ className: "px-3" }} />
        </Form>
      ) : (
        <></>
      )}
    </div>
  );
};
