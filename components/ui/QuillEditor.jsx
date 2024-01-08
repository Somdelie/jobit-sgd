import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

/*Custom Tool Bar */
const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "color", "image"],
    [{ "code-block": true }],
    ["clean"],
  ],
}

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "indent",
  "image",
  "code-block",
  "color",
]

const QuillEditor = ({ label, value, onChange }) => {
  return (
    <div className="sm:col-span-2">
      <label
        htmlFor="content"
        className="block text-sm font-medium leading-6 dark:text-gray-300 mb-2 ">
        {label}
      </label>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
      />
    </div>
  )
}

export default QuillEditor
