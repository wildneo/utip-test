import Yup from "./yup";

export const ALLOW_FORMATS = ["image/jpg", "image/jpeg", "application/pdf"];

export default Yup.mixed()
  .test("fileType", "Недопустимый формат файла", (file: File) =>
    ALLOW_FORMATS.includes(file.type)
  )
  .required()
  .defined();
