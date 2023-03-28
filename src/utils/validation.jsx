export const validate = (fieldName, value) => {
  const error = [];
  switch (fieldName) {
    case "lastname":
      if (!value) {
        error.push("Last name field is required");
      }
      break;

    case "email":
      if (!value) {
        error.push("Email address is required");
      } else {
        if (!/[A-Za-z]/.test(value.split("@")[0].split("").shift())) {
          error.push("First symbol must be a letter");
        }
        if (!/^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i.test(value)) {
          error.push("Invalid email(example: test1.2kek-lol@gmail.com)");
        }
      }
      break;

    case "phoneNumber":
      if (!value) {
        error.push("Phone number is required");
      }
      if (!/^(\+)?([0-9]){10,14}$/.test(value)) {
        error.push("Please enter a valid phone number");
      }
      break;

    case "message":
      if (!value) {
        error.push("Message field is required");
      }
      break;

    default:
      if (!value || !value.trim()) {
        error.push("First name field is required");
      }
  }
  return error.join(".\n");
};
