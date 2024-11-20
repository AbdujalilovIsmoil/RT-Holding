interface buttonType {
  className: any;
  children: React.ReactNode;
  type: "button" | "submit";
}

const ButtonComponent = ({ children, ...props }: buttonType) => {
  return <button {...props}>{children}</button>;
};

export default ButtonComponent;
