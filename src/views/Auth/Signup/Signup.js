import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import { auth } from "../../../firebase";
import urls from "constants/urls";
import Form from "components/Auth/Form";
import { validationSchema } from "schema/Auth";
import {
  createSessionId,
  setSessionId,
} from "services/sessionService";

export default function Signup() {
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setErrors }) => {
      auth
        .createUserWithEmailAndPassword(values.email, values.password)
        .then(async () => {
          const { data } = await createSessionId();
          setSessionId(data.guest_session_id);

          navigate("/", { replace: true });
        })
        .catch(() => {
          setErrors({ email: "Email already exists" });
        });
    },
  });

  return (
    <Form
      title={"Sign up"}
      url={urls.signin}
      formik={formik}
      changeLink={"Sign in"}
    />
  );
}
