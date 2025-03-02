// components/SPInput.tsx

import { Input } from '../../input';
import { FormControl, FormField, FormItem, FormMessage } from '../../form';

type TInputProps = {
    type: string;
    name: string;
    label?: string;
    placeholder?: string;
};

const SHInput = ({ type, name, label, placeholder }: TInputProps) => {
    return (
        <div className='w-full'>
            {label && <label htmlFor={name} className="block py-2 text-[#374b5c] text-[16px] font-bold">{label}</label>}
            <FormField
                name={name}
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <Input placeholder={placeholder} className='py-7' type={type} {...field} value={field.value || ""} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
};

export default SHInput;
