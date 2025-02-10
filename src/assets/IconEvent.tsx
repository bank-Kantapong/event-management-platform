interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const IconEvent: React.FC<IconProps> = ({
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
      <path d="m16.365,14.183c0,.379-.264.698-.566.866l-1.564.87.694,1.893c.134.367.013.778-.299,1.013h0c-.319.24-.759.237-1.075-.007l-1.556-1.203-1.556,1.203c-.316.244-.756.247-1.075.007h0c-.312-.235-.433-.646-.299-1.013l.694-1.893-1.564-.87c-.302-.168-.566-.487-.566-.866,0-.321.279-.676.731-.676h2.247l.596-2.283c.094-.362.419-.614.792-.621.373.007.698.259.792.621l.596,2.283h2.247c.452,0,.731.354.731.676Zm2.135-12.183h-.5v-.5c0-.829-.671-1.5-1.5-1.5s-1.5.671-1.5,1.5v.5h-6v-.5c0-.829-.671-1.5-1.5-1.5s-1.5.671-1.5,1.5v.5h-.5C2.467,2,0,4.467,0,7.5v11c0,3.033,2.467,5.5,5.5,5.5h13c3.033,0,5.5-2.467,5.5-5.5V7.5c0-3.033-2.467-5.5-5.5-5.5Zm0,19H5.5c-1.378,0-2.5-1.122-2.5-2.5v-9.5h18v9.5c0,1.378-1.122,2.5-2.5,2.5Z" />
    </svg>
  );
};

export default IconEvent;
