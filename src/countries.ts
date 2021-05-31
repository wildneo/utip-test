import countries from "i18n-iso-countries";
// @ts-ignore
import english from "i18n-iso-countries/langs/ru.json";
countries.registerLocale(english);

export default countries.getNames("ru");
