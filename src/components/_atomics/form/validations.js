export const nameValidator = (fieldName, fieldValue) => {
    if (fieldValue.trim() === "") {
      return `${fieldName} is required`;
    }
    if (/[^a-zA-Z -]/.test(fieldValue)) {
      return "Invalid characters";
    }
    if (fieldValue.trim().length < 3) {
      return `${fieldName} needs to be at least three characters`;
    }
    return null;
  };
  
export const requiredValidator = v => v ? [] : ["This field is required"];
export const isEqualValidator = comparator => (v, fg) => (v !== fg[comparator]) ? ["Fields do not match"] : [];

export const ValidationMessage = ({ valid, visited, validationMessage }) => {
    return (
        <>
        { !valid && visited && (<div className="required">{validationMessage}</div>)}
        </>
    );
}
