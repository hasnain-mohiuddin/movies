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
import { getErrorMessage } from "utils/errorMessages";

export default function SignIn() {
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setErrors , setSubmitting}) => {
      auth
        .signInWithEmailAndPassword(values.email, values.password)
        .then(async () => {
          const { data } = await createSessionId();
          setSessionId(data.guest_session_id);

          navigate("/", { replace: true });
        })
        .catch((e) => {
          setErrors({ email: getErrorMessage[e.code] });
          setSubmitting(false);
        });
    },
  });

  return (
    <Form title={'Sign in'} url={urls.signup} formik={formik} changeLink={'Sign up'}/>
  );
}
