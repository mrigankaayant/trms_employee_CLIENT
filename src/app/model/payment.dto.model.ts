import{PaymentDetails} from './payment.details.model';
export class PaymentDto{
    paymentList:PaymentDetails[];
    totalAmountInDoller:number;
    totalIncentiveInInr:number;
}