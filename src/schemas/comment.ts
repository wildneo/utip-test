import Yup from "./yup";

export default Yup.object({
  email: Yup.string().email().required(),
  country: Yup.string().required(),
  comment: Yup.string().required()
}).defined();
