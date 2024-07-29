import { atom } from 'jotai';

export const CompanyAddressData=atom()
export const Fields =atom([{ processDescription: "", processName: "", processPicture: []}]);
export const FieldsQC =atom([{ processDescription: "", processName: "", processPicture: []}]);

export const FieldsRDC =atom([{ processDescription: "", processName: "", processPicture: []}]);
export const Productfields= atom([{ equipmentName: "", equipmentPicture:[], equipmentModel: "", equipmentQuantity: "" }]);
export const ProductfieldsQC= atom([{ equipmentName: "", equipmentPicture:[], equipmentModel: "", equipmentQuantity: "" }]);

export const LoginOtpEmail = atom("")
export const LoginPhoneNo = atom("")
export const SignupPhoneNo = atom("")
export const SignupEmail = atom("")
export const ForgotPhoneNo = atom("")
export const ForgotEmail = atom("")

export const manufacturImgUrl = atom([])
export const QCImgUrl = atom([])
export const RDCImgUrl = atom([])
export const manufacturAwsUrl =atom([])
export const qualityAwsUrl =atom([])
export const RDCapabilityAwsUrl =atom([])

export const ManuEquipmentImgUrl =atom([])
export const AwsManuEquipmentUrl =atom([])
export const QcEquipmentImgUrl =atom([])
export const AwsQcEquipmentUrl =atom([])