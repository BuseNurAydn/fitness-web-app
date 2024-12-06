export enum SelectedPage{
    Home="home",
    Benefits="benefits",
    OurClasses="ourClasses",
    ContactUs="contactUs"
}
export interface BenefitTypes{
    icon: JSX.Element;
    title: string;
    description: string;
}
export interface ClassType{
    image: string;
    name: string;
    description: string;
    
}