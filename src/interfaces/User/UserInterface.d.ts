type CarType = {
  carModel?: string;
  carType?: string;
  colorCar?: string;
  id?: string;
  plaque?: string;
};
interface UserInterface {
  firstName?: string;
  lastName?: string;
  avatar?: string;
  nationalCode?: string;
  birthDate?: string;
  mobile?: string;
  address?: string;
  car?: CarType;
  accessToken?: string;
  refreshToken?: string;
  updatedAt?: string;
}
