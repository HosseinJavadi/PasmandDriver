import { TimesheetRequestInterface } from "../Timesheet";

export interface RequestInformationInterface extends TimesheetRequestInterface {
  userId: {
    firstName: string;
    id: string;
    lastName: string;
    mobile: string;
    username: string;
  };
}
