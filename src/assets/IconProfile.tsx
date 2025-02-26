interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const IconProfile: React.FC<IconProps> = ({
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
      <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm-3,20.485v-1.985c0-.275.224-.5.5-.5h5c.276,0,.5.225.5.5v1.985c-.939.333-1.949.515-3,.515s-2.061-.182-3-.515Zm9-1.783v-.202c0-1.93-1.57-3.5-3.5-3.5h-5c-1.93,0-3.5,1.57-3.5,3.5v.202c-1.84-1.649-3-4.042-3-6.702C3,7.037,7.038,3,12,3s9,4.037,9,9c0,2.66-1.16,5.053-3,6.702Zm-6-12.702c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5,3.5-1.57,3.5-3.5-1.57-3.5-3.5-3.5Z" />
    </svg>
  );
};

export default IconProfile;
