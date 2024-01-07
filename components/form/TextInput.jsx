import { Label, TextInput } from "flowbite-react"

export default function TextInputForm({
  label,
  name,
  addon,
  register,
  errors,
  isRequired = true,
  type = "text",
  className = "sm:col-span-2",
  defaultValue,
}) {
  return (
    <div className="mt-2">
      <div className=" block">
        <Label htmlFor={name} value={label} />
      </div>
      {/* <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-400 dark:text-gray-300 mb-2 ">
        {label}
      </label> */}
      <div className="mt-2">
        <TextInput
          {...register(`${name}`, { required: isRequired })}
          addon={addon}
          type={type}
          name={name}
          id={name}
          defaultValue={defaultValue}
          autoComplete={name}
          placeholder={`Type ${label.toLowerCase()}`}
        />

        {errors[`${name}`] && (
          <span className="text-sm text-red-500 ">{label} is required</span>
        )}
      </div>
    </div>
  )
}
