import { PreferredLocation } from './preferred.location.model'
import { Immigration } from './candidate.imigration.model'

export class AddCandidate {

    candidateId: string;
    candidateName: string;
    payType: string;
    email: string;
    payRate: string;
    alternateEmail:string;
    graduationDate: Date;
    workMobile: string;
    currentLocation: string;
    homeMobile: string;
    visa: string;
    visaStartDate: Date;
    enrollmentStstus: string;
    skill: string[];
    courseFee: string;
    nextFollowupDate:Date;
    recruitmentSource:string;
    preferredLocations:PreferredLocation[];
    serviceName:string;
}