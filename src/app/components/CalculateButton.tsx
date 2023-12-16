interface CalculateButtonProps {
    onClick: () => void;
}

const CalculateButton: React.FC<CalculateButtonProps> = ({ onClick }) => {
    return (
        <div>
        <button onClick={onClick}>Calculate</button>
        </div>
    );
};

export default CalculateButton;
