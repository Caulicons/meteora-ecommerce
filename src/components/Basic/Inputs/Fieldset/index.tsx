import { ComponentProps } from "react";

interface FieldsetProps extends ComponentProps<'fieldset'> {
  legend: string
}

export default function Fieldset({ legend, children, ...props }: FieldsetProps) {
  return (
    <fieldset className="grid gap-4" id={'colors'}>
      <legend className="mb-4 text-[13px] font-bold">{legend}</legend>
      <div className=" flex gap-4">
        {children}
      </div>
    </fieldset>
  )
}
