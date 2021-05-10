function incAction() {
  return {
    type: "INC_NUMBER",
  };
}
function decAction() {
  return {
    type: "DEC_NUMBER",
  };
}
export { incAction, decAction };
