export interface Doctor {
  doctorId: number;
  firstName: string;
  lastName: string;
  emailId: string;
  phoneNumber: number;
  dob: string,
  location: string;
  specialities: any[];
  active: boolean;
  schedule: any[];
}
