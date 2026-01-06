export interface bodyInterface {
  email: string;
  password: string;
  role: string;
}

export interface authInterface {
  params: { id: string };
  body: bodyInterface;
  jwt: any;
  cookie: any;
}
