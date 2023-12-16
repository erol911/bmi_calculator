interface DisplayResultProps {
    result: number;
}

const DisplayResult: React.FC<DisplayResultProps> = ({ result }) => {
    if (result > 30){
        return (
            <div className="marginBottom">
                <h2>BMI Result: {result.toFixed(2)} (Obese)</h2>
            </div>
        );
    } else if ( result < 30 && result >= 25){
        return (
            <div className="marginBottom">
                <h2>BMI Result: {result.toFixed(2)} (Overweight)</h2>
            </div>
        );
    } else if ( result < 25 && result >= 18.5 ){
        return (
            <div className="marginBottom">
                <h2>BMI Result: {result.toFixed(2)} (Normal)</h2>
            </div>
        );
    }
    else {
        return (
            <div className="marginBottom">
                <h2>BMI Result: {result.toFixed(2)} (Underweight)</h2>
            </div>
        );
    }

};

export default DisplayResult;
