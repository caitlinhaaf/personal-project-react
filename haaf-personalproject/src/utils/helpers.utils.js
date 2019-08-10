export const isTextFieldPopulated = (str) => {
    if(str===undefined) return
    return (str.length > 0) ? true : false;
}
