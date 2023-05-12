import * as Yup from "yup";

export const solidersSchema = Yup.object({
  name: Yup.string().required("Bu hissə boş qala bilməz!"),
  longName: Yup.string().required("Bu hissə boş qala bilməz!"),
  fight: Yup.string().required("Bu hissə boş qala bilməz!"),
  date: Yup.string().required("Bu hissə boş qala bilməz!"),
  // rankImg: Yup.string().required("Bu hissə boş qala bilməz!"),
  rank: Yup.string().required("Bu hissə boş qala bilməz!"),
  // reward: Yup.string().required("Bu hissə boş qala bilməz!"),
  life: Yup.string().required("Bu hissə boş qala bilməz!"),
  image: Yup.string().required("Bu hissə boş qala bilməz!"),
});
