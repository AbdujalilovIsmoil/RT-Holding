interface textareType {
  className: string;
}

const Textarea = (props: textareType) => {
  return <textarea {...props}></textarea>;
};

export default Textarea;
