interface InputFormProps {
    label: string;
    value: number;
    onChange: (value: number) => void;
  }
  
  const InputForm: React.FC<InputFormProps> = ({ label, value, onChange }) => {
    return (
      <div className="marginBottom">
        <label>{label}</label>
        <input type="number" value={value} onChange={(e) => onChange(parseFloat(e.target.value))} />
      </div>
    );
  };
  
  export default InputForm;
