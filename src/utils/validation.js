export function validateEmail(email) {
  return /^\S+@\S+\.\S+$/.test(email);
}

export function validatePhone(phone) {
  return phone.trim().length >= 10;
}

export function validateName(name) {
  return name.trim().length > 0;
}