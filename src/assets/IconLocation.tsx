interface IconProps {
    width?: number;
    height?: number;
    fill?: string;
  }
  
  const IconLocation: React.FC<IconProps> = ({
    width = 18,
    height = 18,
    fill = "var(--primary)",
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={width}
        height={height}
        fill={fill}
      >
        <path d="M12,0A10.513,10.513,0,0,0,1.5,10.5c0,2.826,2.2,6.766,6.541,11.709a5.275,5.275,0,0,0,7.92,0C20.3,17.267,22.5,13.327,22.5,10.5A10.513,10.513,0,0,0,12,0Zm1.706,20.231a2.33,2.33,0,0,1-3.412,0c-3.683-4.195-5.8-7.742-5.8-9.73a7.5,7.5,0,0,1,15,0C19.5,12.489,17.389,16.036,13.706,20.231Z"/><path d="M12,6.055a4.363,4.363,0,1,0,4.363,4.363A4.368,4.368,0,0,0,12,6.055Zm0,5.726a1.363,1.363,0,1,1,1.363-1.363A1.364,1.364,0,0,1,12,11.781Z"/>
      </svg>
    );
  };
  
  export default IconLocation;
  