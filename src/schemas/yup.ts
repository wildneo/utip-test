import * as Yup from "yup";

Yup.setLocale({
  mixed: {
    notType: "Недопустимый формат",
    required: "Поле не может быть пустым"
  },
  string: {
    email: "Недопустимый формат"
  }
});

export default Yup;
