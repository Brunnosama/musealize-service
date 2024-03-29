import { InputHTMLAttributes } from "react"
import { Form, FormControlProps } from "react-bootstrap"
import { IMaskInput } from "react-imask"

export type FormFieldProps = {
    controlId?: string
    label?: string
    error?: string
    mask?: { mask: string }[]
    onAccept?: (value: unknown) => void
} & FormControlProps & InputHTMLAttributes<HTMLInputElement>

export function FormField({ controlId, label, error, mask, onAccept, ...inputProps }: FormFieldProps) {
    return (
        <Form.Group className="mb-3" controlId={controlId}>
            {label && <Form.Label className='mb-1'>{label}</Form.Label>}
            {mask ? (
                <Form.Control 
                {...inputProps}
                as={IMaskInput}
                mask={mask}
                onChange={undefined}
                onAccept={onAccept}
                />
            ) : (
                 <Form.Control {...inputProps} />
            )}
            <Form.Control.Feedback type='invalid'>
                {error}
            </Form.Control.Feedback>
        </Form.Group>
    )
}