import { useNavigate } from "react-router-dom";
import { RequestApi } from "../../apis";
import { DarkhastImage } from "../../asset/images";
import { Button } from "../../components/Button";
import { Image } from "../../components/Image";
import { Loading } from "../../components/Loading";
import { useAppDispatch, useAppSelector, useFetch, useForm } from "../../hooks";
import { BaseResponseInterface, UserLoginInterface } from "../../interfaces";
import { loginUser } from "../../store/reducers/userReducer";
import { useEffect } from "react";

export const Login = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const user = useAppSelector((state) => state.userReducer);
  const LoginRequest = useFetch<
    BaseResponseInterface<UserInterface>,
    UserLoginInterface,
    unknown
  >({
    request: RequestApi.loginUser(),
    onSuccess(data) {
      dispatch(loginUser(data.data));
      navigation("/");
    },
  });
  const Form = useForm<UserLoginInterface>({
    validations: {
      RoleForNationalCode: (value) => {
        if (!value) return "کد ملی نمیتواند خالی باشد";
        else if (value.length < 10)
          return "کد ملی نمیتواند کمتر از ده رقم باشد";

        return true;
      },
      RoleForPassword: (value) => {
        if (!value) return "رمزعبور  نمیتواند خالی باشد";
        else if (value.length < 8)
          return "رمز عبور نمیتواند کمتر از 8 کارکتر باشد";

        return true;
      },
    },
  });
  useEffect(() => {
    user.accessToken && navigation("/", { replace: true });
  }, []);
  return (
    <>
      <Loading isLoading={LoginRequest.isLoading} />
      <div className="p-2 py-6 flex flex-col justify-center items-center gap-3">
        <h1 className="text-md">ورود راننده</h1>
        <Image src={DarkhastImage} className="mt-6" />
        <Form
          onSubmit={(userLoginData) => {
            LoginRequest.reFetch(userLoginData);
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
    </>
  );
};
