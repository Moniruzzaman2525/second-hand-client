// components/SPInput.tsx

import { Input } from '../../input';
import { FormControl, FormField, FormItem, FormMessage } from '../../form';

type TInputProps = {
    type: string;
    name: string;
    label?: string;
};

const SHInput = ({ type, name, label }: TInputProps) => {
    return (
        <div>
            {label && <label htmlFor={name} className="block py-2 text-sm font-semibold">{label}</label>}
            <FormField
                name={name}
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <Input type={type} {...field} value={field.value || ""} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
};

export default SHInput;
