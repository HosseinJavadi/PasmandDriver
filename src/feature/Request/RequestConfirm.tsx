import { RequestConfirmImage } from "../../asset/images";
import { Image } from "../../components/Image";
import { useForm } from "../../hooks";

export const RequestConfirm = () => {
  const Form = useForm<UserInterface>({
    validations: {
      RoleForAddress: (value) => {
        if (value.length > 3) return true;
        else return "آدرس نمیتواند کمتر از سه کارکتر باشد";
      },
    },
  });

  return (
    <>
      <div className="p-2">
        <div className="flex justify-center items-center flex-col">
          <Image src={RequestConfirmImage} className="h-80 w-80" />
          <h1 className="text-sm text-primaryDark mt-3 font-bold">
            اطلاعات مشتری
          </h1>
          <div className="w-full grid grid-cols-1 px-2 justify-items-start items-center mt-5 gap-3 font-bold">
            <div className="flex justify-between w-full">
              <span>نام :سید امیر علی صفری</span>
              <span>شناسه درخواست : #A123DD1D</span>
            </div>
            <p className="col-span-2">
              آدرس : قم ایران زمین بزرگ کوروش 2 سومی همین نبش
            </p>
            <span>قیمت کل مشتری : 2500000</span>
          </div>
          <h1 className="text-sm text-primaryDark mt-5 font-bold">
            ثبت درخواست
          </h1>
        </div>
      </div>
      <Form className="p-4 grid grid-cols-1 ">
        <Form.TextBox
          classNameError=""
          name="address"
          onChange={(value) => {
            console.log(value);
          }}
        ></Form.TextBox>
      </Form>
    </>
  );
};
