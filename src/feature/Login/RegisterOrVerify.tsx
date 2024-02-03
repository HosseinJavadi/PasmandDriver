import { useState } from "react";
import { RequestApi } from "../../apis";
import { ForgotImage } from "../../asset/images";
import { Image } from "../../components/Image";
import { useFetch, useForm } from "../../hooks";
import {
  BaseResponseObjectInterface,
  RegisterInterface,
} from "../../interfaces";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components/Loading";

export const RegisterOrVerify = () => {
  const navigation = useNavigate();
  const [sendedCode, setSendedCode] = useState<boolean>(false);
  const sendCodeRequest = useFetch<
    BaseResponseObjectInterface<string>,
    { nationalCode: string },
    unknown
  >({
    request: RequestApi.getSMSVerifyCode(),
    onSuccess(data) {
      setSendedCode(true);
    },
  });
  const registerRequest = useFetch<void, RegisterInterface, unknown>({
    request: RequestApi.registerUser(),
    onSuccess(data) {
      toast.success("اطلاعات با موفقیت ثبت شد لطفا مجددا ورود کنید");
      setTimeout(() => {
        navigation("/login");
      }, 1000);
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
  const FormRegisterOrVerify = useForm<RegisterInterface>({
    validations: {
      RoleForPassword: (text) => {
        if (!text) return "رمز عبور نمیتواند خالی باشد";
        else if (text.length < 8)
          return "رمز عبور نمیتواند کمتر از 8 کارکتر باشد";

        return true;
      },
      RoleForCode: (text) => {
        if (!text) return "کد ارسالی نمیتواند خالی باشد";
        return true;
      },
    },
  });
  return (
    <>
      <Loading
        isLoading={sendCodeRequest.isLoading || registerRequest.isLoading}
      />
      <div className="p-2 py-6 flex flex-col justify-center items-center gap-3">
        <h1 className="text-md">ثبت اطلاعات راننده</h1>
        <Image src={ForgotImage} className=" px-5" />
        {!sendedCode ? (
          <Form
            onSubmit={(e) => {
              sendCodeRequest.reFetch({ nationalCode: e.nationalCode });
            }}
            className="p-2 shadow-inner grid grid-cols-1 justify-items-center items-center gap-3 "
          >
            <Form.TextBox
              name="nationalCode"
              placeholder="کد ملی"
            ></Form.TextBox>
            <Form.Submit title="ارسال کد" className={{ className: "px-3" }} />
          </Form>
        ) : (
          <>
            <h3>{`کد فعال سازی برای شماره ${sendCodeRequest.data?.data?.data.data.toPersion()} ارسال شد`}</h3>

            <FormRegisterOrVerify
              onSubmit={(e) => {
                registerRequest.reFetch({
                  code: e.code,
                  nationalCode:
                    sendCodeRequest.requestDetail.body?.nationalCode!,
                  password: e.password,
                });
              }}
              className="p-2 shadow-inner grid grid-cols-1 justify-items-center items-center gap-3 "
            >
              <FormRegisterOrVerify.TextBox
                name="code"
                placeholder="کد تایید"
              ></FormRegisterOrVerify.TextBox>
              <FormRegisterOrVerify.TextBox
                name="password"
                type="password"
                placeholder="رمز عبور"
              ></FormRegisterOrVerify.TextBox>
              <FormRegisterOrVerify.Submit
                title="ثبت اطلاعات"
                className={{ className: "px-3" }}
              />
            </FormRegisterOrVerify>
          </>
        )}
      </div>
    </>
  );
};
