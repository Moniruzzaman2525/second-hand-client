
import { Textarea } from '../../textarea';
import { FormControl, FormField, FormItem, FormMessage } from '../../form';

type TTextareaProps = {
    name: string;
    label?: string;
    placeholder?: string;
};

const SHTextarea = ({ name, label, placeholder }: TTextareaProps) => {
    return (
        <div>
            {label && <label htmlFor={name} className="block py-2 text-[#374b5c] text-[16px] font-bold">{label}</label>}
            <FormField
                name={name}
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <Textarea placeholder={placeholder} className='resize-none' {...field} value={field.value || ""} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
};

export default SHTextarea;
