interface IconProps {
    width?: number;
    height?: number;
    fill?: string;
  }
  
  const IconAdd: React.FC<IconProps> = ({ width = 24, height = 24, fill = "var(--primary)" }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={width}
        height={height}
        fill={fill}
      >
        <path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 21a9 9 0 1 1 9-9 9.01 9.01 0 0 1 -9 9zm1.5-10.5h3.5v3h-3.5v3.5h-3v-3.5h-3.5v-3h3.5v-3.5h3z"/>
      </svg>
    );
  };
  
  export default IconAdd;
  