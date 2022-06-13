<template>
  <Form
      @submit="onSubmit"
      :validation-schema="schema"
      @invalid-submit="onInvalidSubmit">
    <input-validator
        name="name"
        placeholder="Nhập username"
        type="text"
        label="Full Name"
    ></input-validator>
    <input-validator
        name="email"
        placeholder="Nhập email"
        type="email"
        label="Email"
    ></input-validator>
    <input-validator
        name="password"
        placeholder="Nhập password"
        type="text"
        label="Password"
    ></input-validator>
    <input-validator
        name="confirm_password"
        placeholder="Nhập lại password"
        type="text"
        label="Comfirm Password"
    ></input-validator>
    <button class="submit-btn" type="submit" @click="onSubmit">Submit</button>
  </Form>
</template>

<script setup lang="ts">
import InputValidator from "@/components/Forms/InputValidator.vue"
import * as yup from 'yup'
import { useForm, Form } from "vee-validate";

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  confirm_password: yup.string()
      .required()
      .oneOf([yup.ref("password")], "Passwords do not match"),
});

// const {handleSubmit} = useForm({validationSchema: schema})
//
// const onSubmit = handleSubmit((values) => {
//   console.log(values)
// })

const onSubmit = () => {
  // console.log('valid')
}

const onInvalidSubmit = () => {
  const submitBtn = document.querySelector(".submit-btn")
  if (!submitBtn) {
    return
  }
  submitBtn.classList.add("invalid");
  setTimeout(() => {
    submitBtn.classList.remove("invalid");
  }, 1000);
}
</script>

<style scoped lang="scss">
.submit-btn {
  background: $primary-color;
  outline: none;
  border: none;
  color: #fff;
  font-size: 18px;
  padding: 10px 15px;
  display: block;
  width: 100%;
  border-radius: 7px;
  margin-top: 40px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}

.submit-btn.invalid {
  animation: shake 0.5s;
  /* When the animation is finished, start again */
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px);
  }
  10% {
    transform: translate(-1px, -2px);
  }
  20% {
    transform: translate(-3px, 0px);
  }
  30% {
    transform: translate(3px, 2px);
  }
  40% {
    transform: translate(1px, -1px);
  }
  50% {
    transform: translate(-1px, 2px);
  }
  60% {
    transform: translate(-3px, 1px);
  }
  70% {
    transform: translate(3px, 1px);
  }
  80% {
    transform: translate(-1px, -1px);
  }
  90% {
    transform: translate(1px, 2px);
  }
  100% {
    transform: translate(1px, -2px);
  }
}

.submit-btn:hover {
  transform: scale(1.1);
}
</style>
