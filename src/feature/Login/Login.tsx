import { RequestApi } from "../../apis";
import { DarkhastImage } from "../../asset/images";
import { Button } from "../../components/Button";
import { Image } from "../../components/Image";
import { useFetch, useForm } from "../../hooks";
import { UserLoginInterface } from "../../interfaces";

export const Login = () => {
  const LoginRequest = useFetch({
    request: RequestApi.loginUser(),
    onSuccess(data) {},
  });
  const Form = useForm<UserLoginInterface>({
    validations: {
      RoleForNationalCode: (value) => {
        if (!value) return "کد ملی نمیتواند خالی باشد";

        return true;
      },
      RoleForPassword: (value) => {
        if (!value) return "رمزعبور  نمیتواند خالی باشد";

        return true;
      },
    },
  });
  return (
    <div className="p-2 py-6 flex flex-col justify-center items-center gap-3">
      <h1 className="text-md">ورود راننده</h1>
      <Image src={DarkhastImage} className="mt-6" />
      <Form
        onSubmit={(e) => {
          LoginRequest.reFetch(e);
        }}
        className="p-2 shadow-inner grid grid-cols-1 justify-items-center items-center gap-3 w-72"
      >
        <Form.TextBox
          name="nationalCode"
          classNameParent="w-full"
          placeholder="کد ملی"
        ></Form.TextBox>
        <Form.TextBox
          classNameParent="w-full"
          name="password"
          placeholder="رمز عبور"
          className=""
        ></Form.TextBox>
        <Form.Submit title="ورود" className={{ className: "px-10" }} />
      </Form>

      <div className="p-2">
        <Button
          title="فراموشی رمز عبور یا ایجاد کاربری"
          href="/Verify"
          className={{
            iconClassName: "!text-warnDark",
            className: "!bg-primaryDark !text-white gap-3",
          }}
          btnType="Icon"
          icon="Identification"
        />
      </div>
    </div>
  );
};