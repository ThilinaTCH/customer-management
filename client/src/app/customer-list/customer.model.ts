export class CustomerModel {
  id: string;
  status: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  
  slug: string;
  title: string;
  image: string;
  description: string;
  tags: Array<Object>;
}
