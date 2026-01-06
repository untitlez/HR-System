export interface bodyInterface {
  fullName: string;
  gender: string;
  email: string;
  address: string;
  phone: string;
  citizenId: string;
  birthDate: Date;
  position: string;
  startDate: Date;
  employmentType: string;
  status: string;
  yearsOfService: number;
  salary: number;
  leaveDays: {
    sickLeave: number;
    personalLeave: number;
    vacationLeave: number;
  };
  approval: {
    days: number;
    note: string;
    leaveDate: Date;
    leaveType: string;
  };
}

export interface usersInterface {
  params: { id: string };
  body: bodyInterface;
}
