
import { Textarea } from '../../textarea';
import { FormControl, FormField, FormItem, FormMessage } from '../../form';

type TTextareaProps = {
    name: string;
    label?: string;
    placeholder?: string;
    required?: boolean;
};

const SHTextarea = ({ name, label, placeholder, required }: TTextareaProps) => {
    return (
        <div>
            {label && <label htmlFor={name} className="block py-2 text-[#374b5c] text-[16px] font-bold">{label} {(label && required) && <span className='text-red-500'>*</span>}</label>}
            <FormField
                name={name}
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <Textarea required={required} placeholder={placeholder} className='resize-none' {...field} value={field.value || ""} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
};

export default SHTextarea;
