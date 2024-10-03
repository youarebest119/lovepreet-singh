import { clsx } from '@/utils/utils'
import React, { ButtonHTMLAttributes } from 'react'
import Spinner from '../spinner/spinner'

type PropTypes = ButtonHTMLAttributes<HTMLButtonElement> & {
    fluid?: boolean,
    text?: string,
    loading?: boolean,
}

const Button = ({ className, fluid, children, loading, text, ...rest }: PropTypes) => {
    return (
        <button
            type="button"
            {...rest}
            className={clsx("custom_btn", fluid && "fluid", className)}
        >
            {
                loading ?
                    <Spinner />
                    :
                    text
                    ||
                    children
            }
        </button>
    )
}

export default Button
