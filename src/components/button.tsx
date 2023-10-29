import { keyframes, styled } from "@mui/material";

const rotateBorder = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const ButtonBox = styled("div")((
  { isMobile, largeButton }: { isMobile: boolean; largeButton: boolean },
) => ({
  margin: isMobile ? "16px 32px" : "64px 64px",
  width: isMobile ? "150px" : largeButton ? "200px" : "150px",
  height: isMobile ? "50px" : largeButton ? "70px" : "60px",
  borderRadius: "26px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  boxShadow: "2px 2px 8px rgba(0, 0, 0, 1)",
  "&:hover .rotating_border_line": {
    animationName: rotateBorder,
    animationDuration: "2s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
    animationPlayState: isMobile ? "paused" : "running",
  },
}));

const StyledButton = styled("button")((
  { isMobile, largeButton }: { isMobile: boolean; largeButton: boolean },
) => ({
  position: "absolute",
  borderRadius: "20px",
  border: "none",
  backgroundColor: "#fff",
  fontFamily: "Abhaya Libre",
  color: "#222",
  cursor: "pointer",
  alignItems: "center",
  justifyContent: "center",
  fontSize: isMobile ? 14 : 22,
  width: isMobile ? "140px" : largeButton ? "190px" : "140px",
  height: isMobile ? "40px" : largeButton ? "60px" : "50px",
}));

const RotatingBorder = styled("div")(({ isMobile }: { isMobile: boolean }) => ({
  width: isMobile ? "150px" : "200px",
  height: isMobile ? "150px" : "200px",
  background: isMobile
    ? "linear-gradient(75deg, #3E4150, #C0C0C0 40%)"
    : "linear-gradient(to left, #3E4150, #C0C0C0 40%)",
  animationPlayState: "paused",
  "&:hover": {
    animationName: rotateBorder,
    animationDuration: "2s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
    animationPlayState: isMobile ? "paused" : "running",
  },
}));

interface ButtonProps {
  buttonText: string;
  onClick?: () => void;
  isMobile: boolean;
  type?: "button" | "submit" | "reset";
  fatText?: boolean;
  largeButton?: boolean;
  darkBackground?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  buttonText,
  onClick,
  isMobile,
  type,
  fatText,
  largeButton = false,
  darkBackground,
}) => {
  return (
    <ButtonBox
      isMobile={isMobile}
      largeButton={largeButton}
      sx={{
        backgroundColor: darkBackground ? "#f2f2f2" : "#fff",
      }}
    >
      <RotatingBorder
        isMobile={isMobile}
        className={isMobile
          ? "rotating_border_line_mobile"
          : "rotating_border_line"}
      />
      <StyledButton
        isMobile={isMobile}
        largeButton={largeButton}
        sx={{
          fontWeight: fatText ? 500 : 200,
        }}
        type={type}
        onClick={onClick}
      >
        {buttonText}
      </StyledButton>
    </ButtonBox>
  );
};

export default Button;
