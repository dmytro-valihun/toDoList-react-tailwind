export default function validValue(value) {
    const regexp = /^[A-Za-z0-9\s]+$/;
    return regexp.test(value.trim());
}